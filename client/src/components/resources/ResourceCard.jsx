import { Link } from "react-router-dom";
import {
    ExternalLink,
    FileText,
    Globe,
    Video,
    Wrench,
    LayoutTemplate,
} from "lucide-react";

const iconMap = {
    pdf: FileText,
    website: Globe,
    video: Video,
    tool: Wrench,
    template: LayoutTemplate,
};

const ResourceCard = ({ resource }) => {

    const TypeIcon = iconMap[resource.type] || FileText;

    return (

        <div
            className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
            "
        >

            <div className="mb-5 flex items-center justify-between">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-100
                    "
                >

                    <TypeIcon
                        size={24}
                        className="text-indigo-600"
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
                        capitalize
                        text-slate-600
                    "
                >

                    {resource.type}

                </span>

            </div>

            <h2
                className="
                    text-xl
                    font-semibold
                    text-slate-900
                "
            >

                {resource.title}

            </h2>

            <p
                className="
                    mt-3
                    line-clamp-3
                    text-sm
                    leading-6
                    text-slate-500
                "
            >

                {resource.description}

            </p>

            <div className="mt-6 flex items-center justify-between">

                <span
                    className="
                        rounded-full
                        bg-indigo-50
                        px-3
                        py-1
                        text-sm
                        text-indigo-600
                    "
                >

                    {resource.topic?.title}

                </span>

                <Link
                    to={`/resources/${resource.slug}`}
                    className="
                        flex
                        items-center
                        gap-2
                        font-medium
                        text-indigo-600
                        transition
                        hover:text-indigo-700
                    "
                >

                    View

                    <ExternalLink size={16} />

                </Link>

            </div>

        </div>

    );

};

export default ResourceCard;