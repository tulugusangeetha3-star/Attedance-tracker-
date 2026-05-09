# AI Attendance Tracker - Agent Instructions

## Project Overview

This is a three-tier attendance tracking system with AI-powered face recognition:

- **Backend**: Node.js/Express with MongoDB (port 5000)
- **AI Service**: Face recognition API using face-api.js (port 5001)  
- **Frontend**: React 19 + Vite (main frontend in `/frontend`)

## Build & Run Commands

### Backend
- Development: `npm run dev` (with nodemon)
- Production: `npm start`

### AI Service
- Run: `node server.js` (from `/ai` directory)

### Frontend
- Development: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Architecture Decisions

- RESTful API design
- JWT authentication with bcryptjs
- Email alerts via Nodemailer for low attendance/marks
- Face recognition using pre-trained models stored in `/ai/models`
- Training data organized by student name in `/ai/student images/{studentName}/`

## Conventions

- Routes → Controllers → Models pattern
- Error handling with try/catch and status codes
- Database connections via Mongoose
- Component-based React structure

## Common Pitfalls

- Ensure `.env` file has JWT_SECRET, EMAIL_USER, EMAIL_PASS
- AI service runs on port 5001, backend on 5000
- Models must be loaded before face recognition calls
- Frontend currently has no backend integration (static UI only)

## Autosave Feature Guidance

No autosave functionality is currently implemented. When implementing autosave for attendance tracking:

- Use `localStorage` or `sessionStorage` for temporary client-side persistence
- Implement debounced API calls to save attendance records
- Handle network failures with retry mechanisms and offline queuing
- Automatically mark attendance upon successful face recognition
- Update UI state optimistically, rollback on API errors

Key files to modify:
- [frontend/src/components/AttendanceTable.jsx](frontend/src/components/AttendanceTable.jsx) - Add autosave logic
- [backend/controller/AttendanceController.js](backend/controller/AttendanceController.js) - Ensure API supports frequent updates
- [ai/server.js](ai/server.js) - Integrate with attendance marking on recognition