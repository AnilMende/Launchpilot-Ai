import { Topic } from "../models/topicModel.js";
import { Article } from "../models/articleModel.js";
import { Resource } from "../models/resourceModel.js";
import { buildSearchRegex } from "../utils/buildSearchRegex.js";

// Search Topics
const searchTopics = async (query) => {

    const topics = await Topic.find({

        isPublished: true,

        $or: [

            {
                title: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: query,
                    $options: "i"
                }
            }

        ]

    });

    const rankedTopics = topics
        .map(topic => {

            let score = 0;

            // Highest priority
            if (topic.title.toLowerCase().includes(query.toLowerCase())) {
                score += 10;
            }

            // Lower priority
            if (topic.description.toLowerCase().includes(query.toLowerCase())) {
                score += 5;
            }

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

    const articles = await Article.find({

        status: "published",

        isDeleted: false,

        $or: [

            {
                title: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                summary: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                content: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                tags: {
                    $regex: query,
                    $options: "i"
                }
            }

        ]

    }).populate("topic", "title");

    const rankedArticles = articles
        .map(article => {

            let score = 0;

            // Highest priority
            if (article.title.toLowerCase().includes(query.toLowerCase())) {
                score += 20;
            }

            // Second priority
            if (article.tags.some(tag =>
                tag.toLowerCase().includes(query.toLowerCase())
            )) {
                score += 15;
            }

            // Third priority
            if (article.summary.toLowerCase().includes(query.toLowerCase())) {
                score += 10;
            }

            // Lowest priority
            if (article.content.toLowerCase().includes(query.toLowerCase())) {
                score += 5;
            }

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

    const resources = await Resource.find({

        isPublished: true,

        isDeleted: false,

        $or: [

            {
                title: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                tags: {
                    $regex: query,
                    $options: "i"
                }
            }

        ]

    });

    const rankedResources = resources
        .map(resource => {

            let score = 0;

            // Highest priority
            if (resource.title.toLowerCase().includes(query.toLowerCase())) {
                score += 20;
            }

            // Second priority
            if (resource.tags.some(tag =>
                tag.toLowerCase().includes(query.toLowerCase())
            )) {
                score += 15;
            }

            // Third priority
            if (resource.description.toLowerCase().includes(query.toLowerCase())) {
                score += 10;
            }

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

    const context = buildContext(topics, articles, resources);

    return {

        context,

        sources: {

            topics,

            articles,

            resources

        }

    };

};

export { searchKnowledgeService };