import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Alert, Button, Input } from "../ui";
import PasswordInput from "./PasswordInput.jsx";
import { useAuth } from "../../context/useAuth.js";

const RegisterForm = () => {

    const navigate = useNavigate();

    const { register, loading } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
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

        const {
            name,
            email,
            password
        } = formData;

        if (!name || !email || !password) {
            return setError("Please fill in all fields.");
        }

        if (password.length < 8) {
            return setError("Password must be at least 8 characters.");
        }

        try {

            await register({
                name,
                email,
                password,
            });

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration failed."
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
                    Full Name
                </label>

                <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                />

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                </label>

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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
            />

            <Button
                type="submit"
                className="w-full"
                loading={loading}
            >
                Create Account
            </Button>

            <div className="text-center text-sm text-slate-600">

                Already have an account?{" "}

                <Link
                    to="/login"
                    className="font-medium text-indigo-600 hover:underline"
                >
                    Sign In
                </Link>

            </div>

        </form>

    );

};

export default RegisterForm;