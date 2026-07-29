import {
    createTopicService, getTopicBySlugService,
    getAllTopicService, updateTopicService, deleteTopicService
} from "../services/topic.service.js";

import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";


// create topic
const createTopic = asyncHandler(async (req, res) => {

    const topic = await createTopicService({
        data : req.body,
        user : req.user
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            topic,
            "Topic created successfully"
        )
    );

})

// get all topics
const getAllTopics = asyncHandler(async (req, res) => {

    const topics = await getAllTopicService(req.query);

    return res.status(200).json(

        new ApiResponse(
            200,
            topics,
            "Topics fetched successfully"
        )

    );
})

// get topic by slug
const getTopicBySlug = asyncHandler(async (req, res) => {

    const data = await getTopicBySlugService(
        req.params.slug
    );

    return res.status(200).json(

        new ApiResponse(
            200,
            data,
            "Topic fetched successfully"
        )

    );

});


// update topic
const updateTopic = asyncHandler(async (req, res) => {

    const topic = await updateTopicService(
        req.params.id,
        req.body
    );

    return res.status(200).json(

        new ApiResponse(
            200,
            topic,
            "Topic updated successfully"
        )

    );
})

// delete topic
const deleteTopic = asyncHandler(async (req, res) => {

    const result = await deleteTopicService(
        req.params.id
    );

    return res.status(200).json(

        new ApiResponse(
            200,
            result,
            "Topic deleted successfully"
        )

    );
})


export { createTopic, getAllTopics, getTopicBySlug, updateTopic, deleteTopic };