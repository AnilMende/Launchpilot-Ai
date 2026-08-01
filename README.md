# 🚀 LaunchPilot AI

An AI-powered startup guidance platform that helps entrepreneurs navigate every stage of building a startup. The platform combines a structured knowledge base, curated learning resources, and Google Gemini AI to provide intelligent answers to startup-related questions.

---

## 📌 Overview

LaunchPilot AI is a full-stack MERN application designed to simplify the startup journey. Users can explore startup topics, read detailed articles, discover useful resources, and interact with an AI assistant trained on the platform's knowledge base.

Administrators can manage all startup content through a dedicated dashboard with complete CRUD functionality.

---

## ✨ Features

### 👤 Authentication

* User Registration
* Secure Login
* JWT Authentication
* Protected Routes
* Role-Based Authorization (Admin/User)

---

### 📚 Startup Knowledge Base

* Startup Topics
* Detailed Articles
* External Resources
* Search & Filtering
* Responsive Detail Pages

---

### 🤖 AI Startup Assistant

* Google Gemini Integration
* Startup-focused AI responses
* Chat History
* Markdown Response Rendering
* Knowledge Base Assisted Answers

---

### 🛠 Admin Dashboard

* Dashboard Layout
* Topic Management
* Article Management
* Resource Management
* Create / Update / Delete Operations
* Reusable Form Modals
* Delete Confirmation Dialogs

---

## 🏗 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* React Markdown
* Remark GFM
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Joi Validation
* bcrypt
* Google Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas
* Cloudinary

---

## 📂 Project Structure

```
LaunchPilot-AI

├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── hooks
│   │   ├── utils
│   │   └── App.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── helpers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── validators
│   └── package.json
│
├── docs
│   ├── prompts
│   └── architecture
│
└── README.md
```

---

## 🗄 Database Collections

* Users
* Topics
* Articles
* Resources
* Chats
* Messages

---

## 🔄 Application Flow

```
User

↓

React Frontend

↓

Express REST API

↓

Authentication

↓

Business Logic

↓

MongoDB

↓

Google Gemini AI (Chat Module)

↓

Response to User
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone <https://github.com/AnilMende/Launchpilot-Ai>
```

### Frontend

```bash
cd client

npm install

npm run dev
```

### Backend

```bash
cd server

npm install

npm run dev
```

---

## 🔐 Environment Variables

### Backend (.env)

```
PORT=

MONGO_URI=

DB_NAME=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

JWT_ACCESS_EXPIRY=

JWT_REFRESH_EXPIRY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

GEMINI_API_KEY=
```

### Frontend (.env)

```
VITE_API_BASE_URL=
```

---

## 📖 API Modules

* Authentication API
* Topics API
* Articles API
* Resources API
* AI Chat API
* Admin API

---

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Tablet
* Mobile Devices

---

## 📚 Documentation

Project documentation is available in the **docs/** folder.

* Architecture
* Prompt Engineering
* Project Planning
* Authentication
* AI Integration
* Frontend Development
* Backend Development
* Admin Dashboard

---

## 🚀 Future Improvements

* AI Streaming Responses
* Resource Bookmarking
* User Profiles
* Advanced Analytics
* Multi-language Support
* AI Conversation Memory

---

## 👨‍💻 Author

**Anil Kumar**

B.Tech – Artificial Intelligence & Data Science

---

## 📄 License

This project is developed for educational and portfolio purposes.
