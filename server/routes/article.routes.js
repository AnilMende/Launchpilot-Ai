import express from "express";
import {
    createArticle, deleteArticle,
    getAllArticles, getArticleBySlug,
    getArticlesByTopic,
    getFeaturedArticles,
    getRecentArticles,
    getRelatedArticles,
    getTrendingArticles,
    updateArticle
} from "../controllers/article.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { USER_ROLES } from "../utils/constants.js";
import { validate } from "../middleware/validate.middleware.js";
import { createArticleSchema, updateArticleSchema } from "../validators/article.validator.js";


const articleRouter = express.Router();

// Public routes

// Get all published articles
articleRouter.get("/", getAllArticles);

// get featured articles
articleRouter.get("/featured", getFeaturedArticles);

// get recent articles
articleRouter.get("/recent", getRecentArticles);

// get article by topic slug
articleRouter.get("/topic/:topicSlug", getArticlesByTopic);

// get related articles
articleRouter.get("/:slug/related", getRelatedArticles);

// get trending articles
articleRouter.get("/trending", getTrendingArticles);

// Get article by slug
articleRouter.get("/:slug", getArticleBySlug);

// Protected admin routes

// create article
articleRouter.post(
    "/",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(createArticleSchema),
    createArticle
);

// update article
articleRouter.patch(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(updateArticleSchema),
    updateArticle
);

// delete article
articleRouter.delete(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    deleteArticle
);

export default articleRouter;

