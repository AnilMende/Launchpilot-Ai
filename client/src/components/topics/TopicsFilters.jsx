import { SlidersHorizontal } from "lucide-react";

const TopicsFilters = ({ filters, onChange }) => {

    const handleChange = (key, value) => {

        onChange({
            ...filters,
            [key]: value,
        });

    };

    return (

        <div
            className="
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >

            {/* Left */}

            <div className="flex items-center gap-2">

                <SlidersHorizontal
                    size={20}
                    className="text-indigo-600"
                />

                <h3 className="font-semibold text-slate-900">
                    Filters
                </h3>

            </div>

            {/* Right */}

            <div className="flex flex-wrap gap-4">

                {/* Sort */}

                <select
                    value={`${filters.sortBy}-${filters.sortOrder}`}
                    onChange={(e) => {

                        const [sortBy, sortOrder] =
                            e.target.value.split("-");

                        onChange({
                            ...filters,
                            sortBy,
                            sortOrder,
                        });

                    }}
                    className="
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        py-2
                        text-sm
                        focus:border-indigo-500
                        focus:outline-none
                    "
                >

                    <option value="createdAt-desc">
                        Newest
                    </option>

                    <option value="createdAt-asc">
                        Oldest
                    </option>

                    <option value="title-asc">
                        A → Z
                    </option>

                    <option value="title-desc">
                        Z → A
                    </option>

                </select>

                {/* Published */}

                <select
                    value={filters.isPublished}
                    onChange={(e) =>
                        handleChange(
                            "isPublished",
                            e.target.value
                        )
                    }
                    className="
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        py-2
                        text-sm
                        focus:border-indigo-500
                        focus:outline-none
                    "
                >

                    <option value="">
                        All Topics
                    </option>

                    <option value="true">
                        Published
                    </option>

                    <option value="false">
                        Unpublished
                    </option>

                </select>

                {/* Page Size */}

                <select
                    value={filters.limit}
                    onChange={(e) =>
                        handleChange(
                            "limit",
                            Number(e.target.value)
                        )
                    }
                    className="
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        py-2
                        text-sm
                        focus:border-indigo-500
                        focus:outline-none
                    "
                >

                    <option value={6}>6 / page</option>
                    <option value={9}>9 / page</option>
                    <option value={12}>12 / page</option>
                    <option value={24}>24 / page</option>

                </select>

            </div>

        </div>

    );

};

export default TopicsFilters;