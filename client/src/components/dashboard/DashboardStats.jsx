import {
    MessageSquare,
    BookOpen,
    Newspaper,
    Link2,
} from "lucide-react";

import StatCard from "./StatCard.jsx";

const stats = [
    {
        title: "AI Chats",
        value: 24,
        icon: MessageSquare,
        color: "indigo",
        change: "+8 today",
    },
    {
        title: "Topics",
        value: 12,
        icon: BookOpen,
        color: "emerald",
        change: "+2 added",
    },
    {
        title: "Articles",
        value: 86,
        icon: Newspaper,
        color: "amber",
        change: "+5 this week",
    },
    {
        title: "Resources",
        value: 31,
        icon: Link2,
        color: "rose",
        change: "+1 today",
    },
];

const DashboardStats = () => {

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

                {stats.map((stat) => (

                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        color={stat.color}
                        change={stat.change}
                    />

                ))}

            </div>

        </section>

    );

};

export default DashboardStats;