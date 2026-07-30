
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RelatedArticles = ({ articles = [] }) => {

    if (!articles.length) return null;

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >

            <h3 className="mb-5 text-lg font-semibold">

                Related Articles

            </h3>

            <div className="space-y-4">

                {articles.map((article) => (

                    <Link
                        key={article._id}
                        to={`/articles/${article.slug}`}
                        className="
                            block
                            rounded-xl
                            border
                            border-slate-200
                            p-4
                            transition
                            hover:border-indigo-500
                            hover:bg-indigo-50
                        "
                    >

                        <h4 className="font-semibold text-slate-900">

                            {article.title}

                        </h4>

                        <p className="mt-2 line-clamp-2 text-sm text-slate-500">

                            {article.summary}

                        </p>

                        <div
                            className="
                                mt-3
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-indigo-600
                            "
                        >

                            Read Article

                            <ArrowRight size={16} />

                        </div>

                    </Link>

                ))}

            </div>

        </section>

    );

};

export default RelatedArticles;