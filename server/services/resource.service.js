import { Resource } from "../models/resourceModel.js";
import { Topic } from "../models/topicModel.js";

import { ApiError } from "../utils/ApiError.js";

import generateSlug from "../utils/generateSlug.js";
import { applySearch } from "../utils/apiFeatures.js";
import getPagination from "../utils/pagination.js";

// create resource
const createResourceService = async (data, user) => {

    const {
        title,
        description,
        type,
        url,
        topic,
        tags,
        thumbnail,
        isPublished
    } = data;

    const existingResource = await Resource.findOne({ title, isDeleted: false });

    if (existingResource) {
        throw new ApiError(409, "Resource already exists");
    }

    const topicExists = await Topic.findById(topic);

    if (!topicExists) {
        throw new ApiError(404, "Topic not found");
    }

    const slug = generateSlug(title);

    const resource = await Resource.create({

        title,

        slug,

        description,

        type,

        url,

        topic,

        tags,

        thumbnail,

        isPublished,

        createdBy: user._id

    });

    return await resource.populate("topic", "title slug");
};

// get all resources
const getAllResourcesService = async (query) => {

    const { page, limit, skip } = getPagination(query);

    const filter = {

        isDeleted: false,

        isPublished: true

    };

    applySearch(

        filter,

        query.search,

        ["title", "description"]

    );

    if (query.topic) {

        filter.topic = query.topic;

    }

    if (query.type) {

        filter.type = query.type;

    }

    const totalResources = await Resource.countDocuments(filter);

    const resources = await Resource.find(filter)

        .populate("topic", "title slug")

        .populate("createdBy", "name email")

        .sort(query.sort || "-createdAt")

        .skip(skip)

        .limit(limit);

    return {

        resources,

        pagination: {

            totalResources,

            currentPage: page,

            totalPages: Math.ceil(totalResources / limit),

            limit

        }

    };

};

// get resource by id
const getResourceByIdService = async (id) => {

    const resource = await Resource.findOne({

        _id: id,

        isDeleted: false,

        isPublished: true

    })

        .populate("topic", "title slug")

        .populate("createdBy", "name email");

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    return resource;

};

// update resource
const updateResourceService = async (

    resourceId,

    data,

    user

) => {

    const resource = await Resource.findOne({ _id: resourceId, isDeleted: false });

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    if (data.title) {

        const existingResource = await Resource.findOne({

            title: data.title,

            _id: { $ne: resourceId },

            isDeleted: false

        });

        if (existingResource) {
            throw new ApiError(
                409,
                "Resource title already exists"
            );
        }

        data.slug = generateSlug(data.title);

    }

    if (data.topic) {

        const topicExists = await Topic.findById(data.topic);

        if (!topicExists) {
            throw new ApiError(404, "Topic not found");
        }

    }

    data.updatedBy = user._id;

    const updatedResource = await Resource.findByIdAndUpdate(

        resourceId,

        data,

        {

            new: true,

            runValidators: true

        }

    )

        .populate("topic", "title slug")

        .populate("createdBy", "name email")

        .populate("updatedBy", "name email");

    return updatedResource;

};

// delete resource
const deleteResourceService = async (resourceId) => {

    const resource = await Resource.findOne({ _id: resourceId, isDeleted: false });

    if (!resource) {
        throw new ApiError(404, "Resource not found");
    }

    resource.isDeleted = true;

    await resource.save();

    return {};

};

// get resource by topic
const getResourcesByTopicService = async (

    topicSlug,

    query

) => {

    const topic = await Topic.findOne({ slug: topicSlug });

    if (!topic) {
        throw new ApiError(404, "Topic not found");
    }

    const { page, limit, skip } = getPagination(query);

    const filter = {

        topic: topic._id,

        isDeleted: false,

        isPublished: true

    };

    applySearch(

        filter,

        query.search,

        ["title", "description"]

    );

    const totalResources = await Resource.countDocuments(filter);

    const resources = await Resource.find(filter)

        .populate("topic", "title slug")

        .populate("createdBy", "name email")

        .sort(query.sort || "-createdAt")

        .skip(skip)

        .limit(limit);

    return {

        topic,

        resources,

        pagination: {

            totalResources,

            currentPage: page,

            totalPages: Math.ceil(totalResources / limit),

            limit

        }

    };

};


export {
    createResourceService,
    getAllResourcesService,
    getResourceByIdService,
    updateResourceService,
    deleteResourceService,
    getResourcesByTopicService
}
