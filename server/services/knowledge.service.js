import { Topic } from "../models/topicModel.js";
import { Article } from "../models/articleModel.js";
import { Resource } from "../models/resourceModel.js";
import { buildSearchRegex } from "../utils/buildSearchRegex.js";

// Search Topics
const searchTopics = async (query) => {

    const regex = buildSearchRegex(query);
    const keywords = regex.split("|");

    const topics = await Topic.find({

        isPublished: true,

        $or: [

            {
                title: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: regex,
                    $options: "i"
                }
            }

        ]

    });

    const rankedTopics = topics
        .map(topic => {

            let score = 0;

            keywords.forEach(keyword => {

                if (
                    topic.title
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 10;
                }

                if (
                    topic.description
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 5;
                }

            });

            return {
                ...topic.toObject(),
                score
            };

        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    return rankedTopics;

};

// Search Articles
const searchArticles = async (query) => {

    const regex = buildSearchRegex(query);
    const keywords = regex.split("|");

    const articles = await Article.find({

        status: "published",

        isDeleted: false,

        $or: [

            {
                title: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                summary: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                content: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                tags: {
                    $regex: regex,
                    $options: "i"
                }
            }

        ]

    }).populate("topic", "title");

    const rankedArticles = articles
        .map(article => {

            let score = 0;

            keywords.forEach(keyword => {

                if (
                    article.title
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 20;
                }

                if (
                    article.tags?.some(tag =>
                        tag.toLowerCase().includes(keyword)
                    )
                ) {
                    score += 15;
                }

                if (
                    article.summary
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 10;
                }

                if (
                    article.content
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 5;
                }

            });

            return {
                ...article.toObject(),
                score
            };

        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    return rankedArticles;

};

// Search Resources
const searchResources = async (query) => {

    const regex = buildSearchRegex(query);
    const keywords = regex.split("|");

    const resources = await Resource.find({

        isPublished: true,

        isDeleted: false,

        $or: [

            {
                title: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: regex,
                    $options: "i"
                }
            },

            {
                tags: {
                    $regex: regex,
                    $options: "i"
                }
            }

        ]

    });

    const rankedResources = resources
        .map(resource => {

            let score = 0;

            keywords.forEach(keyword => {

                if (
                    resource.title
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 20;
                }

                if (
                    resource.tags?.some(tag =>
                        tag.toLowerCase().includes(keyword)
                    )
                ) {
                    score += 15;
                }

                if (
                    resource.description
                        ?.toLowerCase()
                        .includes(keyword)
                ) {
                    score += 10;
                }

            });

            return {
                ...resource.toObject(),
                score
            };

        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    return rankedResources;

};

// Build AI Context
// This converts MongoDB documents into plain text for Gemini.
const buildContext = (topics, articles, resources) => {

    let context = "";

    // Topics
    if (topics.length) {

        context += "Topics\n\n";

        topics.forEach(topic => {

            context += `Title: ${topic.title}\n`;

            context += `Description: ${topic.description}\n\n`;

        });

    }

    // Articles
    if (articles.length) {

        context += "Articles\n\n";

        articles.forEach(article => {

            context += `Title: ${article.title}\n`;

            context += `Summary: ${article.summary}\n`;

            context += `Content: ${article.content}\n\n`;

        });

    }

    // Resources
    if (resources.length) {

        context += "Resources\n\n";

        resources.forEach(resource => {

            context += `Title: ${resource.title}\n`;

            context += `Description: ${resource.description}\n`;

            context += `URL: ${resource.url}\n\n`;

        });

    }

    return context;

};

// Main Knowledge Retrieval Service
const searchKnowledgeService = async (question) => {

    const [

        topics,

        articles,

        resources

    ] = await Promise.all([

        searchTopics(question),

        searchArticles(question),

        searchResources(question)

    ]);

    console.log("Topics Found:", topics.length);
    console.log("Articles Found:", articles.length);
    console.log("Resources Found:", resources.length);

    const context = buildContext(topics, articles, resources);

    const sources = [];

    // Topics
    topics.forEach(topic => {
        sources.push({
            sourceType: "topic",
            sourceId: topic._id,
            title: topic.title,
        });
    });

    // Articles
    articles.forEach(article => {
        sources.push({
            sourceType: "article",
            sourceId: article._id,
            title: article.title,
        });
    });

    // Resources
    resources.forEach(resource => {
        sources.push({
            sourceType: "resource",
            sourceId: resource._id,
            title: resource.title,
        });
    });

    return {
        context,
        sources,
    };

};

export { searchKnowledgeService };