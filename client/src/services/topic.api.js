import api from "./api.js";

// Get all topics
export const getTopics = async (params = {}) => {

    const response = await api.get("/topics", {
        params,
    });

    return response.data;
};

// Get topic by slug
export const getTopicBySlug = async (slug) => {

    const response = await api.get(`/topics/${slug}`);

    return response.data;
};