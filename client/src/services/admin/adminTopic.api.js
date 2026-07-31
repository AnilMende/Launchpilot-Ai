import api from "../api.js";

// Get All Topics (Admin)
export const getAdminTopics = async (params = {}) => {

    const response = await api.get(
        "/topics",
        {
            params,
        }
    );

    return response.data.data;

};


// Create Topic
export const createAdminTopic = async (data) => {

    const response = await api.post(
        "/topics",
        data
    );

    return response.data.data;

};


// Update Topic
export const updateAdminTopic = async (id, data) => {

    const response = await api.patch(
        `/topics/${id}`,
        data
    );

    return response.data.data;

};


// Delete Topic
export const deleteAdminTopic = async (id) => {

    const response = await api.delete(
        `/topics/${id}`
    );

    return response.data.data;

};


// Get Topic By Slug (Optional)
export const getTopicBySlug = async (slug) => {

    const response = await api.get(
        `/topics/${slug}`
    );

    return response.data.data;

};