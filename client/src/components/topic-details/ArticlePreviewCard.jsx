import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArticlePreviewCard = ({ article }) => {

    return (

        <article
            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >

            <div className="flex items-center gap-4 text-sm text-slate-500">

                <div className="flex items-center gap-1">

                    <Clock size={16} />

                    <span>{article.readingTime} min</span>

                </div>

                {article.publishedAt && (

                    <div className="flex items-center gap-1">

                        <CalendarDays size={16} />

                        <span>
                            {new Date(article.publishedAt)
                                .toLocaleDateString()}
                        </span>

                    </div>

                )}

            </div>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">

                {article.title}

            </h3>

            <p className="mt-3 line-clamp-3 text-slate-600">

                {article.summary}

            </p>

            <Link
                to={`/articles/${article.slug}`}
                className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-indigo-600
                    transition
                    hover:gap-3
                "
            >

                Read Article

                <ArrowRight size={18} />

            </Link>

        </article>

    );

};

export default ArticlePreviewCard;