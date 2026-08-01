import {
    Pencil,
    Trash2,
    CheckCircle,
    XCircle,
} from "lucide-react";

const ResourcesTable = ({
    resources,
    loading,
    onEdit,
    onDelete,
}) => {

    if (loading) {

        return (

            <div
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-10
                    text-center
                    text-slate-500
                "
            >

                Loading resources...

            </div>

        );

    }

    if (!resources.length) {

        return (

            <div
                className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-10
                    text-center
                    text-slate-500
                "
            >

                No resources found.

            </div>

        );

    }

    return (

        <div
            className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
            "
        >

            <table className="w-full">

                <thead
                    className="
                        border-b
                        bg-slate-50
                    "
                >

                    <tr>

                        <th className="px-6 py-4 text-left">

                            Title

                        </th>

                        <th className="px-6 py-4 text-left">

                            Topic

                        </th>

                        <th className="px-6 py-4 text-center">

                            Type

                        </th>

                        <th className="px-6 py-4 text-center">

                            Published

                        </th>

                        <th className="px-6 py-4 text-center">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {resources.map((resource) => (

                        <tr
                            key={resource._id}
                            className="border-b"
                        >

                            <td className="px-6 py-5">

                                <div className="font-semibold">

                                    {resource.title}

                                </div>

                            </td>

                            <td className="px-6 py-5">

                                {resource.topic?.title}

                            </td>

                            <td className="px-6 py-5 text-center">

                                <span
                                    className="
                                        rounded-full
                                        bg-slate-100
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        capitalize
                                    "
                                >

                                    {resource.type}

                                </span>

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center">

                                    {resource.isPublished ? (

                                        <CheckCircle
                                            size={18}
                                            className="text-green-600"
                                        />

                                    ) : (

                                        <XCircle
                                            size={18}
                                            className="text-red-600"
                                        />

                                    )}

                                </div>

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center gap-3">

                                    <button
                                        onClick={() =>
                                            onEdit(resource)
                                        }
                                        className="
                                            rounded-lg
                                            p-2
                                            hover:bg-slate-100
                                        "
                                    >

                                        <Pencil size={18} />

                                    </button>

                                    <button
                                        onClick={() =>
                                            onDelete(resource._id)
                                        }
                                        className="
                                            rounded-lg
                                            p-2
                                            text-red-600
                                            hover:bg-red-50
                                        "
                                    >

                                        <Trash2 size={18} />

                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default ResourcesTable;