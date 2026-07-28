import api from "./api.js";

// Dashboard summary
export const getDashboardData = async() => {

    const response = await api.get("/dashboard");

    return response.data;

};

