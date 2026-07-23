import { Link } from "react-router-dom";

const AuthLayout = ({
    title,
    subtitle,
    children,
}) => {

    return (

        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

                <Link
                    to="/"
                    className="mb-8 block text-center"
                >
                    <h1 className="text-3xl font-bold text-indigo-600">
                        LaunchPilot AI
                    </h1>
                </Link>

                <div className="mb-8 text-center">

                    <h2 className="text-2xl font-bold text-slate-900">
                        {title}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        {subtitle}
                    </p>

                </div>

                {children}

            </div>

        </div>

    );

};

export default AuthLayout;