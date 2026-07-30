import api from "./api.js";

export const getResources = async (params = {}) => {

    const response = await api.get("/resources", {
        params,
    });

    return response.data;

};

export const getResourceBySlug = async (slug) => {

    const response = await api.get(
        `/resources/${slug}`
    );

    return response.data;

};