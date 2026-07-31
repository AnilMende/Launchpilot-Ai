import api from "../axios";


// Get All Resources
export const getAdminResources = async (params = {}) => {

    const response = await api.get(
        "/resources",
        { params }
    );

    return response.data.data;

};


// Get Resource By Slug
export const getAdminResourceBySlug = async (slug) => {

    const response = await api.get(
        `/resources/${slug}`
    );

    return response.data.data;

};


// Create Resource
export const createAdminResource = async (data) => {

    const response = await api.post(
        "/resources",
        data
    );

    return response.data.data;

};


// Update Resource
export const updateAdminResource = async (id, data) => {

    const response = await api.patch(
        `/resources/${id}`,
        data
    );

    return response.data.data;

};


// Delete Resource
export const deleteAdminResource = async (id) => {

    const response = await api.delete(
        `/resources/${id}`
    );

    return response.data.data;

};