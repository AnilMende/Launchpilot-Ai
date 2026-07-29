import { useEffect, useState } from "react";

import TopicsGrid from "../../components/topics/TopicsGrid.jsx";
import TopicsSearch from "../../components/topics/TopicsSearch.jsx";
import TopicsFilters from "../../components/topics/TopicsFilters.jsx";

import TopicSkeleton from "../../components/topics/TopicSkeleton.jsx";

import { getTopics } from "../../services/topic.api.js";

const Topics = () => {

    const [topics, setTopics] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({

        sortBy: "createdAt",
        sortOrder: "desc",
        isPublished: "",
        limit: 9,

    });

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({

        totalPages: 1,
        totalItems: 0,

    });

    useEffect(() => {

        const fetchTopics = async () => {

            setLoading(true);

            try {

                const response = await getTopics({

                    page,
                    search,

                    sortBy: filters.sortBy,
                    sortOrder: filters.sortOrder,
                    limit: filters.limit,

                    ...(filters.isPublished !== "" && {
                        isPublished: filters.isPublished,
                    }),

                });

                setTopics(response.data.topics);

                setPagination({

                    totalPages: response.data.totalPages,
                    totalItems: response.data.totalItems,

                });

                setError("");

            } catch (err) {

                setError(

                    err.response?.data?.message ||

                    "Failed to load topics."

                );

            } finally {

                setLoading(false);

            }

        };

        fetchTopics();

    }, [page, search, filters]);

    return (

        <div className="space-y-8">

            {/* Page Header */}

            <div>

                <h1 className="text-3xl font-bold text-slate-900">
                    Explore Topics
                </h1>

                <p className="mt-2 text-slate-600">
                    Browse startup knowledge organized into categories.
                </p>

            </div>

            {/* Search */}

            <TopicsSearch
                value={search}
                onChange={(value) => {

                    setSearch(value);

                    setPage(1);

                }}
            />

            {/* Filters */}

            <TopicsFilters
                filters={filters}
                onChange={(newFilters) => {

                    setFilters(newFilters);

                    setPage(1);

                }}
            />

            {/* Loading */}

            {loading && (
                <TopicSkeleton count={filters.limit} />
            )}

            {/* Error */}

            {!loading && error && (

                <div className="rounded-xl bg-red-50 p-6 text-red-600">

                    {error}

                </div>

            )}

            {/* Topics */}

            {!loading && !error && (

                <TopicsGrid

                    topics={topics}

                />

            )}

            {/* Pagination */}

            {!loading &&

                pagination.totalPages > 1 && (

                    <div className="flex justify-center gap-3">

                        <button

                            disabled={page === 1}

                            onClick={() =>

                                setPage(prev => prev - 1)

                            }

                            className="rounded-lg border px-4 py-2 disabled:opacity-40"

                        >

                            Previous

                        </button>

                        <span className="flex items-center px-2">

                            Page {page} of {pagination.totalPages}

                        </span>

                        <button

                            disabled={

                                page === pagination.totalPages

                            }

                            onClick={() =>

                                setPage(prev => prev + 1)

                            }

                            className="rounded-lg border px-4 py-2 disabled:opacity-40"

                        >

                            Next

                        </button>

                    </div>

                )}

        </div>

    );

};

export default Topics;