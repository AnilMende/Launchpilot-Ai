
import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";

import DashboardStats from "../../components/dashboard/DashboardStats";

import { getDashboardData } from "../../services/dashboard.api";

const AdminDashboard = () => {

    const [stats, setStats] = useState([]);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data =
                await getDashboardData();

            const summary =
                data.summary.stats;

            setStats([

                {

                    title: "Topics",

                    value: summary.topics,

                    icon: "BookOpen",

                    color: "blue",

                },

                {

                    title: "Articles",

                    value: summary.articles,

                    icon: "FileText",

                    color: "green",

                },

                {

                    title: "Resources",

                    value: summary.resources,

                    icon: "FolderOpen",

                    color: "amber",

                },

                {

                    title: "Chats",

                    value: summary.chats,

                    icon: "MessageSquare",

                    color: "purple",

                },

            ]);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <div className="space-y-8">

                <div>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-slate-900
                        "
                    >

                        Admin Dashboard

                    </h1>

                    <p
                        className="
                            mt-2
                            text-slate-500
                        "
                    >

                        Manage Topics, Articles, Resources and AI knowledge.

                    </p>

                </div>

                <DashboardStats

                    stats={stats}

                />

            </div>

        </AdminLayout>

    );

};

export default AdminDashboard;