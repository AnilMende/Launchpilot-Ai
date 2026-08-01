import { useEffect, useState } from "react";

const initialForm = {
    title: "",
    slug: "",
    description: "",
    type: "website",
    url: "",
    topic: "",
    tags: "",
    thumbnail: "",
    isPublished: true,
};

const ResourceFormModal = ({
    open,
    resource,
    topics,
    loading,
    onClose,
    onSubmit,
}) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {

        if (resource) {

            setForm({

                title: resource.title || "",

                slug: resource.slug || "",

                description: resource.description || "",

                type: resource.type || "website",

                url: resource.url || "",

                topic:
                    resource.topic?._id ||
                    resource.topic ||
                    "",

                tags:
                    resource.tags?.join(", ") ||
                    "",

                thumbnail:
                    resource.thumbnail || "",

                isPublished:
                    resource.isPublished,

            });

        } else {

            setForm(initialForm);

        }

    }, [resource]);

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

                .map((tag) => tag.trim())

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
                    max-w-2xl
                    overflow-y-auto
                    rounded-2xl
                    bg-white
                    p-8
                    shadow-xl
                "
            >

                <h2
                    className="
                        mb-6
                        text-2xl
                        font-bold
                    "
                >

                    {resource

                        ? "Edit Resource"

                        : "Create Resource"}

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
                        required
                        className="w-full rounded-lg border p-3"
                    />

                    <input
                        type="text"
                        name="slug"
                        placeholder="Slug"
                        value={form.slug}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border p-3"
                    />

                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border p-3"
                    />

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-4
                        "
                    >

                        <select
                            name="topic"
                            value={form.topic}
                            onChange={handleChange}
                            required
                            className="rounded-lg border p-3"
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

                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="rounded-lg border p-3"
                        >

                            <option value="website">
                                Website
                            </option>

                            <option value="pdf">
                                PDF
                            </option>

                            <option value="video">
                                Video
                            </option>

                            <option value="tool">
                                Tool
                            </option>

                            <option value="template">
                                Template
                            </option>

                        </select>

                    </div>

                    <input
                        type="url"
                        name="url"
                        placeholder="Resource URL"
                        value={form.url}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border p-3"
                    />

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
                        name="thumbnail"
                        placeholder="Thumbnail URL"
                        value={form.thumbnail}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <label
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <input
                            type="checkbox"
                            name="isPublished"
                            checked={form.isPublished}
                            onChange={handleChange}
                        />

                        Published

                    </label>

                    <div
                        className="
                            flex
                            justify-end
                            gap-3
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

                                : resource

                                    ? "Update Resource"

                                    : "Create Resource"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default ResourceFormModal;