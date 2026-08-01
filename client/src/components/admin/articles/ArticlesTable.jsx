import {
    Pencil,
    Trash2,
    CheckCircle,
    XCircle,
    Star,
} from "lucide-react";

const ArticlesTable = ({
    articles,
    loading,
    onEdit,
    onDelete,
}) => {

    if (loading) {

        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                Loading articles...
            </div>
        );

    }

    if (!articles.length) {

        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                No articles found.
            </div>
        );

    }

    return (

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <table className="w-full">

                <thead className="bg-slate-50 border-b">

                    <tr>

                        <th className="px-6 py-4 text-left">Title</th>

                        <th className="px-6 py-4 text-left">Topic</th>

                        <th className="px-6 py-4 text-center">Status</th>

                        <th className="px-6 py-4 text-center">Featured</th>

                        <th className="px-6 py-4 text-center">Reading</th>

                        <th className="px-6 py-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {articles.map((article) => (

                        <tr
                            key={article._id}
                            className="border-b"
                        >

                            <td className="px-6 py-5">

                                <div className="font-semibold">

                                    {article.title}

                                </div>

                            </td>

                            <td className="px-6 py-5">

                                {article.topic?.title}

                            </td>

                            <td className="px-6 py-5 text-center">

                                {article.status === "published"

                                    ? <CheckCircle className="mx-auto text-green-600" size={18}/>

                                    : <XCircle className="mx-auto text-red-600" size={18}/>}

                            </td>

                            <td className="px-6 py-5 text-center">

                                {article.isFeatured &&
                                    <Star
                                        size={18}
                                        className="mx-auto fill-yellow-400 text-yellow-400"
                                    />
                                }

                            </td>

                            <td className="px-6 py-5 text-center">

                                {article.readingTime} min

                            </td>

                            <td className="px-6 py-5">

                                <div className="flex justify-center gap-3">

                                    <button
                                        onClick={() => onEdit(article)}
                                        className="rounded-lg p-2 hover:bg-slate-100"
                                    >
                                        <Pencil size={18}/>
                                    </button>

                                    <button
                                        onClick={() => onDelete(article._id)}
                                        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 size={18}/>
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

export default ArticlesTable;