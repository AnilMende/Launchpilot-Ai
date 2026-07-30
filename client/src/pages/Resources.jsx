import { useEffect, useState } from "react";

import { getResources } from "../services/resource.api.js";

import ResourcesGrid from "../components/resources/ResourcesGrid.jsx";
import ResourcesSearch from "../components/resources/ResourcesSearch.jsx";
import ResourcesFilter from "../components/resources/ResourcesFilter.jsx";
import ResourceSkeleton from "../components/resources/ResourceSkeleton.jsx";
import ResourceEmptyState from "../components/resources/ResourceEmptyState.jsx";

const Resources = () => {

    const [resources, setResources] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [type, setType] = useState("all");

    const [error, setError] = useState("");

    useEffect(() => {

        fetchResources();

    }, [search, type]);

    const fetchResources = async () => {

        try {

            setLoading(true);

            const response = await getResources({

                search,

                type: type === "all" ? "" : type,

            });

            setResources(response.data.resources);

            setError("");

        } catch (error) {

            setError(

                error.response?.data?.message ||
                "Failed to fetch resources."

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

                    Resources

                </h1>

                <p className="mt-2 text-slate-500">

                    Explore useful startup resources, tools and templates.

                </p>

            </div>

            {/* Search & Filter */}

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                "
            >

                <div className="flex-1">

                    <ResourcesSearch
                        value={search}
                        onChange={setSearch}
                    />

                </div>

                <ResourcesFilter
                    value={type}
                    onChange={setType}
                />

            </div>

            {/* Content */}

            {loading ? (

                <ResourceSkeleton />

            ) : error ? (

                <div
                    className="
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        p-5
                        text-red-600
                    "
                >

                    {error}

                </div>

            ) : resources.length === 0 ? (

                <ResourceEmptyState />

            ) : (

                <ResourcesGrid
                    resources={resources}
                />

            )}

        </div>

    );

};

export default Resources;