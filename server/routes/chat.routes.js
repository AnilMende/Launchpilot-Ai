import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createChatSchema, sendMessageSchema, updateChatTitleSchema } from "../validators/chat.validator.js";
import {
    addAssistantMessage, addUserMessage, createChat,
    deleteChat, getChatById, getUserChats, updateChatTitle
} from "../controllers/chat.controller.js";


const chatRouter = express.Router();

// All chat routes require authentication
chatRouter.use(authenticate);

// Create Chat
chatRouter.post(
    "/",
    validate(createChatSchema),
    createChat
);

// Get All User Chats
chatRouter.get(
    "/",
    getUserChats
);

// Get Chat By Id
chatRouter.get(
    "/:id",
    getChatById
);

// Rename Chat
chatRouter.patch(
    "/:id/title",
    validate(updateChatTitleSchema),
    updateChatTitle
);

// Delete Chat (Soft Delete)
chatRouter.delete(
    "/:id",
    deleteChat
);

// Save User Message
chatRouter.post(
    "/:id/message",
    validate(sendMessageSchema),
    addUserMessage
);

// Temporary Route (For Testing)
chatRouter.post(
    "/:id/assistant",
    addAssistantMessage
);

export default chatRouter;