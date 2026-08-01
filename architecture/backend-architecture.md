# Backend Architecture

## Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Joi

## Folder Structure

```
server/
│
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── validators/
├── helpers/
├── utils/
└── config/
```

## Layers

### Routes

Receive HTTP requests.

↓

### Controllers

Handle request/response.

↓

### Services

Business logic.

↓

### Models

MongoDB operations.

↓

### Database

Persist data.

## Modules

- Authentication
- Topics
- Articles
- Resources
- AI Chat
- Admin

## Security

- JWT Authentication
- Role-Based Authorization
- Joi Validation
- Password Hashing