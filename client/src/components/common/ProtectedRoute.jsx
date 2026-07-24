import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Loader } from "../ui";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = () => {

    const {

        loading,

        isAuthenticated

    } = useAuth();

    const location = useLocation();

    if (loading) {

        return <Loader />;

    }

    if (!isAuthenticated) {

        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );

    }

    return <Outlet />;

};

export default ProtectedRoute;