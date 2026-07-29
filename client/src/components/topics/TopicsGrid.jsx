import TopicCard from "./TopicCard.jsx";
import TopicEmptyState from "./TopicEmptyState.jsx";

const TopicsGrid = ({ topics = [] }) => {

    if (!topics.length) {
        return <TopicEmptyState/>
    }

    return (

        <div
            className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {topics.map((topic) => (

                <TopicCard
                    key={topic._id}
                    topic={topic}
                />

            ))}

        </div>

    );

};

export default TopicsGrid;