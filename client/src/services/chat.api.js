import api from "./api.js";

// Create new chat
export const createChat = async (payload = {}) => {

    const response = await api.post(
        "/chat",
        payload
    );

    return response.data.data;

};

// Get all chats
export const getChats = async () => {

    const response = await api.get(
        "/chat"
    );

    return response.data.data;

};

// Get chat by ID
export const getChatById = async (chatId) => {

    const response = await api.get(
        `/chat/${chatId}`
    );

    return response.data.data;

};

// Send Message
export const sendMessage = async ( chatId, content ) => {

    const response = await api.post(

        `/chat/${chatId}/message`,

        {
            content
        }

    );

    return response.data.data;

};

// Rename chat
export const renameChat = async ( chatId, title ) => {

    const response = await api.patch(

        `/chat/${chatId}/title`,

        {
            title
        }

    );

    return response.data.data;

};

// Delete chat
export const deleteChat = async ( chatId ) => {

    const response = await api.delete(

        `/chat/${chatId}`

    );

    return response.data;

};