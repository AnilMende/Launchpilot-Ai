import { Search, X } from "lucide-react";

const ArticlesSearch = ({
    search,
    setSearch,
}) => {

    return (

        <div className="relative w-full">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
            />

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-11
                    pr-11
                    text-sm
                    outline-none
                    transition
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-100
                "
            />

            {search && (

                <button
                    onClick={() => setSearch("")}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        p-1
                        text-slate-400
                        transition
                        hover:bg-slate-100
                        hover:text-slate-700
                    "
                >

                    <X size={16} />

                </button>

            )}

        </div>

    );

};

export default ArticlesSearch;