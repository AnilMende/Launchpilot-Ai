import {
    BookOpen,
    Wallet,
    Palette,
    Users,
    Building2,
    Bot,
} from "lucide-react";

const iconMap = {
    BookOpen,
    Wallet,
    Palette,
    Users,
    Building2,
    Bot,
};

const TopicHero = ({ topic }) => {

    const Icon = iconMap[topic.icon] || BookOpen;

    return (

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <div
                    className="flex h-20 w-20 items-center justify-center rounded-3xl"
                    style={{
                        backgroundColor: `${topic.color}20`,
                    }}
                >
                    <Icon
                        size={40}
                        style={{
                            color: topic.color,
                        }}
                    />
                </div>

                <div className="flex-1">

                    <h1 className="text-4xl font-bold text-slate-900">

                        {topic.title}

                    </h1>

                    <p className="mt-3 max-w-3xl text-slate-600 leading-7">

                        {topic.description}

                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                        <span
                            className={`
                                rounded-full
                                px-4
                                py-2
                                text-sm
                                font-medium
                                ${
                                    topic.isPublished
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }
                            `}
                        >
                            {topic.isPublished
                                ? "Published"
                                : "Draft"}
                        </span>

                        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">

                            Created by {topic.createdBy.name}

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default TopicHero;