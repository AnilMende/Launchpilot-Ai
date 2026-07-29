import ArticlePreviewCard from "./ArticlePreviewCard.jsx";

const RelatedArticles = ({ articles }) => {

    return (

        <section>

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-900">

                    Related Articles

                </h2>

                <p className="mt-2 text-slate-500">

                    Learn more through detailed guides and tutorials.

                </p>

            </div>

            {articles.length === 0 ? (

                <div
                    className="
                        rounded-2xl
                        border
                        border-dashed
                        border-slate-300
                        bg-white
                        py-16
                        text-center
                    "
                >

                    <h3 className="text-lg font-semibold text-slate-800">

                        No Articles Available

                    </h3>

                    <p className="mt-2 text-slate-500">

                        Articles for this topic will appear here once
                        they are published.

                    </p>

                </div>

            ) : (

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >

                    {articles.map((article) => (

                        <ArticlePreviewCard
                            key={article._id}
                            article={article}
                        />

                    ))}

                </div>

            )}

        </section>

    );

};

export default RelatedArticles;