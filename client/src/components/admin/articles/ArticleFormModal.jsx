import { useEffect, useState } from "react";

const initialForm = {
    title: "",
    slug: "",
    summary: "",
    content: "",
    topic: "",
    tags: "",
    featuredImage: "",
    status: "draft",
    isFeatured: false,
    readingTime: 1,
    seoTitle: "",
    seoDescription: "",
};

const ArticleFormModal = ({
    open,
    article,
    topics,
    loading,
    onClose,
    onSubmit,
}) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {

        if (article) {

            setForm({

                title: article.title || "",

                slug: article.slug || "",

                summary: article.summary || "",

                content: article.content || "",

                topic: article.topic?._id || article.topic || "",

                tags: article.tags
                    ? article.tags.join(", ")
                    : "",

                featuredImage:
                    article.featuredImage || "",

                status:
                    article.status || "draft",

                isFeatured:
                    article.isFeatured || false,

                readingTime:
                    article.readingTime || 1,

                seoTitle:
                    article.seoTitle || "",

                seoDescription:
                    article.seoDescription || "",

            });

        } else {

            setForm(initialForm);

        }

    }, [article]);

    const handleChange = (e) => {

        const {

            name,

            value,

            type,

            checked,

        } = e.target;

        setForm((prev) => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const payload = {

            ...form,

            tags: form.tags
                .split(",")
                .map(tag => tag.trim())
                .filter(Boolean),

        };

        onSubmit(payload);

    };

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/50
                p-4
            "
        >

            <div
                className="
                    max-h-[90vh]
                    w-full
                    max-w-3xl
                    overflow-y-auto
                    rounded-2xl
                    bg-white
                    p-8
                "
            >

                <h2
                    className="
                        mb-6
                        text-2xl
                        font-bold
                    "
                >

                    {article
                        ? "Edit Article"
                        : "Create Article"}

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <input
                        type="text"
                        name="slug"
                        placeholder="Slug"
                        value={form.slug}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <textarea
                        rows={3}
                        name="summary"
                        placeholder="Summary"
                        value={form.summary}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <textarea
                        rows={8}
                        name="content"
                        placeholder="Content"
                        value={form.content}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                        required
                    />

                    <select
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                        required
                    >

                        <option value="">
                            Select Topic
                        </option>

                        {topics.map((topic) => (

                            <option
                                key={topic._id}
                                value={topic._id}
                            >

                                {topic.title}

                            </option>

                        ))}

                    </select>

                    <input
                        type="text"
                        name="tags"
                        placeholder="startup, funding, legal"
                        value={form.tags}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <input
                        type="text"
                        name="featuredImage"
                        placeholder="Featured Image URL"
                        value={form.featuredImage}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="number"
                            name="readingTime"
                            min="1"
                            value={form.readingTime}
                            onChange={handleChange}
                            className="rounded-lg border p-3"
                        />

                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="rounded-lg border p-3"
                        >

                            <option value="draft">
                                Draft
                            </option>

                            <option value="published">
                                Published
                            </option>

                        </select>

                    </div>

                    <label
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <input
                            type="checkbox"
                            name="isFeatured"
                            checked={form.isFeatured}
                            onChange={handleChange}
                        />

                        Featured Article

                    </label>

                    <input
                        type="text"
                        name="seoTitle"
                        placeholder="SEO Title"
                        value={form.seoTitle}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <textarea
                        rows={3}
                        name="seoDescription"
                        placeholder="SEO Description"
                        value={form.seoDescription}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <div
                        className="
                            flex
                            justify-end
                            gap-3
                            pt-2
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                rounded-lg
                                border
                                px-5
                                py-2
                            "
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                rounded-lg
                                bg-indigo-600
                                px-5
                                py-2
                                text-white
                                disabled:opacity-50
                            "
                        >

                            {loading
                                ? "Saving..."
                                : article
                                    ? "Update Article"
                                    : "Create Article"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default ArticleFormModal;