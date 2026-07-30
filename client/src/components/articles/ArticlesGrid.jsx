import ArticleCard from "./ArticleCard.jsx";

const ArticlesGrid = ({ articles = [] }) => {

    return (

        <section
            className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {articles.map((article) => (

                <ArticleCard
                    key={article._id}
                    article={article}
                />

            ))}

        </section>

    );

};

export default ArticlesGrid;