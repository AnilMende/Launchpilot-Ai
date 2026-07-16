import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {

    return jwt.sign(
        {
            userId: user._id,
            role: user.role
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
}

const generateRefreshToken = (user) => {

    return jwt.sign(
        {
            userId : user._id,
            role : user.role
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export { generateAccessToken, generateRefreshToken };