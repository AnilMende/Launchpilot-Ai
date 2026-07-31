import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AppLayout from "../components/layout/AppLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Topics from "../pages/topics/Topics.jsx";
import Articles from "../pages/Articles.jsx";
import ArticleDetails from "../pages/ArticleDetails.jsx";
import Resources from "../pages/Resources.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import TopicDetails from "../pages/TopicDetails.jsx";
import ResourceDetails from "../pages/ResourceDetails.jsx";
import Chat from "../pages/Chat.jsx";

const AppRoutes = () => {

    return (
        <BrowserRouter>

            <Routes>

                {/* Public Routes */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* Protected Layout */}

                <Route element={<ProtectedRoute />} >

                    <Route element={<DashboardLayout />}>

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/topics"
                            element={<Topics />}
                        />

                        <Route
                            path="/topics/:slug"
                            element={<TopicDetails />}
                        />

                        <Route
                            path="/articles"
                            element={<Articles />}
                        />

                        <Route
                            path="/articles/:slug"
                            element={<ArticleDetails />}
                        />

                        <Route
                            path="/resources"
                            element={<Resources />}
                        />

                        <Route
                            path="/resources/:slug"
                            element={<ResourceDetails />}
                        />

                        <Route
                            path="/chat"
                            element={<Chat />}
                        />

                        <Route
                            path="/admin"
                            element={<AdminDashboard />}
                        />

                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;