import express from "express";

import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

import { createResourceSchema, updateResourceSchema } from "../validators/resource.validator.js";
import { USER_ROLES } from "../utils/constants.js";
import {
    createResource, deleteResource, getAllResources,
    getResourceById, getResourceBySlug, getResourcesByTopic, updateResource
} from "../controllers/resource.controller.js";

const resourceRouter = express.Router();

// Public routes

// Get all published resources
resourceRouter.get("/", getAllResources);

// Get resources by topic
resourceRouter.get("/topic/:topicSlug", getResourcesByTopic)

// Get single resource
resourceRouter.get("/id/:id", getResourceById);

// Get Resource By Slug
resourceRouter.get("/:slug", getResourceBySlug);


// Protected Admin Routes

// Create resource
resourceRouter.post(
    "/",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(createResourceSchema),
    createResource
)

// Update resource
resourceRouter.patch(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(updateResourceSchema),
    updateResource
)

// Delete resource
resourceRouter.delete(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    deleteResource
)

export default resourceRouter;