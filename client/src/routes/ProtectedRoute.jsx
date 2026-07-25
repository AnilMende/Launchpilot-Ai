import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";
import { Spinner } from "../components/ui";

const ProtectedRoute = () => {

    const {
        loading,
        isAuthenticated,
    } = useAuth();

    if (loading) {
        return <Spinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;