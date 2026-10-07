# KSI Track and Trace

KSI Track and Trace is a full-stack cargo tracking prototype designed for both FCL and LCL shipments. It includes:

- a web dashboard built with React + Vite
- a backend API built with Express and Socket.IO
- a shared data layer for future mobile app expansion
- real-time shipment status updates and event tracking

## Architecture

- apps/web: dashboard web app
- apps/api: REST API + realtime socket server
- packages/shared: shared constants and mock data

## Features

- FCL and LCL shipment tracking
- Shipment search and filtering
- Live status updates
- Summary dashboard metrics
- Route and milestone timeline
- Mobile-ready architecture for future React Native or Flutter integration

## Getting started

1. Install dependencies:

   npm install

2. Start both services:

   npm run dev

3. Open the web dashboard:

   http://localhost:5173

4. API server:

   http://localhost:4000/api

## API overview

- GET /api/health
- GET /api/shipments
- GET /api/shipments/:id
- GET /api/dashboard/summary
- POST /api/shipments/:id/status

## Future mobile expansion

The project is structured so a mobile app can be added under `apps/mobile` using the same shared shipment status and type definitions.

## Project team

KSI Logistics Operations
