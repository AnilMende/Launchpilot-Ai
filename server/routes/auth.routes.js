import express from "express";

import { validate } from "../middleware/validate.middleware.js";
import { loginSchema, registerSchema } from "../validators/auth.validator.js";
import { getProfile, login, logout, register } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), register);

authRouter.post("/login", validate(loginSchema), login);

authRouter.post("/logout", logout);

authRouter.get("/profile", authenticate, getProfile);

export default authRouter;