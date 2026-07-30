import {
    FolderOpen,
    CalendarDays,
    User,
    Tag,
} from "lucide-react";

const ResourceMeta = ({ resource }) => {

    return (

        <section
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "
        >

            <h3 className="mb-6 text-lg font-semibold">

                Resource Information

            </h3>

            <div className="space-y-5">

                <div className="flex items-center gap-3">

                    <FolderOpen
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Topic

                        </p>

                        <p className="font-medium">

                            {resource.topic?.title}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <User
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Created By

                        </p>

                        <p className="font-medium">

                            {resource.createdBy?.name}

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <CalendarDays
                        size={18}
                        className="text-indigo-600"
                    />

                    <div>

                        <p className="text-xs text-slate-500">

                            Published

                        </p>

                        <p className="font-medium">

                            {new Date(resource.createdAt).toLocaleDateString()}

                        </p>

                    </div>

                </div>

                {!!resource.tags?.length && (

                    <div>

                        <div className="mb-3 flex items-center gap-2">

                            <Tag
                                size={18}
                                className="text-indigo-600"
                            />

                            <p className="font-medium">

                                Tags

                            </p>

                        </div>

                        <div className="flex flex-wrap gap-2">

                            {resource.tags.map((tag) => (

                                <span
                                    key={tag}
                                    className="
                                        rounded-full
                                        bg-slate-100
                                        px-3
                                        py-1
                                        text-sm
                                    "
                                >

                                    {tag}

                                </span>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </section>

    );

};

export default ResourceMeta;