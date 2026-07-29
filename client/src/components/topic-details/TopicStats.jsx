import { BookOpen, FolderOpen } from "lucide-react";

const TopicStats = ({ stats }) => {

    const cards = [

        {
            title: "Articles",
            value: stats.articleCount,
            icon: BookOpen,
            color: "text-indigo-600",
        },

        {
            title: "Resources",
            value: stats.resourceCount,
            icon: FolderOpen,
            color: "text-emerald-600",
        },

    ];

    return (

        <section className="grid gap-6 md:grid-cols-2">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                        <div className="flex items-center gap-4">

                            <div className="rounded-xl bg-slate-100 p-3">

                                <Icon
                                    size={24}
                                    className={card.color}
                                />

                            </div>

                            <div>

                                <p className="text-3xl font-bold">

                                    {card.value}

                                </p>

                                <p className="text-slate-500">

                                    {card.title}

                                </p>

                            </div>

                        </div>

                    </div>

                );

            })}

        </section>

    );

};

export default TopicStats;