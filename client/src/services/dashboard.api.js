import api from "./api.js";

// Dashboard summary
export const getDashboardSummary = async () => {

    const response = await api.get("/dashboard/summary");

    return response.data;
}

// AI Usage
export const getAIUsage = async () => {

    const response = await api.get("/dashboard/usage");

    return response.data;
}

// Recent chats
export const getRecentChats = async () => {

    const response = await api.get("/dashboard/recent-chats");

    return response.data;
}

// Popular Topics
export const getPopularTopics = async () => {

    const response = await api.get("/dashboard/popular-topics");

    return response.data;
}

