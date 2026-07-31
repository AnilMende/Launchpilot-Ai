import { useEffect, useState } from "react";

const initialForm = {
    title: "",
    slug: "",
    description: "",
    icon: "BookOpen",
    color: "#2563EB",
    displayOrder: 0,
    isPublished: true,
};

const TopicFormModal = ({
    open,
    topic,
    onClose,
    onSubmit,
    loading,
}) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {

        if (topic) {

            setForm({
                title: topic.title,
                slug: topic.slug,
                description: topic.description,
                icon: topic.icon,
                color: topic.color,
                displayOrder: topic.displayOrder,
                isPublished: topic.isPublished,
            });

        } else {

            setForm(initialForm);

        }

    }, [topic]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

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

        onSubmit(form);

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
                bg-black/40
            "
        >

            <div
                className="
                    w-full
                    max-w-xl
                    rounded-2xl
                    bg-white
                    p-8
                    shadow-xl
                "
            >

                <h2 className="mb-6 text-2xl font-bold">

                    {topic
                        ? "Edit Topic"
                        : "Create Topic"}

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <input
                        name="slug"
                        placeholder="Slug"
                        value={form.slug}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            name="icon"
                            placeholder="Icon"
                            value={form.icon}
                            onChange={handleChange}
                            className="rounded-lg border p-3"
                        />

                        <input
                            type="color"
                            name="color"
                            value={form.color}
                            onChange={handleChange}
                            className="h-12 rounded-lg border"
                        />

                    </div>

                    <input
                        type="number"
                        name="displayOrder"
                        value={form.displayOrder}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3"
                    />

                    <label className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            name="isPublished"
                            checked={form.isPublished}
                            onChange={handleChange}
                        />

                        Published

                    </label>

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border px-5 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            disabled={loading}
                            className="
                                rounded-lg
                                bg-indigo-600
                                px-5
                                py-2
                                text-white
                            "
                        >

                            {loading
                                ? "Saving..."
                                : "Save"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default TopicFormModal;