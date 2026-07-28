
import { Topic } from "../models/topicModel.js";
import { Article } from "../models/articleModel.js";
import { Resource } from "../models/resourceModel.js";
import { Chat } from "../models/chatModel.js";
import { Message } from "../models/messageModel.js";


export const getDashboardDataService = async (user) => {

    const [
        topicCount,
        articleCount,
        resourceCount,
        chatCount,
        recentChats,
        totalTokens,
        todayChats,
        popularTopics,
    ] = await Promise.all([

        Topic.countDocuments({
            isPublished: true,
        }),

        Article.countDocuments({
            status: "published",
            isDeleted: false,
        }),

        Resource.countDocuments({
            isPublished: true,
            isDeleted: false,
        }),

        Chat.countDocuments({
            user: user._id,
            isDeleted: false,
        }),

        Chat.find({
            user: user._id,
            isDeleted: false,
        })
        .sort({ updatedAt: -1 })
        .limit(5)
        .select("title lastMessage updatedAt"),

        Message.aggregate([
            {
                $match: {
                    role: "assistant",
                },
            },
            {
                $group: {
                    _id: null,
                    totalTokens: {
                        $sum: "$totalTokens",
                    },
                },
            },
        ]),

        Chat.countDocuments({
            user: user._id,
            createdAt: {
                $gte: new Date(
                    new Date().setHours(0, 0, 0, 0)
                ),
            },
            isDeleted: false,
        }),

        Topic.aggregate([

            {
                $lookup: {
                    from: "articles",
                    localField: "_id",
                    foreignField: "topic",
                    as: "articles",
                },
            },

            {
                $project: {
                    title: 1,
                    icon: 1,
                    articleCount: {
                        $size: {
                            $filter: {
                                input: "$articles",
                                as: "article",
                                cond: {
                                    $and: [
                                        {
                                            $eq: [
                                                "$$article.status",
                                                "published",
                                            ],
                                        },
                                        {
                                            $eq: [
                                                "$$article.isDeleted",
                                                false,
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            },

            {
                $sort: {
                    articleCount: -1,
                },
            },

            {
                $limit: 5,
            },

        ]),

    ]);

    return {

        summary: {

            userName: user.name,

            stats: {

                topics: topicCount,
                articles: articleCount,
                resources: resourceCount,
                chats: chatCount,

            },

        },

        usage: {

            todayChats,

            tokensUsed:
                totalTokens[0]?.totalTokens || 0,

            monthlyLimit: 100000,

        },

        recentChats: recentChats.map((chat) => ({

            id: chat._id,

            title: chat.title,

            preview: chat.lastMessage,

            updatedAt: chat.updatedAt,

        })),

        popularTopics,

    };

};