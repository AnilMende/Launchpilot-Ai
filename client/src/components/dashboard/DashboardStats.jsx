import {
    MessageSquare,
    BookOpen,
    Newspaper,
    FolderOpen,
} from "lucide-react";

import StatCard from "./StatCard.jsx";

const DashboardStats = ({ stats }) => {

    const cards = [

        {
            title: "Topics",
            value: stats.topics,
            icon: BookOpen,
            color: "bg-blue-500",
        },

        {
            title: "Articles",
            value: stats.articles,
            icon: Newspaper,
            color: "bg-green-500",
        },

        {
            title: "Resources",
            value: stats.resources,
            icon: FolderOpen,
            color: "bg-purple-500",
        },

        {
            title: "Chats",
            value: stats.chats,
            icon: MessageSquare,
            color: "bg-orange-500",
        },

    ];

    return (

        <section className="space-y-5">

            <div>

                <h2 className="text-xl font-semibold text-slate-900">
                    Dashboard Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    A quick overview of your LaunchPilot workspace.
                </p>

            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {cards.map((card) => (

                    <StatCard
                        key={card.title}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        color={card.color}
                    />

                ))}

            </div>

        </section>

    );

};

export default DashboardStats;