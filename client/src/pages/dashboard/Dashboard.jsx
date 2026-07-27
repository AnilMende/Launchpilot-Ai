import AIUsageCard from "../../components/dashboard/AIUsageCard.jsx";
import DashboardStats from "../../components/dashboard/DashboardStats.jsx";
import PopularTopics from "../../components/dashboard/PopularTopics.jsx";
import QuickActions from "../../components/dashboard/QuickActions.jsx";
import RecentChats from "../../components/dashboard/RecentChats.jsx";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner.jsx";


const Dashboard = () => {

    return(
        <div className="space-y-8">

            <WelcomeBanner/>

            <DashboardStats/>

            <QuickActions/>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                <RecentChats/>

                <PopularTopics/>

            </div>

            <AIUsageCard/>
        </div>
    )
}

export default Dashboard;