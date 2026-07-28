import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {
    getDashboardDataService,
} from "../services/dashboard.service.js";

export const getDashboardData = asyncHandler(async (req, res) => {

    const dashboardData = await getDashboardDataService(req.user);

    return res.status(200).json(

        new ApiResponse(
            200,
            dashboardData,
            "Dashboard fetched successfully"
        )

    );

});