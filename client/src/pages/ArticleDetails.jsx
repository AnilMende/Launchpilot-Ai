import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleBySlug } from "../services/article.api.js";

import ArticleHero from "../components/article-details/ArticleHero.jsx";
import ArticleContent from "../components/article-details/ArticleContent.jsx";
import ArticleMeta from "../components/article-details/ArticleMeta.jsx";
import RelatedArticles from "../components/article-details/RelatedArticles.jsx";
import RelatedResources from "../components/article-details/RelatedResources.jsx";
import ArticleDetailsSkeleton from "../components/article-details/ArticleDetailsSkeleton.jsx";

const ArticleDetails = () => {

    const { slug } = useParams();

    const [article, setArticle] = useState(null);

    const [relatedArticles, setRelatedArticles] = useState([]);

    const [relatedResources, setRelatedResources] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchArticle();

    }, [slug]);

    const fetchArticle = async () => {

        try {

            setLoading(true);

            const response = await getArticleBySlug(slug);

            setArticle(response.data.article);

            setRelatedArticles(
                response.data.relatedArticles || []
            );

            setRelatedResources(
                response.data.relatedResources || []
            );

            setError("");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Failed to load article."
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <ArticleDetailsSkeleton />;

    }

    if (error) {

        return (

            <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-600">

                {error}

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <ArticleHero
                article={article}
            />

            <div className="grid gap-8 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <ArticleContent
                        article={article}
                    />

                </div>

                <div className="space-y-8">

                    <ArticleMeta
                        article={article}
                    />

                    <RelatedArticles
                        articles={relatedArticles}
                    />

                    <RelatedResources
                        resources={relatedResources}
                    />

                </div>

            </div>

        </div>

    );

};

export default ArticleDetails;