import ResourceCard from "./ResourceCard.jsx";

const ResourcesGrid = ({ resources }) => {

    return (

        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {resources.map((resource) => (

                <ResourceCard
                    key={resource._id}
                    resource={resource}
                />

            ))}

        </div>

    );

};

export default ResourcesGrid;