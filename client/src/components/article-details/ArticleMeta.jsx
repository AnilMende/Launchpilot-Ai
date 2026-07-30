import { User, CalendarDays, Clock3, Eye } from "lucide-react";

const ArticleMeta = ({ article }) => {

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

            <h3 className="mb-6 text-lg font-semibold text-slate-900">

                Article Information

            </h3>

            <div className="space-y-5">

                <div className="flex items-center gap-3">

                    <User
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Author

                        </p>

                        <p className="font-medium text-slate-900">

                            {article.createdBy?.name}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <CalendarDays
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Published

                        </p>

                        <p className="font-medium text-slate-900">

                            {new Date(article.publishedAt).toLocaleDateString()}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Clock3
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Reading Time

                        </p>

                        <p className="font-medium text-slate-900">

                            {article.readingTime} min

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Eye
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Views

                        </p>

                        <p className="font-medium text-slate-900">

                            {article.views}

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default ArticleMeta;