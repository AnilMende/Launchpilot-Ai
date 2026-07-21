import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {
    createResourceService,
    getAllResourcesService,
    getResourceByIdService,
    updateResourceService,
    deleteResourceService,
    getResourcesByTopicService
} from "../services/resource.service.js";

import { RESOURCE_MESSAGES } from "../utils/resourceMessages.js";

// Create Resource
const createResource = asyncHandler(async (req, res) => {

    const resource = await createResourceService(
        req.body,
        req.user
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            resource,
            RESOURCE_MESSAGES.CREATED
        )
    );

});

// Get All Resources
const getAllResources = asyncHandler(async (req, res) => {

    const resources = await getAllResourcesService(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            resources,
            RESOURCE_MESSAGES.FETCHED
        )
    );

});

// Get Resoruce By ID
const getResourceById = asyncHandler(async (req, res) => {

    const resource = await getResourceByIdService(
        req.params.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            resource,
            RESOURCE_MESSAGES.FETCHED
        )
    );

});

// update resource
const updateResource = asyncHandler(async (req, res) => {

    const resource = await updateResourceService(

        req.params.id,

        req.body,

        req.user

    );

    return res.status(200).json(
        new ApiResponse(
            200,
            resource,
            RESOURCE_MESSAGES.UPDATED
        )
    );

});

// Delete Resource
const deleteResource = asyncHandler(async (req, res) => {

    await deleteResourceService(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            RESOURCE_MESSAGES.DELETED
        )
    );

});

// Get Resources By Topic
const getResourcesByTopic = asyncHandler(async (req, res) => {

    const resources =
        await getResourcesByTopicService(

            req.params.topicSlug,

            req.query

        );

    return res.status(200).json(
        new ApiResponse(
            200,
            resources,
            RESOURCE_MESSAGES.FETCHED
        )
    );

});


export {
    createResource, getAllResources, getResourceById,
    updateResource, deleteResource, getResourcesByTopic
};




