import { generateAIResponseService } from "../services/ai.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { AI_MESSAGES } from "../utils/responseMessages.js";


const generateAIResponse = asyncHandler(async (req, res) => {

    const { message } = req.body;

    const { chatId } = req.params;

    const response = await generateAIResponseService(chatId, message, req.user);

    return res.status(200).json(
        new ApiResponse(
            200,
            response,
            AI_MESSAGES.RESPONSE_GENERATED
        )
    );

});

export { generateAIResponse };