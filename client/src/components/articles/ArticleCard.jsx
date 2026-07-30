import { Link } from "react-router-dom";
import {
    Clock3,
    CalendarDays,
    ArrowRight
} from "lucide-react";

const ArticleCard = ({ article }) => {

    return (

        <article
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >

            {/* Featured Image */}

            <div className="relative h-52 overflow-hidden">

                <img
                    src={
                        article.featuredImage ||
                        "https://placehold.co/600x400?text=LaunchPilot"
                    }
                    alt={article.title}
                    onError={(e) => {
                        e.target.src = "https://placehold.co/600x400?text=LaunchPilot";
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Featured Badge */}

                {article.isFeatured && (

                    <span
                        className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-indigo-600
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-white
                        "
                    >
                        Featured
                    </span>

                )}

            </div>

            {/* Content */}

            <div className="space-y-4 p-6">

                {/* Topic */}

                <span
                    className="
                        inline-flex
                        rounded-full
                        bg-indigo-50
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-indigo-600
                    "
                >
                    {article.topic.title}
                </span>

                {/* Title */}

                <h2
                    className="
                        line-clamp-2
                        text-xl
                        font-bold
                        text-slate-900
                    "
                >
                    {article.title}
                </h2>

                {/* Summary */}

                <p
                    className="
                        line-clamp-3
                        text-sm
                        leading-6
                        text-slate-600
                    "
                >
                    {article.summary}
                </p>

                {/* Meta */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-100
                        pt-4
                        text-sm
                        text-slate-500
                    "
                >

                    <div className="flex items-center gap-5">

                        <span className="flex items-center gap-2">

                            <Clock3 size={16} />

                            {article.readingTime} min

                        </span>

                        <span className="flex items-center gap-2">

                            <CalendarDays size={16} />

                            {new Date(article.publishedAt).toLocaleDateString()}

                        </span>

                    </div>

                </div>

                {/* Button */}

                <Link
                    to={`/articles/${article.slug}`}
                    className="
                        flex
                        items-center
                        gap-2
                        font-medium
                        text-indigo-600
                        transition-all
                        hover:gap-3
                    "
                >

                    Read Article

                    <ArrowRight size={18} />

                </Link>

            </div>

        </article>

    );

};

export default ArticleCard;