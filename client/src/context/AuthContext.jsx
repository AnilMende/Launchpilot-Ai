import { createContext, useEffect, useState } from "react";
import {
    login as loginApi,
    register as registerApi,
    logout as logoutApi,
    getCurrentUser
} from "../services/auth.api.js";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check current session
    const loadUser = async () => {

        try {

            const response = await getCurrentUser();

            setUser(response.data.user);

            setIsAuthenticated(true);

        } catch (error) {

            setUser(null);
            setIsAuthenticated(false);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        loadUser();

    }, [])

    // Login
    const login = async (credentials) => {

        setLoading(true);

        try {

            const response = await loginApi(credentials);

            setUser(response.data.user);

            setIsAuthenticated(true);

            return response;

        } finally {
            setLoading(false);
        }
    };

    // Register
    const register = async (data) => {

        setLoading(true);

        try {

            const response = await registerApi(data);

            setUser(response.data.user);

            setIsAuthenticated(true);

            return response;

        } finally {
            setLoading(false);
        }
    };

    // Logout
    const logout = async () => {

        try {

            await logoutApi();

        } finally {

            setUser(null);

            setIsAuthenticated(false);
        }
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        refreshUser: loadUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;