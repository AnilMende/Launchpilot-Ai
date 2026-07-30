import { Article } from "../models/articleModel.js";
import { Topic } from "../models/topicModel.js";
import { Resource } from "../models/resourceModel.js";

import { ApiError } from "../utils/ApiError.js";

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

    const slug = generateSlug(title);

    const existingArticle = await Article.findOne({
        slug,
        isDeleted: false
    });

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

    // const slug = generateSlug(title);

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

    const filter = {
        status: "published",
        isDeleted: false
    };

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

    const article = await Article.findOneAndUpdate(

        {
            slug,
            status: "published",
            isDeleted: false
        },

        {
            $inc: {
                views: 1
            },

            $set: {
                lastViewedAt: new Date()
            }
        },

        {
            new: true
        }

    )
        .populate("topic", "title slug")
        .populate("createdBy", "name email");

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    // related articles
    const relatedArticles = await Article.find({
        topic: article.topic,
        _id: { $ne: article._id },
        status: "published",
        isDeleted: false,
    })
        .limit(3)
        .select("title slug summary readingTime featuredImage");

    // related resoruces
    const relatedResources = await Resource.find({
        topic: article.topic,
        isPublished: true,
        isDeleted: false,
    })
        .limit(5)
        .select("title type url");


    return {
        article,
        relatedArticles,
        relatedResources,
    };

};


// Update Article
const updateArticleService = async (
    articleId,
    data,
    user
) => {

    const article = await Article.findOne({
        _id: articleId,
        isDeleted: false
    });

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

        const existingArticle = await Article.findOne({

            title: data.title,

            _id: { $ne: articleId },

            isDeleted: false

        });

        if (existingArticle) {
            throw new ApiError(
                409,
                "Article title already exists"
            );
        }

        data.slug = generateSlug(data.title);

    }

    if (
        article.status !== "published" &&
        data.status === "published"
    ) {
        data.publishedAt = new Date();
    }

    if (data.content) {

        const words = data.content
            .trim()
            .split(/\s+/).length;

        data.readingTime = Math.max(
            1,
            Math.ceil(words / 200)
        );

    }

    data.updatedBy = user._id;

    const updatedArticle = await Article.findByIdAndUpdate(

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

    const article = await Article.findOne({

        _id: articleId,

        isDeleted: false

    });

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    article.isDeleted = true;

    await article.save();

    return {};

};

// Get Featured Articles
const getFeaturedArticlesService = async (user = null) => {

    const filter = {
        isFeatured: true,
        status: "published",
        isDeleted: false
    };

    const articles = await Article.find(filter)
        .populate("topic", "title slug")
        .populate("createdBy", "name email")
        .sort("-publishedAt");

    return articles;
};

// Get Articles by topic slug
const getArticlesByTopicService = async (
    topicSlug,
    query,
    user = null
) => {

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

    if (query.status && isAdmin) {
        filter.status = query.status;
    }

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

// Get Related Articles
const getRelatedArticlesService = async (
    slug,
    user = null
) => {

    const articleFilter = {
        topic: article.topic,
        status: "published",
        isDeleted: false,
        _id: {
            $ne: article._id
        }
    };

    const article = await Article.findOne(articleFilter);

    if (!article) {
        throw new ApiError(404, "Article not found");
    }

    const relatedFilter = {
        topic: article.topic,
        _id: {
            $ne: article._id
        }
    };

    const relatedArticles = await Article.find(relatedFilter)
        .populate("topic", "title slug")
        .populate("createdBy", "name email")
        .sort("-publishedAt")
        .limit(4);

    return {

        currentArticle: {

            title: article.title,

            slug: article.slug

        },

        relatedArticles

    };

};

// Get Recent Articles
const getRecentArticlesService = async (query, user = null) => {

    const limit = Number(query.limit) || 5;

    const filter = {
        status: "published",
        isDeleted: false
    };

    const articles = await Article.find(filter)
        .select("title slug summary featuredImage readingTime publishedAt status")
        .populate("topic", "title slug")
        .populate("createdBy", "name email")
        .sort("-publishedAt")
        .limit(limit);

    return articles;
};


// Trending Articles API
const getTrendingArticlesService = async (limit = 5) => {

    const articles = await Article.find({

        status: "published",
        isDeleted: false

    })

        .sort("-views")

        .limit(limit)

        .populate("topic", "title slug");

    return articles;

};

export {
    createArticleService,
    getAllArticlesService,
    getArticleBySlugService,
    updateArticleService,
    deleteArticleService,
    getFeaturedArticlesService,
    getArticlesByTopicService,
    getRelatedArticlesService,
    getRecentArticlesService,
    getTrendingArticlesService
};