import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // Fetch logged in user
    const fetchCurrentUser = async () => {

        try {

            const response = await api.get("/auth/me");

            setUser(response.data.data.user);

        } catch (error) {

            setUser(null);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchCurrentUser();

    }, []);

    // Login
    const login = async (credentials) => {

        const response = await api.post(
            "/auth/login",
            credentials
        );

        setUser(response.data.data.user);

        return response.data;
    };

    // Register
    const register = async (userData) => {

        const response = await api.post(
            "/auth/register",
            userData
        );

        return response.data;

    };

    // Logout
    const logout = async () => {

        await api.post("/auth/logout");

        setUser(null);

    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        fetchCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;