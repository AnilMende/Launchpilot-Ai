import {
    addAssistantMessageService, addUserMessageService,
    createChatService, deleteChatService,
    getUserChatsService, updateChatTitleService
} from "../services/chat.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";


// Create chat
const createChat = asyncHandler(async (req, res) => {

    const chat = await createChatService(
        req.body.title,
        req.user._id
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            chat,
            "Chat created successfully"
        )
    );

})

// Get All User Chats
const getUserChats = asyncHandler(async (req, res) => {

    const chats = await getUserChatsService(req.user._id);

    return res.status(200).json(
        new ApiResponse(
            200,
            chats,
            "Chats fetched successfully"
        )
    );

});

// Get Chat By Id
const getChatById = asyncHandler(async (req, res) => {

    const result = await getChatByIdService(
        req.params.id,
        req.user._id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            result,
            "Chat fetched successfully"
        )
    );

})

// Update chat title
const updateChatTitle = asyncHandler(async (req, res) => {

    const chat = await updateChatTitleService(
        req.params.id,
        req.body.title,
        req.user._id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            chat,
            "Chat title updated successfully"
        )
    );

})

// Delete chat
const deleteChat = asyncHandler(async (req, res) => {

    await deleteChatService(
        req.params.id,
        req.user._id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Chat deleted successfully"
        )
    );

})

// Add user message
const addUserMessage = asyncHandler(async (req, res) => {

    const message = await addUserMessageService(req.params.id, req.body.message);

    return res.status(200).json(
        new ApiResponse(
            200,
            message,
            "Message saved successfully"
        )
    );

});

// Add Assistant Message
const addAssistantMessage = asyncHandler(async (req, res) => {

    const message = await addAssistantMessageService(
        req.params.id,
        req.body.content,
        req.body.sources,
        req.body.usage
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            message,
            "Assistant response saved successfully"
        )
    );

});

export {
    createChat,
    getUserChats,
    getChatById,
    updateChatTitle,
    deleteChat,
    addUserMessage,
    addAssistantMessage
};