import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";

import { getDashboardData } from "../controllers/dashboard.controller.js";

const dashboardRouter = express.Router();

// dashboard routes require authentication
dashboardRouter.use(authenticate);

dashboardRouter.get("/", getDashboardData);

export default dashboardRouter;