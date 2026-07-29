import { SearchX } from "lucide-react";

const TopicEmptyState = () => {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-slate-300
                bg-white
                px-8
                py-20
                text-center
            "
        >

            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-50
                "
            >

                <SearchX
                    size={40}
                    className="text-indigo-600"
                />

            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">

                No Topics Found

            </h2>

            <p className="mt-3 max-w-md text-slate-500">

                We couldn't find any topics matching your search or filter.
                Try using different keywords or clearing the filters.

            </p>

        </div>

    );

};

export default TopicEmptyState;