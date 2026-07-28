import { useState } from "react";
import { useEffect } from "react";

import AIUsageCard from "../../components/dashboard/AIUsageCard.jsx";
import DashboardStats from "../../components/dashboard/DashboardStats.jsx";
import PopularTopics from "../../components/dashboard/PopularTopics.jsx";
import QuickActions from "../../components/dashboard/QuickActions.jsx";
import RecentChats from "../../components/dashboard/RecentChats.jsx";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner.jsx";

import Spinner from "../../components/ui/Spinner.jsx";
import Alert from "../../components/ui/Alert.jsx";
import { getDashboardData } from "../../services/dashboard.api.js";




const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const response = await getDashboardData();

                setDashboardData(response.data);

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    "Failed to load dashboard."
                );

            } finally {

                setLoading(false);

            }
        };

        fetchDashboard();

    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Spinner />
            </div>
        )
    }

    if (error) {
        return (
            <Alert variant="error">
                {error}
            </Alert>
        )
    }

    return (
        <div className="space-y-8">

            <WelcomeBanner
                userName={dashboardData.summary.userName}
            />

            <DashboardStats
                stats={dashboardData.summary.stats}
            />

            <QuickActions />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                <RecentChats
                    chats={dashboardData.recentChats}
                />

                <PopularTopics
                    topics={dashboardData.popularTopics}
                />

            </div>

            <AIUsageCard
                usage={dashboardData.usage}
            />

        </div>
    )
}

export default Dashboard;