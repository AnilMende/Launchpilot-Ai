import { Newspaper } from "lucide-react";

const ArticleEmptyState = () => {

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
                px-6
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
                    bg-indigo-100
                "
            >

                <Newspaper
                    size={40}
                    className="text-indigo-600"
                />

            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">

                No Articles Found

            </h2>

            <p className="mt-3 max-w-md text-slate-500">

                We couldn't find any articles matching your current
                search or filter. Try changing your search keywords
                or selecting a different topic.

            </p>

        </div>

    );

};

export default ArticleEmptyState;