import {
    Pencil,
    Trash2,
    CheckCircle,
    XCircle,
} from "lucide-react";

const TopicsTable = ({
    topics,
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

                Loading topics...

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
                            Slug
                        </th>

                        <th className="px-6 py-4 text-left">
                            Description
                        </th>

                        <th className="px-6 py-4 text-center">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {topics.map((topic) => (

                        <tr
                            key={topic._id}
                            className="border-b"
                        >

                            <td className="px-6 py-5">

                                <div className="font-semibold">

                                    {topic.title}

                                </div>

                            </td>

                            <td className="px-6 py-5">

                                {topic.slug}

                            </td>

                            <td className="px-6 py-5">

                                <p className="line-clamp-2">

                                    {topic.description}

                                </p>

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center">

                                    {topic.isPublished ? (

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
                                            onEdit(topic)
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
                                            onDelete(topic._id)
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

export default TopicsTable;