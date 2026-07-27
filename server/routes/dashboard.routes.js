import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
    getAIUsage,
    getDashboardSummary,
    getPopularTopics,
    getRecentChats
} from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

// dashboard routes require authentication
dashboardRouter.use(authenticate);

dashboardRouter.get("/summary", getDashboardSummary);

dashboardRouter.get("/usage", getAIUsage);

dashboardRouter.get("/recent-chats", getRecentChats);

dashboardRouter.get("/popular-topics", getPopularTopics);

export default dashboardRouter;