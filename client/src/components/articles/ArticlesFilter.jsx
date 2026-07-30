

const ArticlesFilter = ({
    topics = [],
    selectedTopic,
    setSelectedTopic,
    sortBy,
    setSortBy,
}) => {

    return (

        <div
            className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
            "
        >

            {/* Topic Filter */}

            <div className="w-full md:w-72">

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Topic

                </label>

                <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        outline-none
                        transition
                        focus:border-indigo-500
                        focus:ring-2
                        focus:ring-indigo-100
                    "
                >

                    <option value="">
                        All Topics
                    </option>

                    {topics.map((topic) => (

                        <option
                            key={topic._id}
                            value={topic.slug}
                        >
                            {topic.title}
                        </option>

                    ))}

                </select>

            </div>

            {/* Sort */}

            <div className="w-full md:w-60">

                <label className="mb-2 block text-sm font-medium text-slate-700">

                    Sort By

                </label>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        outline-none
                        transition
                        focus:border-indigo-500
                        focus:ring-2
                        focus:ring-indigo-100
                    "
                >

                    <option value="latest">
                        Latest
                    </option>

                    <option value="oldest">
                        Oldest
                    </option>

                    <option value="popular">
                        Most Viewed
                    </option>

                    <option value="readingTime">
                        Reading Time
                    </option>

                </select>

            </div>

        </div>

    );

};

export default ArticlesFilter;