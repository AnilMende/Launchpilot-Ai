import api from "../axios.js";


// Get All Articles
export const getAdminArticles = async (params = {}) => {

    const response = await api.get(
        "/articles",
        { params }
    );

    return response.data.data;

};


// Get Article By Slug
export const getAdminArticleBySlug = async (slug) => {

    const response = await api.get(
        `/articles/${slug}`
    );

    return response.data.data;

};


// Create Article
export const createAdminArticle = async (data) => {

    const response = await api.post(
        "/articles",
        data
    );

    return response.data.data;

};


// Update Article
export const updateAdminArticle = async (id, data) => {

    const response = await api.patch(
        `/articles/${id}`,
        data
    );

    return response.data.data;

};


// Delete Article
export const deleteAdminArticle = async (id) => {

    const response = await api.delete(
        `/articles/${id}`
    );

    return response.data.data;

};