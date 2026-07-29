import { ExternalLink, FileText, Globe, Video, Wrench, FileArchive } from "lucide-react";

const typeIcons = {
    pdf: FileText,
    website: Globe,
    video: Video,
    tool: Wrench,
    template: FileArchive,
};

const ResourcePreviewCard = ({ resource }) => {

    const Icon = typeIcons[resource.type] || FileText;

    return (

        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
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
                hover:shadow-lg
            "
        >

            <div className="flex items-start justify-between">

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-50
                    "
                >

                    <Icon
                        size={28}
                        className="text-emerald-600"
                    />

                </div>

                <ExternalLink
                    size={18}
                    className="
                        text-slate-400
                        transition
                        group-hover:text-indigo-600
                    "
                />

            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">

                {resource.title}

            </h3>

            <p className="mt-3 line-clamp-3 text-slate-600">

                {resource.description}

            </p>

            <span
                className="
                    mt-6
                    inline-block
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-xs
                    font-medium
                    capitalize
                    text-slate-700
                "
            >

                {resource.type}

            </span>

        </a>

    );

};

export default ResourcePreviewCard;