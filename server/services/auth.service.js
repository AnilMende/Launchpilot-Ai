import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js"
import { ApiError } from "../utils/ApiError.js";
import { generateAccessToken, generateRefreshToken } from "./token.service.js";


const registerUser = async ({ name, email, password }) => {

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(409, "User already exists with this email");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    // saving refresh token in the database
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return {
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        accessToken,
        refreshToken
    };
};

const loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid email or password");
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave : false });

    return {
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        accessToken,
        refreshToken
    };
};


// refresh token service
const refreshTokenService = async (incomingRefreshToken) => {

    const decoded = jwt.verify(
        incomingRefreshToken,
        process.env.JWT_REFRESH_SECRET
    );

    // console.log("Incoming TOken", incomingRefreshToken);

    // find user
    const user = await User.findById(decoded.userId);

    // console.log("DB Token", user.refreshToken);

    // check stored refresh token
    if(incomingRefreshToken !== user.refreshToken){
        throw new ApiError(401, "Invalid refresh token");
    }

    // if the incoming refresh token is valid then generate the new tokens
    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    // Rotate refresh token
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave : false });

    return { accessToken, refreshToken };

}

export { registerUser, loginUser, refreshTokenService };