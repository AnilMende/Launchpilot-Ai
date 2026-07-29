import { Link } from "react-router-dom";
import {
    ArrowRight,
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

const TopicCard = ({ topic }) => {

    const Icon = iconMap[topic.icon] || BookOpen;

    return (

        <div
            className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-200
                hover:shadow-lg
            "
        >

            {/* Header */}

            <div className="flex items-start justify-between">

                <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: `${topic.color}20`,
                    }}
                >

                    <Icon
                        size={28}
                        style={{
                            color: topic.color,
                        }}
                    />

                </div>

                <span
                    className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-600
                    "
                >
                    {topic.articleCount} Articles
                </span>

            </div>

            {/* Content */}

            <div className="mt-6">

                <h3 className="text-xl font-semibold text-slate-900">
                    {topic.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {topic.description}
                </p>

            </div>

            {/* Footer */}

            <div className="mt-8">

                <Link
                    to={`/topics/${topic.slug}`}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        font-medium
                        text-indigo-600
                        transition
                        group-hover:gap-3
                    "
                >

                    Explore Topic

                    <ArrowRight size={18} />

                </Link>

            </div>

        </div>

    );

};

export default TopicCard;