import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { getTopicBySlug } from "../services/topic.api.js";

import TopicHero from "../components/topic-details/TopicHero.jsx";
import TopicStats from "../components/topic-details/TopicStats.jsx";
import RelatedArticles from "../components/topic-details/RelatedArticles.jsx";
import RelatedResources from "../components/topic-details/RelatedResources.jsx";
import TopicDetailsSkeleton from "../components/topic-details/TopicDetailsSkeleton.jsx";

const TopicDetails = () => {

    const { slug } = useParams();

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [topicData, setTopicData] = useState(null);

    useEffect(() => {

        const fetchTopic = async () => {

            try {

                setLoading(true);

                const response = await getTopicBySlug(slug);

                setTopicData(response.data);

                setError("");

            } catch (err) {

                setError(

                    err.response?.data?.message ||

                    "Failed to load topic."

                );

            } finally {

                setLoading(false);

            }

        };

        fetchTopic();

    }, [slug]);

    if (loading) {

        return <TopicDetailsSkeleton />;

    }

    if (error) {

        return (

            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-600">

                {error}

            </div>

        );

    }

    if (!topicData) {

        return null;

    }

    const {
        topic,
        stats,
        articles,
        resources,
    } = topicData;

    return (

        <div className="space-y-10">

            {/* Back Button */}

            <Link
                to="/topics"
                className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-indigo-600
                    transition
                    hover:gap-3
                "
            >

                <ArrowLeft size={18} />

                Back to Topics

            </Link>

            {/* Hero */}

            <TopicHero
                topic={topic}
            />

            {/* Statistics */}

            <TopicStats
                stats={stats}
            />

            {/* Articles */}

            <RelatedArticles
                articles={articles}
            />

            {/* Resources */}

            <RelatedResources
                resources={resources}
            />

        </div>

    );

};

export default TopicDetails;