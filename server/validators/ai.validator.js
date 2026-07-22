import Joi from "joi";

export const generateAIResponseSchema = Joi.object({

    message: Joi.string()
        .trim()
        .min(2)
        .max(1000)
        .required()
        .messages({
            "string.empty": "Message is required",

            "string.min": "Message must be at least 2 characters",

            "string.max": "Message cannot exceed 2000 characters",

            "any.required": "Message is required"
        })

});