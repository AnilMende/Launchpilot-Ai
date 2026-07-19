import Joi from "joi";

const createArticleSchema = Joi.object({

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

    summary: Joi.string()
        .trim()
        .min(20)
        .max(300)
        .required()
        .messages({
            "string.empty": "Summary is required",
            "string.min": "Summary must be at least 20 characters",
            "string.max": "Summary cannot exceed 300 characters"
        }),

    content: Joi.string()
        .trim()
        .min(50)
        .required()
        .messages({
            "string.empty": "Content is required",
            "string.min": "Content must be at least 50 characters"
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

    featuredImage: Joi.string()
        .uri()
        .allow("")
        .default(""),

    status: Joi.string()
        .valid("draft", "published")
        .default("draft"),

    isFeatured: Joi.boolean()
        .default(false),

    seoTitle: Joi.string()
        .trim()
        .max(70)
        .allow(""),

    seoDescription: Joi.string()
        .trim()
        .max(160)
        .allow("")

});

const updateArticleSchema = Joi.object({

    title: Joi.string()
        .trim()
        .min(3)
        .max(150),

    summary: Joi.string()
        .trim()
        .min(20)
        .max(300),

    content: Joi.string()
        .trim()
        .min(50),

    topic: Joi.string()
        .hex()
        .length(24),

    tags: Joi.array()
        .items(
            Joi.string()
                .trim()
                .lowercase()
        ),

    featuredImage: Joi.string()
        .uri()
        .allow(""),

    status: Joi.string()
        .valid("draft", "published"),

    isFeatured: Joi.boolean(),

    seoTitle: Joi.string()
        .trim()
        .max(70)
        .allow(""),

    seoDescription: Joi.string()
        .trim()
        .max(160)
        .allow("")

})
.min(1)
.messages({
    "object.min": "Please provide at least one field to update"
});


export { createArticleSchema, updateArticleSchema };