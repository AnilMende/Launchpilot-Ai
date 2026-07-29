import ResourcePreviewCard from "./ResourcePreviewCard.jsx";

const RelatedResources = ({ resources }) => {

    return (

        <section>

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-900">

                    Related Resources

                </h2>

                <p className="mt-2 text-slate-500">

                    Helpful templates, tools, websites and downloadable resources.

                </p>

            </div>

            {resources.length === 0 ? (

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

                    <h3 className="text-lg font-semibold">

                        No Resources Available

                    </h3>

                    <p className="mt-2 text-slate-500">

                        Resources for this topic will appear here once they are added.

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

                    {resources.map(resource => (

                        <ResourcePreviewCard
                            key={resource._id}
                            resource={resource}
                        />

                    ))}

                </div>

            )}

        </section>

    );

};

export default RelatedResources;