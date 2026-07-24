
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import LoginForm from "../../components/auth/LoginForm.jsx";

const Login = () => {

    return (

        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue to LaunchPilot AI."
        >

            <LoginForm />

        </AuthLayout>

    );

};

export default Login;