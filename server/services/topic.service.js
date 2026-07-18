import { Topic } from "../models/topicModel.js"
import { ApiError } from "../utils/ApiError.js";
import generateSlug from "../utils/generateSlug.js";


const createTopicService = async ({ data, user }) => {

    const { title, description, icon, color, displayOrder, isPublished } = data;

    // checking if topic already exists
    const existingTopic = await Topic.findOne({ title: title.trim() });

    if (existingTopic) {
        throw new ApiError(
            409,
            "Topic already exists"
        );
    }

    const slug = generateSlug(title);

    const topic = await Topic.create({
        title,
        slug,
        description,
        icon,
        color,
        displayOrder,
        isPublished,
        createdBy: user._id
    });

    return topic;

}

// get all topics
const getAllTopicService = async (query) => {

    const page = Number(query.page) || 1;

    const limit = Number(query.limit) || 10;

    const search = query.search || "";

    const sort = query.sort || "displayOrder";

    const filter = {};

    if (search) {

        filter.$or = [

            {
                title: {
                    $regex: search,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: search,
                    $options: "i"
                }
            }

        ];

    }

    const totalTopics = await Topic.countDocuments(filter);

    const topics = await Topic.find(filter)
        .populate("createdBy", "name email")
        .sort(sort)
        .skip((page - 1) * limit)
        .limit(limit);

    return {

        topics,

        pagination: {

            totalTopics,

            currentPage: page,

            totalPages: Math.ceil(totalTopics / limit),

            limit

        }

    };

}

// get topics by slug
const getTopicBySlugService = async (slug) => {

    const topic = await Topic.findOne({
        slug
    }).populate("createdBy", "name email");

    if (!topic) {
        throw new ApiError(
            404,
            "Topic not found"
        );
    }

    return topic;
}

// update topic
const updateTopicService = async (topicId, data) => {

    const topic = await Topic.findById(topicId);

    if (!topic) {
        throw new ApiError(
            404,
            "Topic not found"
        );
    }

    // data.title is the updated title , and it should not be same as the old title
    if (data.title && data.title !== topic.title) {

        const existingTopic = await Topic.findOne({
            title: data.title
        });

        if (existingTopic) {
            throw new ApiError(
                404,
                "Topic already exists"
            );
        }

        // change the old title to the new title
        topic.title = data.title;

        topic.slug = generateSlug(data.title);
    }

    if (data.description !== undefined)
        topic.description = data.description;

    if (data.icon !== undefined)
        topic.icon = data.icon;

    if (data.color !== undefined)
        topic.color = data.color;

    if (data.displayOrder !== undefined)
        topic.displayOrder = data.displayOrder;

    if (data.isPublished !== undefined)
        topic.isPublished = data.isPublished;

    await topic.save();

    return topic;

}

// delete topic
const deleteTopicService = async (topicId) => {

    const topic = await Topic.findById(topicId);

    if (!topic) {
        throw new ApiError(
            404,
            "Topic not found"
        );
    }

    await topic.deleteOne();

    return {
        message: "Topic deleted successfully"
    };

}

export {
    createTopicService, getAllTopicService,
    getTopicBySlugService, updateTopicService, deleteTopicService
};