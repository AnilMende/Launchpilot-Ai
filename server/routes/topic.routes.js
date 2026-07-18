import express from "express";
import { createTopic, deleteTopic, getAllTopics, getTopicBySlug, updateTopic } from "../controllers/topic.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { topicSchema, createTopicSchema, updateTopicSchema } from "../validators/topic.validator.js";
import { authorize } from "../middleware/role.middleware.js";

const topicRouter = express.Router();

// public routes
topicRouter.get("/", getAllTopics);

topicRouter.get("/:slug", getTopicBySlug);

// admin routes
topicRouter.post("/", authenticate, authorize("admin"), validate(createTopicSchema), createTopic);

topicRouter.patch("/:id", authenticate, authorize("admin"), validate(updateTopicSchema), updateTopic);

topicRouter.delete("/:id", authenticate, authorize("admin"), deleteTopic);

export default topicRouter;