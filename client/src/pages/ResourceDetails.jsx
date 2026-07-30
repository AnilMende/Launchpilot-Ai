import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getResourceBySlug } from "../services/resource.api.js";

import ResourceHero from "../components/resource-details/ResourceHero.jsx";
import ResourceContent from "../components/resource-details/ResourceContent.jsx";
import ResourceMeta from "../components/resource-details/ResourceMeta.jsx";
import RelatedResources from "../components/resource-details/RelatedResources.jsx";
import RelatedArticles from "../components/resource-details/RelatedArticles.jsx";
import ResourceDetailsSkeleton from "../components/resource-details/ResourceDetailsSkeleton.jsx";

const ResourceDetails = () => {

    const { slug } = useParams();

    const [resource, setResource] = useState(null);

    const [relatedResources, setRelatedResources] = useState([]);

    const [relatedArticles, setRelatedArticles] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchResource();

    }, [slug]);

    const fetchResource = async () => {

        try {

            setLoading(true);

            const response = await getResourceBySlug(
                slug
            );

            setResource(
                response.data.resource
            );

            setRelatedResources(
                response.data.relatedResources
            );

            setRelatedArticles(
                response.data.relatedArticles
            );

            setError("");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Failed to load resource."
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <ResourceDetailsSkeleton />;

    }

    if (error) {

        return (

            <div
                className="
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    p-5
                    text-red-600
                "
            >

                {error}

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <ResourceHero
                resource={resource}
            />

            <div className="grid gap-8 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <ResourceContent
                        resource={resource}
                    />

                </div>

                <div className="space-y-8">

                    <ResourceMeta
                        resource={resource}
                    />

                    <RelatedResources
                        resources={relatedResources}
                    />

                    <RelatedArticles
                        articles={relatedArticles}
                    />

                </div>

            </div>

        </div>

    );

};

export default ResourceDetails;