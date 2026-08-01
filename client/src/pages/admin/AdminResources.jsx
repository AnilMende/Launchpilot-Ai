import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout.jsx";

import ResourcesTable from "../../components/admin/resources/ResourcesTable.jsx";
import ResourceFormModal from "../../components/admin/resources/ResourceFormModal.jsx";

import ConfirmDeleteModal from "../../components/common/ConfirmDeleteModal.jsx";

import {
    getAdminResources,
    createAdminResource,
    updateAdminResource,
    deleteAdminResource,
} from "../../services/admin/adminResource.api.js";

import { getAdminTopics } from "../../services/admin/adminTopic.api.js";

const AdminResources = () => {

    const [resources, setResources] = useState([]);
    const [topics, setTopics] = useState([]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [open, setOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);

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

            const [resourceRes, topicRes] = await Promise.all([

                getAdminResources(),

                getAdminTopics(),

            ]);

            setResources(resourceRes.resources || []);

            setTopics(topicRes.topics || []);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleCreate = () => {

        setSelectedResource(null);

        setOpen(true);

    };

    const handleEdit = (resource) => {

        setSelectedResource(resource);

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

            await deleteAdminResource(deleteId);

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

            if (selectedResource) {

                await updateAdminResource(
                    selectedResource._id,
                    formData
                );

            } else {

                await createAdminResource(formData);

            }

            setOpen(false);

            setSelectedResource(null);

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

                            Resources

                        </h1>

                        <p className="mt-1 text-slate-500">

                            Manage startup resources and tools.

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

                        + Add Resource

                    </button>

                </div>

                <ResourcesTable

                    resources={resources}

                    loading={loading}

                    onEdit={handleEdit}

                    onDelete={handleDelete}

                />

            </div>

            <ResourceFormModal

                open={open}

                resource={selectedResource}

                topics={topics}

                loading={saving}

                onClose={() => {

                    setOpen(false);

                    setSelectedResource(null);

                }}

                onSubmit={handleSubmit}

            />

            <ConfirmDeleteModal

                open={deleteOpen}

                title="Delete Resource"

                message="Are you sure you want to delete this resource? This action cannot be undone."

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

export default AdminResources;