import Joi from "joi";

const createChatSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .optional()
        .messages({
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters"
        })
});

const sendMessageSchema = Joi.object({

    message: Joi.string()
        .trim()
        .min(2)
        .max(5000)
        .required()
        .messages({
            "string.empty": "Message is required",
            "string.min": "Message must be at least 2 characters",
            "string.max": "Message cannot exceed 5000 characters"
        })
});

const updateChatTitleSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters"
        })
});

export {
    createChatSchema,
    sendMessageSchema,
    updateChatTitleSchema
};

