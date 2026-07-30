

import { Clock3, CalendarDays } from "lucide-react";

const ArticleHero = ({ article }) => {

    return (

        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* Featured Image */}

            <div className="h-80 overflow-hidden">

                <img
                    src={
                        article.featuredImage ||
                        "https://placehold.co/1200x500?text=LaunchPilot"
                    }
                    alt={article.title}
                    onError={(e) => {
                        e.target.src =
                            "https://placehold.co/1200x500?text=LaunchPilot";
                    }}
                    className="
                        h-full
                        w-full
                        object-cover
                    "
                />

            </div>

            {/* Content */}

            <div className="space-y-6 p-8">

                <div className="flex flex-wrap items-center gap-3">

                    <span
                        className="
                            rounded-full
                            bg-indigo-100
                            px-3
                            py-1
                            text-sm
                            font-medium
                            text-indigo-700
                        "
                    >

                        {article.topic.title}

                    </span>

                    {article.isFeatured && (

                        <span
                            className="
                                rounded-full
                                bg-amber-100
                                px-3
                                py-1
                                text-sm
                                font-medium
                                text-amber-700
                            "
                        >

                            Featured

                        </span>

                    )}

                </div>

                <h1
                    className="
                        text-4xl
                        font-bold
                        leading-tight
                        text-slate-900
                    "
                >

                    {article.title}

                </h1>

                <p
                    className="
                        max-w-4xl
                        text-lg
                        leading-8
                        text-slate-600
                    "
                >

                    {article.summary}

                </p>

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-6
                        border-t
                        border-slate-100
                        pt-6
                        text-sm
                        text-slate-500
                    "
                >

                    <div className="flex items-center gap-2">

                        <Clock3 size={18} />

                        {article.readingTime} min read

                    </div>

                    <div className="flex items-center gap-2">

                        <CalendarDays size={18} />

                        {new Date(article.publishedAt).toLocaleDateString()}

                    </div>

                    <div>

                        {article.views} views

                    </div>

                </div>

            </div>

        </section>

    );

};

export default ArticleHero;