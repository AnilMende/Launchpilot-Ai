import { User } from "../models/userModel.js"
import { ApiError } from "../utils/ApiError.js";
import { generateAccessToken, generateRefreshToken } from "./token.service.js";


const registerUser = async ({ name, email, password}) => {

    const existingUser = await User.findOne({ email });

    if(existingUser){
        throw new ApiError(409, "User already exists with this email");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    return {
        user : {
            _id : user._id,
            name : user.name,
            email : user.email,
            role : user.role
        },
        accessToken,
        refreshToken
    };
};

const loginUser = async ({ email, password }) => {

    const user = await User.findOne({ email });

    if(!user){
        throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        throw new ApiError(401, "Invalid email or password");
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    return {
        user : {
            id : user._id,
            name : user.name,
            email : user.email,
            role : user.role
        },
        accessToken,
        refreshToken
    };
};

export { registerUser, loginUser};