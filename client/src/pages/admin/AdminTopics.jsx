import { useEffect, useState } from "react";

import {
    getTopics,
    createTopic,
    updateTopic,
    deleteTopic,
} from "../../services/admin/adminTopic.api.js";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

import TopicsTable from "../../components/admin/topics/TopicsTable.jsx";

import TopicFormModal from "../../components/admin/topics/TopicFormModal.jsx";

const AdminTopics = () => {

    const [topics, setTopics] = useState([]);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [open, setOpen] = useState(false);

    const [selectedTopic, setSelectedTopic] =
        useState(null);

    useEffect(() => {

        fetchTopics();

    }, []);

    const fetchTopics = async () => {

        try {

            setLoading(true);

            const response =
                await getTopics();

            setTopics(
                response.topics || []
            );

        } finally {

            setLoading(false);

        }

    };

    const handleCreate = () => {

        setSelectedTopic(null);

        setOpen(true);

    };

    const handleEdit = (topic) => {

        setSelectedTopic(topic);

        setOpen(true);

    };

    const handleDelete = async (id) => {

        const confirmed =
            window.confirm(
                "Delete this topic?"
            );

        if (!confirmed) return;

        await deleteTopic(id);

        fetchTopics();

    };

    const handleSubmit = async (form) => {

        try {

            setSaving(true);

            if (selectedTopic) {

                await updateTopic(
                    selectedTopic._id,
                    form
                );

            } else {

                await createTopic(form);

            }

            setOpen(false);

            fetchTopics();

        } finally {

            setSaving(false);

        }

    };

    return (

        <AdminLayout>

            <div className="space-y-8">

                <div className="flex items-center justify-between">

                    <div>

                        <h1
                            className="
                                text-3xl
                                font-bold
                            "
                        >

                            Topics

                        </h1>

                        <p className="text-slate-500">

                            Manage startup topics

                        </p>

                    </div>

                    <button

                        onClick={handleCreate}

                        className="
                            rounded-xl
                            bg-indigo-600
                            px-5
                            py-3
                            text-white
                        "

                    >

                        + Add Topic

                    </button>

                </div>

                <TopicsTable
                    topics={topics}
                    loading={loading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </div>

            <TopicFormModal
                open={open}
                topic={selectedTopic}
                loading={saving}
                onClose={() => setOpen(false)}
                onSubmit={handleSubmit}
            />

        </AdminLayout>

    );

};

export default AdminTopics;