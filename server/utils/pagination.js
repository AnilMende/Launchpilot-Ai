// utils/pagination.js

import {
    DEFAULT_LIMIT,
    DEFAULT_PAGE,
    MAX_LIMIT
} from "./constants.js";

const getPagination = (query = {}) => {

    const page = Math.max(
        Number(query.page) || DEFAULT_PAGE,
        1
    );

    const limit = Math.min(
        Math.max(Number(query.limit) || DEFAULT_LIMIT, 1),
        MAX_LIMIT
    );

    return {
        page,
        limit,
        skip: (page - 1) * limit
    };
};

export default getPagination;