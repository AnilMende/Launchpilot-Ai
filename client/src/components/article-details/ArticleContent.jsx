
const ArticleContent = ({ article }) => {

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <div
                className="
                    prose
                    prose-slate
                    max-w-none
                    prose-headings:text-slate-900
                    prose-p:text-slate-700
                    prose-p:leading-8
                "
            >

                <p>

                    {article.content}

                </p>

            </div>

            {article.tags?.length > 0 && (

                <div
                    className="
                        mt-10
                        border-t
                        border-slate-100
                        pt-6
                    "
                >

                    <h3
                        className="
                            mb-4
                            text-lg
                            font-semibold
                            text-slate-900
                        "
                    >

                        Tags

                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {article.tags.map((tag) => (

                            <span
                                key={tag}
                                className="
                                    rounded-full
                                    bg-slate-100
                                    px-3
                                    py-2
                                    text-sm
                                    text-slate-700
                                "
                            >

                                #{tag}

                            </span>

                        ))}

                    </div>

                </div>

            )}

        </section>

    );

};

export default ArticleContent;