import { ExternalLink } from "lucide-react";

const RelatedResources = ({ resources = [] }) => {

    if (!resources.length) return null;

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

                Related Resources

            </h3>

            <div className="space-y-4">

                {resources.map((resource) => (

                    <a
                        key={resource._id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-slate-200
                            p-4
                            transition
                            hover:border-indigo-500
                            hover:bg-indigo-50
                        "
                    >

                        <div>

                            <h4 className="font-semibold text-slate-900">

                                {resource.title}

                            </h4>

                            <p className="text-sm text-slate-500">

                                {resource.type}

                            </p>

                        </div>

                        <ExternalLink
                            size={18}
                            className="text-indigo-600"
                        />

                    </a>

                ))}

            </div>

        </section>

    );

};

export default RelatedResources;