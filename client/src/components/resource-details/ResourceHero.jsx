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

const ResourceHero = ({ resource }) => {

    const TypeIcon = iconMap[resource.type] || FileText;

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "
        >

            <div className="flex flex-wrap items-center gap-6">

                <div
                    className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-2xl
                        bg-indigo-100
                    "
                >

                    <TypeIcon
                        size={36}
                        className="text-indigo-600"
                    />

                </div>

                <div className="flex-1">

                    <span
                        className="
                            rounded-full
                            bg-indigo-100
                            px-3
                            py-1
                            text-sm
                            font-medium
                            capitalize
                            text-indigo-600
                        "
                    >

                        {resource.type}

                    </span>

                    <h1 className="mt-4 text-4xl font-bold text-slate-900">

                        {resource.title}

                    </h1>

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">

                        {resource.description}

                    </p>

                </div>

                <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-indigo-600
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-indigo-700
                    "
                >

                    Visit Resource

                    <ExternalLink size={18} />

                </a>

            </div>

        </section>

    );

};

export default ResourceHero;