export const SHIPMENT_TYPES = {
  FCL: 'FCL',
  LCL: 'LCL'
};

export const SHIPMENT_STATUS = {
  BOOKED: 'Booked',
  PICKED_UP: 'Picked Up',
  IN_TRANSIT: 'In Transit',
  CONSOLIDATED: 'Consolidated',
  CUSTOMS_HOLD: 'Customs Hold',
  CLEARED: 'Cleared',
  ARRIVED_PORT: 'Arrived at Port',
  DISPATCHED: 'Dispatched',
  DELIVERED: 'Delivered',
  DELAYED: 'Delayed',
  EXCEPTION: 'Exception'
};

export const STATUS_META = {
  Booked: { color: '#3b82f6' },
  'Picked Up': { color: '#60a5fa' },
  'In Transit': { color: '#8b5cf6' },
  Consolidated: { color: '#f59e0b' },
  'Customs Hold': { color: '#f97316' },
  Cleared: { color: '#10b981' },
  'Arrived at Port': { color: '#14b8a6' },
  Dispatched: { color: '#ec4899' },
  Delivered: { color: '#22c55e' },
  Delayed: { color: '#ef4444' },
  Exception: { color: '#dc2626' }
};

export const mockShipments = [
  {
    id: 'SHP-1001',
    shipmentType: 'FCL',
    bookingNumber: 'KSI-FCL-20491',
    billOfLading: 'BL-7789201',
    containerNumber: 'MSCU1234567',
    clientName: 'BluePeak Manufacturing',
    origin: 'Shanghai, China',
    destination: 'Singapore',
    currentLocation: 'Port of Singapore',
    status: 'In Transit',
    eta: '2026-10-15',
    progress: 58,
    lastUpdated: '2026-10-07T09:15:00Z',
    route: 'Shanghai → Singapore → Dubai',
    milestones: [
      { label: 'Booked', date: '2026-10-01' },
      { label: 'Picked Up', date: '2026-10-03' },
      { label: 'Arrived at Port', date: '2026-10-06' },
      { label: 'In Transit', date: '2026-10-07' }
    ],
    events: [
      { id: 'EVT-1', status: 'Booked', location: 'Shanghai', note: 'Booking confirmed and cargo received at origin.', timestamp: '2026-10-01T08:00:00Z' },
      { id: 'EVT-2', status: 'Picked Up', location: 'Shanghai Terminal', note: 'Container picked up and sealed for outbound freight.', timestamp: '2026-10-03T14:20:00Z' },
      { id: 'EVT-3', status: 'Arrived at Port', location: 'Shanghai Port', note: 'Cargo arrived at port and loaded for export.', timestamp: '2026-10-06T10:45:00Z' },
      { id: 'EVT-4', status: 'In Transit', location: 'Port of Singapore', note: 'Vessel departed with ETA for next regional hub.', timestamp: '2026-10-07T09:15:00Z' }
    ]
  },
  {
    id: 'SHP-1002',
    shipmentType: 'LCL',
    bookingNumber: 'KSI-LCL-11803',
    billOfLading: 'BL-5541024',
    containerNumber: 'N/A',
    clientName: 'Northwind Retail',
    origin: 'Busan, South Korea',
    destination: 'Jakarta, Indonesia',
    currentLocation: 'Consolidation Hub',
    status: 'Consolidated',
    eta: '2026-10-18',
    progress: 72,
    lastUpdated: '2026-10-07T11:00:00Z',
    route: 'Busan → Consolidation → Jakarta',
    milestones: [
      { label: 'Booked', date: '2026-10-02' },
      { label: 'Picked Up', date: '2026-10-04' },
      { label: 'Consolidated', date: '2026-10-07' }
    ],
    events: [
      { id: 'EVT-5', status: 'Booked', location: 'Busan', note: 'LCL booking created and cargo registered.', timestamp: '2026-10-02T08:30:00Z' },
      { id: 'EVT-6', status: 'Picked Up', location: 'Busan Warehouse', note: 'Goods collected for consolidation.', timestamp: '2026-10-04T10:00:00Z' },
      { id: 'EVT-7', status: 'Consolidated', location: 'Consolidation Hub', note: 'Cargo grouped with compatible shipments for onward movement.', timestamp: '2026-10-07T11:00:00Z' }
    ]
  },
  {
    id: 'SHP-1003',
    shipmentType: 'FCL',
    bookingNumber: 'KSI-FCL-21941',
    billOfLading: 'BL-4419018',
    containerNumber: 'CMAU9988771',
    clientName: 'Harborline Foods',
    origin: 'Hamburg, Germany',
    destination: 'Jeddah, Saudi Arabia',
    currentLocation: 'Customs Hold',
    status: 'Customs Hold',
    eta: '2026-10-12',
    progress: 41,
    lastUpdated: '2026-10-07T12:25:00Z',
    route: 'Hamburg → Jeddah',
    milestones: [
      { label: 'Booked', date: '2026-09-29' },
      { label: 'Cleared', date: '2026-10-04' },
      { label: 'Customs Hold', date: '2026-10-07' }
    ],
    events: [
      { id: 'EVT-8', status: 'Booked', location: 'Hamburg', note: 'Container booked for export.', timestamp: '2026-09-29T08:00:00Z' },
      { id: 'EVT-9', status: 'Cleared', location: 'Hamburg Port', note: 'Export documentation approved.', timestamp: '2026-10-04T17:20:00Z' },
      { id: 'EVT-10', status: 'Customs Hold', location: 'Jeddah Port', note: 'Additional customs verification required before release.', timestamp: '2026-10-07T12:25:00Z' }
    ]
  }
];
