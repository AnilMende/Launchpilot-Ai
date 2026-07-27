import {
    Bot,
    BookOpen,
    Newspaper,
    Link2,
} from "lucide-react";

import QuickActionCard from "./QuickActionCard.jsx";

const actions = [
    {
        title: "Ask AI",
        description:
            "Get instant AI-powered guidance for your startup questions.",
        icon: Bot,
        to: "/chat",
        color: "indigo",
    },
    {
        title: "Browse Topics",
        description:
            "Explore startup topics like funding, legal, hiring, and marketing.",
        icon: BookOpen,
        to: "/topics",
        color: "emerald",
    },
    {
        title: "Read Articles",
        description:
            "Discover detailed articles curated for startup founders.",
        icon: Newspaper,
        to: "/articles",
        color: "amber",
    },
    {
        title: "Explore Resources",
        description:
            "Access useful websites, templates, tools, and government portals.",
        icon: Link2,
        to: "/resources",
        color: "rose",
    },
];

const QuickActions = () => {

    return (

        <section className="space-y-5">

            <div>

                <h2 className="text-xl font-semibold text-slate-900">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Jump directly to the features you use most.
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

                {actions.map((action) => (

                    <QuickActionCard
                        key={action.title}
                        title={action.title}
                        description={action.description}
                        icon={action.icon}
                        to={action.to}
                        color={action.color}
                    />

                ))}

            </div>

        </section>

    );

};

export default QuickActions;