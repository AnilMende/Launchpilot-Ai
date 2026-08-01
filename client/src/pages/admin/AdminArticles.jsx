import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

import ArticlesTable from "../../components/admin/articles/ArticlesTable.jsx";
import ArticleFormModal from "../../components/admin/articles/ArticleFormModal.jsx";

import ConfirmDeleteModal from "../../components/common/ConfirmDeleteModal.jsx";

import {
    getAdminArticles,
    createAdminArticle,
    updateAdminArticle,
    deleteAdminArticle,
} from "../../services/admin/adminArticle.api.js";

import { getAdminTopics } from "../../services/admin/adminTopic.api.js";

const AdminArticles = () => {

    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [open, setOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Delete Modal State
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            setLoading(true);

            const [articleRes, topicRes] = await Promise.all([

                getAdminArticles(),

                getAdminTopics(),

            ]);

            setArticles(articleRes.articles || []);

            setTopics(topicRes.topics || []);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleCreate = () => {

        setSelectedArticle(null);

        setOpen(true);

    };

    const handleEdit = (article) => {

        setSelectedArticle(article);

        setOpen(true);

    };

    // Open Delete Modal
    const handleDelete = (id) => {

        setDeleteId(id);

        setDeleteOpen(true);

    };

    // Confirm Delete
    const confirmDelete = async () => {

        try {

            setDeleting(true);

            await deleteAdminArticle(deleteId);

            setDeleteOpen(false);

            setDeleteId(null);

            fetchData();

        } catch (error) {

            console.error(error);

        } finally {

            setDeleting(false);

        }

    };

    const handleSubmit = async (formData) => {

        try {

            setSaving(true);

            if (selectedArticle) {

                await updateAdminArticle(
                    selectedArticle._id,
                    formData
                );

            } else {

                await createAdminArticle(formData);

            }

            setOpen(false);

            setSelectedArticle(null);

            fetchData();

        } catch (error) {

            console.error(error);

        } finally {

            setSaving(false);

        }

    };

    return (

        <AdminLayout>

            <div className="space-y-8">

                <div className="flex items-center justify-between">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Articles

                        </h1>

                        <p className="mt-1 text-slate-500">

                            Manage startup knowledge articles.

                        </p>

                    </div>

                    <button

                        onClick={handleCreate}

                        className="
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

                        + Add Article

                    </button>

                </div>

                <ArticlesTable

                    articles={articles}

                    loading={loading}

                    onEdit={handleEdit}

                    onDelete={handleDelete}

                />

            </div>

            <ArticleFormModal

                open={open}

                article={selectedArticle}

                topics={topics}

                loading={saving}

                onClose={() => {

                    setOpen(false);

                    setSelectedArticle(null);

                }}

                onSubmit={handleSubmit}

            />

            <ConfirmDeleteModal

                open={deleteOpen}

                title="Delete Article"

                message="Are you sure you want to delete this article? This action cannot be undone."

                loading={deleting}

                onClose={() => {

                    setDeleteOpen(false);

                    setDeleteId(null);

                }}

                onConfirm={confirmDelete}

            />

        </AdminLayout>

    );

};

export default AdminArticles;