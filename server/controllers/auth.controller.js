import { registerUser, loginUser, refreshTokenService } from "../services/auth.service.js";
import { ApiError } from "../utils/ApiError.js";
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
                {
                    accessToken : result.accessToken
                },
                "Login successful"
            )
        );
});

const logout = asyncHandler(async (req, res) => {

    req.user.refreshToken = "";

    await req.user.save({
        validateBeforeSave: false
    });

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

const getCurrentUser = asyncHandler(async (req, res) => {

    return res.status(200).json(

        new ApiResponse(
            200,
            req.user,
            "Current user fetched successfully"
        )
    );

});


const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Refresh token missing");
    }

    const result = await refreshTokenService(incomingRefreshToken);

    return res
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
        .status(200)
        .json(
            new ApiResponse(
                200,
                {},
                "Access token refreshed successfully"
            )
        )

})

export { register, login, logout, getCurrentUser, refreshAccessToken };