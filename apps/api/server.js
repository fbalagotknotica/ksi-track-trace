import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import { mockShipments } from '@ksi/shared';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    app: 'KSI Track and Trace API',
    status: 'online'
  });
});

app.get('/api/shipments', (req, res) => {
  res.json({
    success: true,
    data: mockShipments
  });
});

app.get('/api/shipments/:id', (req, res) => {
  const shipment = mockShipments.find((item) => item.id === req.params.id);

  if (!shipment) {
    return res.status(404).json({ success: false, message: 'Shipment not found' });
  }

  return res.json({ success: true, data: shipment });
});

app.get('/api/dashboard/summary', (req, res) => {
  const total = mockShipments.length;
  const inTransit = mockShipments.filter((item) => item.status === 'In Transit').length;
  const delayed = mockShipments.filter((item) => item.status === 'Delayed' || item.status === 'Customs Hold' || item.status === 'Exception').length;
  const delivered = mockShipments.filter((item) => item.status === 'Delivered').length;

  res.json({
    success: true,
    data: {
      total,
      inTransit,
      delayed,
      delivered,
      activeAlerts: delayed + 2
    }
  });
});

app.post('/api/shipments/:id/status', (req, res) => {
  const { status, note, location } = req.body;
  const shipment = mockShipments.find((item) => item.id === req.params.id);

  if (!shipment) {
    return res.status(404).json({ success: false, message: 'Shipment not found' });
  }

  shipment.status = status;
  shipment.currentLocation = location || shipment.currentLocation;
  shipment.lastUpdated = new Date().toISOString();
  shipment.events.unshift({
    id: `EVT-${Date.now()}`,
    status,
    location: location || shipment.currentLocation,
    note: note || 'Status updated by operations team.',
    timestamp: new Date().toISOString()
  });

  io.emit('shipment:updated', { shipmentId: shipment.id, shipment, message: `Shipment ${shipment.id} updated to ${status}` });

  return res.json({ success: true, data: shipment });
});

io.on('connection', (socket) => {
  socket.emit('connection:ready', { message: 'Connected to KSI Trace API' });

  socket.on('shipment:subscribe', (shipmentId) => {
    socket.join(`shipment:${shipmentId}`);
  });
});

server.listen(PORT, () => {
  console.log(`KSI Track and Trace API is running on http://localhost:${PORT}`);
});
