import { Search, X } from "lucide-react";

const TopicsSearch = ({
    value,
    onChange,
    placeholder = "Search topics...",
}) => {

    return (

        <div className="relative w-full">

            {/* Search Icon */}

            <Search
                size={20}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
            />

            {/* Input */}

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-12
                    pr-12
                    text-sm
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-indigo-500
                    focus:outline-none
                    focus:ring-4
                    focus:ring-indigo-100
                "
            />

            {/* Clear Button */}

            {value && (

                <button
                    type="button"
                    onClick={() => onChange("")}
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

export default TopicsSearch;