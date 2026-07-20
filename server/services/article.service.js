import { Article } from "../models/articleModel.js";
import { ApiError } from "../utils/ApiError.js";

import { Topic } from "../models/topicModel.js";
import generateSlug from "../utils/generateSlug.js";

import getPagination from "../utils/pagination.js";
import { applySearch } from "../utils/apiFeatures.js";

// create article service
const createArticleService = async (data, user) => {

    // console.log(data);

    const {
        title,
        summary,
        content,
        topic,
        tags,
        featuredImage,
        status,
        isFeatured,
        seoTitle,
        seoDescription
    } = data;

    const existingArticle = await Article.findOne({ title });

    if (existingArticle) {
        throw new ApiError(409, "Article already exists");
    }

    // console.log("Incoming topic:", topic);
    // console.log("Type:", typeof topic);

    const topicExists = await Topic.findById(topic);

    // console.log("Found topic:", topicExists);

    if (!topicExists) {
        throw new ApiError(404, "Topic not found");
    }

    const slug = generateSlug(title);

    const article = await Article.create({

        title,

        slug,

        summary,

        content,

        topic,

        tags,

        featuredImage,

        status,

        isFeatured,

        seoTitle,

        seoDescription,

        createdBy: user._id,

        publishedAt:
            status === "published"
                ? new Date()
                : null

    });

    return article;

};

// Get All Articles
const getAllArticlesService = async (query) => {

    const { page, limit, skip } = getPagination(query);

    const filter = {};

    applySearch(
        filter,
        query.search,
        ["title", "summary", "content"]
    );

    if (query.status) {
        filter.status = query.status;
    }

    if (query.topic) {
        filter.topic = query.topic;
    }

    const totalArticles = await Article.countDocuments(filter);

    const articles = await Article.find(filter)

        .populate("topic", "title slug")

        .populate("createdBy", "name email")

        .sort(query.sort || "-createdAt")

        .skip(skip)

        .limit(limit);

    return {

        articles,

        pagination: {

            totalArticles,

            currentPage: page,

            totalPages: Math.ceil(totalArticles / limit),

            limit

        }

    };

};

// Get Article By Slug
const getArticleBySlugService = async (slug) => {

    const article = await Article.findOne({
        slug,
        status: "published"
    })

        .populate("topic")

        .populate("createdBy", "name email");

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    return article;

};


// Update Article
const updateArticleService = async (
    articleId,
    data,
    user
) => {

    const article = await Article.findById(articleId);

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    if (data.topic) {

        const topicExists = await Topic.findById(data.topic);

        if (!topicExists) {
            throw new ApiError(404, "Topic not found");
        }

    }

    if (data.title) {

        data.slug = generateSlug(data.title);

    }

    if (
        article.status !== "published" &&
        data.status === "published"
    ) {

        data.publishedAt = new Date();

    }

    data.updatedBy = user._id;

    const updatedArticle =
        await Article.findByIdAndUpdate(

            articleId,

            data,

            {
                new: true,
                runValidators: true
            }

        )

            .populate("topic", "title slug")

            .populate("createdBy", "name email")

            .populate("updatedBy", "name email");

    return updatedArticle;

};

// Delete Article
const deleteArticleService = async (articleId) => {

    const article =
        await Article.findByIdAndDelete(articleId);

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    return {};

};

// Get Featured Articles
const getFeaturedArticlesService = async () => {

    const articles = await Article.find({
        isFeatured: true,
        status: "published"
    })
        .populate("topic", "title slug")
        .populate("createdBy", "name email")
        .sort("-publishedAt");

    return articles;
}

// Get Articles by topic slug
const getArticlesByTopicService = async (topicSlug, query) => {

    // find topic using slug
    const topic = await Topic.findOne({
        slug: topicSlug
    });

    if (!topic) {
        throw new ApiError(404, "Topic not found");
    }

    const { page, limit, skip } = getPagination(query);

    const filter = {
        topic: topic._id,
        status: "published"
    };

    applySearch(
        filter,
        query.search,
        ["title", "summary", "content"]
    );

    const totalArticles = await Article.countDocuments(filter);

    const articles = await Article.find(filter)
        .populate("topic", "title slug")
        .populate("createdBy", "name email")
        .sort(query.sort || "-publishedAt")
        .skip(skip)
        .limit(limit);

    return {

        topic,
        articles,
        pagination: {
            totalArticles,
            currentPage: page,
            totalPages: Math.ceil(totalArticles / limit),
            limit
        }
    };

};

export {
    createArticleService,
    getAllArticlesService,
    getArticleBySlugService,
    updateArticleService,
    deleteArticleService,
    getFeaturedArticlesService,
    getArticlesByTopicService
};