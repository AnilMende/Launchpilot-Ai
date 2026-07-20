import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ARTICLE_MESSAGES } from "../utils/responseMessages.js";

import {
    createArticleService, deleteArticleService,
    getAllArticlesService, getArticleBySlugService,
    getArticlesByTopicService,
    getFeaturedArticlesService,
    getRelatedArticlesService,
    updateArticleService
} from "../services/article.service.js";
import { ARTICLE_STATUS } from "../utils/constants.js";

// create article
const createArticle = asyncHandler(async (req, res) => {

    const article = await createArticleService(
        req.body,
        req.user
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            article,
            ARTICLE_MESSAGES.CREATED
        )
    );

})

// get all article
const getAllArticles = asyncHandler(async (req, res) => {

    const articles = await getAllArticlesService(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            articles,
            ARTICLE_MESSAGES.FETCHED
        )
    );

})

// get article by slug
const getArticleBySlug = asyncHandler(async (req, res) => {

    const article = await getArticleBySlugService(req.params.slug);

    return res.status(200).json(
        new ApiResponse(
            200,
            article,
            ARTICLE_MESSAGES.FETCHED
        )
    );

})

// update article
const updateArticle = asyncHandler(async (req, res) => {

    const article = await updateArticleService(
        req.params.id,
        req.body,
        req.user
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            article,
            ARTICLE_MESSAGES.UPDATED
        )
    );

})

// delete article
const deleteArticle = asyncHandler(async (req, res) => {

    await deleteArticleService(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            ARTICLE_MESSAGES.DELETED
        )
    );

})

// get featured articles
const getFeaturedArticles = asyncHandler(async (req, res) => {

    const articles = await getFeaturedArticlesService();

    return res.status(200).json(
        new ApiResponse(
            200,
            { articles },
            "Featured articles fetched successfully"
        )
    )
})

// get articles by topic
const getArticlesByTopic = asyncHandler(async (req, res) => {

    const result = await getArticlesByTopicService(
        req.params.topicSlug,
        req.query
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            result,
            "Articles fetched successfully"
        )
    );

})

// Get Related Artilces
const getRelatedArticles = asyncHandler(async (req, res) => {

    const result = await getRelatedArticlesService(req.params.slug);

    return res.status(200).json(
        new ApiResponse(
            200,
            result,
            "Related articles fetched successfully"
        )
    );

})

export {
    createArticle, getAllArticles, getArticleBySlug, updateArticle, deleteArticle,
    getFeaturedArticles, getArticlesByTopic, getRelatedArticles
};
