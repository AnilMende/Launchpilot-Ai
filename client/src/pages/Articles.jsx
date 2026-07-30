import { useEffect, useState } from "react";

import { getArticles } from "../services/article.api.js";
import { getTopics } from "../services/topic.api.js";

import ArticlesSearch from "../components/articles/ArticlesSearch.jsx";
import ArticlesFilter from "../components/articles/ArticlesFilter.jsx";
import ArticlesGrid from "../components/articles/ArticlesGrid.jsx";
import ArticleSkeleton from "../components/articles/ArticleSkeleton.jsx";
import ArticleEmptyState from "../components/articles/ArticleEmptyState.jsx";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    const [topics, setTopics] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [selectedTopic, setSelectedTopic] = useState("");

    const [sortBy, setSortBy] = useState("latest");

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState(null);

    useEffect(() => {

        fetchTopics();

    }, []);

    useEffect(() => {

        fetchArticles();

    }, [search, selectedTopic, sortBy, page]);

    const fetchTopics = async () => {

        try {

            const response = await getTopics();

            setTopics(response.data.topics);

        } catch (error) {

            console.error(error);

        }

    };

    const fetchArticles = async () => {

        try {

            setLoading(true);

            const response = await getArticles({

                page,

                search,

                topic: selectedTopic,

                sortBy,

            });

            setArticles(response.data.articles);

            setPagination(response.data.pagination);

            setError("");

        } catch (error) {

            setError(

                error.response?.data?.message ||

                "Failed to fetch articles."

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="space-y-8">

            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold text-slate-900">

                    Articles

                </h1>

                <p className="mt-2 text-slate-500">

                    Explore startup knowledge, guides, and practical articles.

                </p>

            </div>

            {/* Search */}

            <ArticlesSearch
                search={search}
                setSearch={setSearch}
            />

            {/* Filters */}

            <ArticlesFilter
                topics={topics}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            {/* Error */}

            {error && (

                <div
                    className="
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        p-4
                        text-red-600
                    "
                >

                    {error}

                </div>

            )}

            {/* Content */}

            {loading ? (

                <ArticleSkeleton />

            ) : articles.length === 0 ? (

                <ArticleEmptyState />

            ) : (

                <ArticlesGrid
                    articles={articles}
                />

            )}

            {/* Pagination */}

            {pagination && pagination.totalPages > 1 && (

                <div className="flex items-center justify-center gap-4">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(prev => prev - 1)}
                        className="
                            rounded-lg
                            border
                            px-4
                            py-2
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        Previous
                    </button>

                    <span className="text-sm text-slate-600">

                        Page {pagination.currentPage} of {pagination.totalPages}

                    </span>

                    <button
                        disabled={page === pagination.totalPages}
                        onClick={() => setPage(prev => prev + 1)}
                        className="
                            rounded-lg
                            border
                            px-4
                            py-2
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        Next
                    </button>

                </div>

            )}

        </div>

    );

};

export default Articles;