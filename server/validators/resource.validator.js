import Joi from "joi";

const createResourceSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(150)
        .required()
        .messages({
            "string.empty": "Title is required",
            "string.min": "Title must be at least 3 characters",
            "string.max": "Title cannot exceed 150 characters"
        }),

    description: Joi.string()
        .trim()
        .min(10)
        .max(500)
        .required()
        .messages({
            "string.empty": "Description is required",
            "string.min": "Description must be at least 10 characters",
            "string.max": "Description cannot exceed 500 characters"
        }),

    type: Joi.string()
        .valid(
            "pdf",
            "website",
            "video",
            "tool",
            "template"
        )
        .required()
        .messages({
            "any.only": "Invalid resource type",
            "any.required": "Resource type is required"
        }),

    url: Joi.string()
        .uri()
        .required()
        .messages({
            "string.uri": "Invalid resource URL",
            "any.required": "Resource URL is required"
        }),

    topic: Joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.length": "Invalid Topic ID",
            "any.required": "Topic is required"
        }),

    tags: Joi.array()
        .items(
            Joi.string()
                .trim()
                .lowercase()
        )
        .default([]),

    thumbnail: Joi.string()
        .uri()
        .allow("")
        .default(""),

    isPublished: Joi.boolean()
        .default(true)

});

const updateResourceSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(150),

    description: Joi.string()
        .trim()
        .min(10)
        .max(500),

    type: Joi.string()
        .valid(
            "pdf",
            "website",
            "video",
            "tool",
            "template"
        ),

    url: Joi.string()
        .uri(),

    topic: Joi.string()
        .hex()
        .length(24),

    tags: Joi.array()
        .items(
            Joi.string()
                .trim()
                .lowercase()
        ),

    thumbnail: Joi.string()
        .uri()
        .allow(""),

    isPublished: Joi.boolean()

})
    .min(1)
    .messages({
        "object.min": "At least one field must be provided for update"
    });

export {
    createResourceSchema,
    updateResourceSchema
};