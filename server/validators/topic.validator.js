import Joi from "joi";

const topicSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters",
            "any.required": "Title is required"
        }),

    description: Joi.string()
        .min(10)
        .max(500)
        .required()
        .messages({
            "string.empty": "description can not be empty",
            "string.max": "description can not exceed 500 characters"
        }),

    icon: Joi.string()
        .trim()
        .default("BookOpen"),

    color: Joi.string()
        .pattern(/^#([0-9A-F]{3}){1,2}$/i)
        .default("#2563EB"),

    displayOrder: Joi.number()
        .integer()
        .min(0)
        .default(0),

    isPublished: Joi.boolean()
        .default(true)

});

// create topic validation
const createTopicSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters",
            "any.required": "Title is required"
        }),

    description: Joi.string()
        .trim()
        .min(10)
        .max(500)
        .required()
        .messages({
            "string.empty": "Description is required",
            "string.min": "Description must be at least 10 characters",
            "string.max": "Description cannot exceed 500 characters",
            "any.required": "Description is required"
        }),

    icon: Joi.string()
        .trim()
        .default("BookOpen"),

    color: Joi.string()
        .trim()
        .pattern(/^#([0-9A-F]{3}){1,2}$/i)
        .default("#2563EB")
        .messages({
            "string.pattern.base": "Color must be a valid HEX color"
        }),

    displayOrder: Joi.number()
        .integer()
        .min(0)
        .default(0),

    isPublished: Joi.boolean()
        .default(true)

});


// Update Topic Validation
const updateTopicSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .messages({
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 100 characters"
        }),

    description: Joi.string()
        .trim()
        .min(10)
        .max(500)
        .messages({
            "string.min": "Description must be at least 10 characters",
            "string.max": "Description cannot exceed 500 characters"
        }),

    icon: Joi.string()
        .trim(),

    color: Joi.string()
        .trim()
        .pattern(/^#([0-9A-F]{3}){1,2}$/i)
        .messages({
            "string.pattern.base": "Color must be a valid HEX color"
        }),

    displayOrder: Joi.number()
        .integer()
        .min(0),

    isPublished: Joi.boolean()

})
.min(1)
.messages({
    "object.min": "Please provide at least one field to update"
});

export { topicSchema, createTopicSchema, updateTopicSchema };