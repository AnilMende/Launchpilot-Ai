import { Navigate } from "react-router-dom";

const isAuthenticated = false;

const PublicRoute = ({ children }) => {

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default PublicRoute;