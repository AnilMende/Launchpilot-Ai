import {
    BookOpen,
    FolderOpen,
    Link2,
} from "lucide-react";

const iconMap = {

    topic: FolderOpen,

    article: BookOpen,

    resource: Link2,

};

const SourcesCard = ({ sources }) => {

    return (

        <div
            className="
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-4
            "
        >

            <h4
                className="
                    mb-3
                    text-sm
                    font-semibold
                    text-slate-700
                "
            >

                Sources

            </h4>

            <div className="space-y-3">

                {sources.map((source) => {

                    const Icon =
                        iconMap[source.sourceType] ||
                        BookOpen;

                    return (

                        <div
                            key={source.sourceId}
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <Icon
                                size={18}
                                className="text-indigo-600"
                            />

                            <span
                                className="
                                    text-sm
                                    text-slate-700
                                "
                            >

                                {source.title}

                            </span>

                        </div>

                    );

                })}

            </div>

        </div>

    );

};

export default SourcesCard;