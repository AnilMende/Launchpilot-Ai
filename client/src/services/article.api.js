import api from "./api.js";

export const getArticles = async (params) => {

    const response = await api.get("/articles", {
        params,
    });

    return response.data;

};

export const getArticleBySlug = async (slug) => {

    const response = await api.get(`/articles/${slug}`);

    return response.data;

};