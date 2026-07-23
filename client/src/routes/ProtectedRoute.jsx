import { Navigate } from "react-router-dom";

const isAuthenticated = true;

const ProtectedRoute = ({ children }) => {

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

}

export default ProtectedRoute;