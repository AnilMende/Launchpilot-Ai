import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Alert, Input } from "../ui";
import PasswordInput from "./PasswordInput.jsx";
import { useAuth } from "../../context/useAuth.js";

const LoginForm = () => {

    const navigate = useNavigate();

    const { login, loading } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        if (!formData.email || !formData.password) {
            return setError("Please fill in all fields.");
        }

        try {

            await login(formData);

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Login failed. Please try again."
            );

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            {error && (
                <Alert variant="error">
                    {error}
                </Alert>
            )}

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                </label>

                {/* <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 
                    focus:outline-none focus:ring-2 focus:ring-indigo-200"
                /> */}

                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

            </div>

            <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
            />

            <Button
                type="submit"
                className="w-full"
                loading={loading}
            >
                Sign In
            </Button>

            <div className="text-center text-sm text-slate-600">

                Don't have an account?{" "}

                <Link
                    to="/register"
                    className="font-medium text-indigo-600 hover:underline"
                >
                    Create one
                </Link>

            </div>

        </form>

    );

};

export default LoginForm;