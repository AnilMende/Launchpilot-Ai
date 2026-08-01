import {
    addUserMessageService,
    createChatService, deleteChatService,
    getUserChatsService, updateChatTitleService,
    getChatByIdService, sendMessageService
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

//send message
const sendMessage = asyncHandler(async (req, res) => {

    const data = await sendMessageService(

        req.params.id,

        req.body.content

    );

    return res.status(200).json(

        new ApiResponse(

            200,

            data,

            "Message sent successfully"

        )

    );

});



export {
    createChat,
    getUserChats,
    getChatById,
    updateChatTitle,
    deleteChat,
    sendMessage
};