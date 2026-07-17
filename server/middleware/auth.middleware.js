import jwt from "jsonwebtoken";

import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/userModel.js";

const authenticate = async (req, res, next) => {

    try {

        const token =
            req.cookies.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(
                401,
                "Unauthorized. Please login."
            )
        }

        // verify the token with the jwt
        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET
        );

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            throw new ApiError(
                401,
                "User not found"
            );
        }

        req.user = user;

        next();

    } catch (error) {

        next(error);

    }
}

export { authenticate };