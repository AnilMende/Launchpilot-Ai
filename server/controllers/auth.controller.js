import { registerUser, loginUser } from "../services/auth.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { accessTokenOptions, refreshTokenOptions } from "../utils/cookieOptions.js";


const register = asyncHandler(async (req, res) => {

    const result = await registerUser(req.body);

    return res
        .status(201)
        .cookie(
            "accessToken",
            result.accessToken,
            accessTokenOptions
        )
        .cookie(
            "refreshToken",
            result.refreshToken,
            refreshTokenOptions
        )
        .json(
            new ApiResponse(
                201,
                result,
                "User registered successfully"
            )
        )
});

const login = asyncHandler(async (req, res) => {

    const result = await loginUser(req.body);

    return res
        .status(200)
        .cookie(
            "accessToken",
            result.accessToken,
            accessTokenOptions
        )
        .cookie(
            "refreshToken",
            result.refreshToken,
            refreshTokenOptions
        )
        .json(
            new ApiResponse(
                200,
                {
                    user: result.user
                },
                "Login successful"
            )
        );
});

const logout = asyncHandler(async (req, res) => {

    return res
        .clearCookie(
            "accessToken",
            accessTokenOptions
        )
        .clearCookie(
            "refreshToken",
            refreshTokenOptions
        )
        .status(200)
        .json(
            new ApiResponse(
                200,
                {},
                "Logged out successfully"
            )
        )
})

const getProfile = asyncHandler(async (req, res) => {

    return res.status(200).json(

        new ApiResponse(
            200,
            req.user,
            "Profile fetched successfully"
        )
    );

});

export { register, login, logout, getProfile };