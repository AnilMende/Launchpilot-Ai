# System Architecture

## Overview

LaunchPilot AI is a full-stack web application that helps entrepreneurs explore startup-related knowledge using AI-assisted search and curated resources.

The application follows a client-server architecture.

```
User
   │
   ▼
React Frontend (Vite + Tailwind CSS)
   │
REST API
   │
Express.js Backend
   │
├── Authentication
├── Topics
├── Articles
├── Resources
├── AI Chat
└── Admin Module
   │
MongoDB Database
   │
Google Gemini API
```

## Main Components

- React Frontend
- Express Backend
- MongoDB Database
- Google Gemini API
- JWT Authentication
- Cloudinary (Image Storage)

## Request Flow

1. User sends a request.
2. Frontend calls the Express API.
3. Backend validates the request.
4. MongoDB returns data.
5. AI requests are processed using Gemini.
6. Backend sends the response back to the frontend.

## Architecture Pattern

- Client-Server Architecture
- RESTful API
- Component-Based Frontend
- Service Layer Backend