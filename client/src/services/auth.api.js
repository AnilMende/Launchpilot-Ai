import api from "./api.js";

// Register
export const register = async (data) => {

    const response = await api.post("/auth/register", data);

    return response.data;
};

// Login
export const login = async(data) => {

    const response = await api.post("/auth/login");

    return response.data;
};

// Logout
export const logout = async() => {

    const response = await api.post("/auth/logout");

    return response.data;
};

// Current user
export const getCurrentUser = async () => {

    const response = await api.get("/auth/me");

    return response.data;
};

// refresh token
export const refreshAccessToken = async () => {

    const response = await api.post("/auth/refresh-token");

    return response.data;
}