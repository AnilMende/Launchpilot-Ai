import { ApiError } from "../utils/ApiError.js";

const validate = (schema) => {

    return (req, res, next) => {

        const { error } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {

            const errors = error.details.map((err) => err.message);

            return next(
                new ApiError(
                    400,
                    "Validation Failed",
                    errors
                )
            );
        }

        next();

    }
}

export { validate };