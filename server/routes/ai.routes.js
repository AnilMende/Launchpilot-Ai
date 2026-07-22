import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { generateAIResponseSchema } from "../validators/ai.validator.js";
import { generateAIResponse } from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post(
    "/:chatId/message",
    authenticate,
    validate(generateAIResponseSchema),
    generateAIResponse
)

export default aiRouter;