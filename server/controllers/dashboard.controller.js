import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
    getAIUsageService,
    getDashboardSummaryService,
    getPopularTopicsService,
    getRecentChatsService
} from "../services/dashboard.service.js";

export const getDashboardSummary = asyncHandler(async (req, res) => {

    const data = await getDashboardSummaryService(req.user);

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Dashboard summary fetched successfully"
        )
    );
})

export const getAIUsage = asyncHandler(async (req, res) => {

    const data = await getAIUsageService(req.user);

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "AI usage fetched successfully"
        )
    );

})

export const getRecentChats = asyncHandler(async (req, res) => {

    const data = await getRecentChatsService(req.user);

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Recent chats fetched successfully"
        )
    );

});

export const getPopularTopics = asyncHandler(async (req, res) => {

    const data = await getPopularTopicsService();

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Popular topics fetched successfully"
        )
    );
})