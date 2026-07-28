import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";


const PopularTopics = ({ topics }) => {

    return (

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>

                    <h2 className="text-lg font-semibold text-slate-900">
                        Popular Topics
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Explore the most visited startup guides.
                    </p>

                </div>

                <Link
                    to="/topics"
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 
                    transition hover:text-indigo-700"
                >
                    View All

                    <ArrowRight size={16} />

                </Link>

            </div>

            {/* Topics */}

            <div>

                {topics.map((topic) => (

                    <Link
                        key={topic.id}
                        to="/topics"
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-100
                            p-5
                            transition-all
                            duration-200
                            hover:bg-slate-50
                            last:border-none
                        "
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-emerald-100
                                    text-emerald-600
                                "
                            >

                                <BookOpen size={20} />

                            </div>

                            <div>

                                <h3 className="font-medium text-slate-900">

                                    {topic.title}

                                </h3>

                                <p className="text-sm text-slate-500">

                                    {topic.articles} Articles

                                </p>

                            </div>

                        </div>

                        <ArrowRight
                            size={18}
                            className="text-slate-400"
                        />

                    </Link>

                ))}

            </div>

        </section>

    );

};

export default PopularTopics;