import { Chat } from "../models/chatModel.js"
import { Message } from "../models/messageModel.js";
import { ApiError } from "../utils/ApiError.js";
import { generateGeminiResponse } from "./gemini.service.js";
import { searchKnowledgeService } from "./knowledge.service.js";

// Create Chat
const createChatService = async (title, userId) => {

    const chat = await Chat.create({
        user: userId,
        title: title || "New Chat"
    });

    return chat;
};

// Get user chats
const getUserChatsService = async (userId) => {

    const chats = await Chat.find({
        user: userId,
        isDeleted: false

    }).sort("-updatedAt");

    return chats;

};

// Get chat by ID
const getChatByIdService = async (chatId, userId) => {

    const chat = await Chat.findOne({
        _id: chatId,
        user: userId,
        isDeleted: false
    });

    if (!chat) {

        throw new ApiError(
            404,
            "Chat not found"
        )
    };

    const messages = await Message.find({
        chat: chatId
    }).sort("createdAt");

    return {
        chat,
        messages
    }
};

// Update Chat Title
const updateChatTitleService = async (chatId, title, userId) => {

    const chat = await Chat.findOne({
        _id: chatId,
        user: userId,
        isDeleted: false
    });

    if (!chat) {
        throw new ApiError(
            404,
            "Chat not found"
        );
    };

    chat.title = title;

    await chat.save();

    return chat;

}

// Delete Chat
const deleteChatService = async (chatId, userId) => {

    const chat = await Chat.findOne({
        _id: chatId,
        user: userId,
        isDeleted: false
    });

    if (!chat) {
        throw new ApiError(
            404,
            "Chat not found"
        );
    };

    chat.isDeleted = true;

    await chat.save();

    return {};
}

// Save User Message
const addUserMessageService = async (chatId, content) => {

    const message = await Message.create({
        chat: chatId,
        role: "user",
        content
    });

    await Chat.findByIdAndUpdate(
        chatId,
        {
            lastMessage: content
        }
    );

    return message;
}

// Save assistant message
const addAssistantMessageService = async (chatId, content, sources = [], usage = {}) => {

    const message = await Message.create({

        chat: chatId,

        role: "assistant",

        content,

        sources,

        promptTokens: usage.promptTokens || 0,

        completionTokens: usage.completionTokens || 0,

        totalTokens: usage.totalTokens || 0,

        responseTime: usage.responseTime || 0

    });

    await Chat.findByIdAndUpdate(
        chatId,
        {
            lastMessage: content
        }
    );

    return message;
};

// Send Message (User + AI)
const sendMessageService = async (chatId, content) => {

    // 1. Validate Chat
    const chat = await Chat.findOne({
        _id: chatId,
        isDeleted: false
    });

    if (!chat) {
        throw new ApiError(
            404,
            "Chat not found"
        );
    }

    // 2. Save User Message
    const userMessage = await addUserMessageService(
        chatId,
        content
    );

    // 3. Build Knowledge Base Context
    const contextData = await searchKnowledgeService(content);

    // 4. Generate AI Response
    const aiResponse = await generateGeminiResponse(
        content,
        contextData.context
    );

    // 5. Save Assistant Message
    const assistantMessage =
        await addAssistantMessageService(

            chatId,

            aiResponse.answer,

            contextData.sources,

            aiResponse.usage

        );

    return {

        userMessage,

        assistantMessage

    };

};

export {
    createChatService, getUserChatsService, getChatByIdService,
    updateChatTitleService, deleteChatService, addUserMessageService,
    addAssistantMessageService, sendMessageService
};