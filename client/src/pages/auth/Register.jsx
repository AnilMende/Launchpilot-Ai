
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import RegisterForm from "../../components/auth/RegisterForm.jsx";

const Register = () => {

    return (

        <AuthLayout
            title="Create Your Account"
            subtitle="Join LaunchPilot AI and start building smarter startups."
        >

            <RegisterForm />

        </AuthLayout>

    );

};

export default Register;