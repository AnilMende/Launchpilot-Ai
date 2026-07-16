import Joi from "joi";

const registerSchema = Joi.object({

    name: Joi.string()
        .trim()
        .min(4)
        .max(30)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 4 characters",
            "string.max": "Name cannot exceed 30 characters"
        }),

    email: Joi.string()
        .trim()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email"
        }),

    password: Joi.string()
        .min(8)
        .max(20)
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/
        )
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 8 characters",
            "string.max": "Password cannot exceed 20 characters",
            "string.pattern.base":
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        })
});

const loginSchema = Joi.object({
    email: Joi.string()
        .trim()
        .email()
        .required(),

    password: Joi.string()
        .required()

});

export { registerSchema, loginSchema };