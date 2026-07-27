import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/useAuth.js";
import Button from "../ui/Button.jsx";

const WelcomeBanner = () => {

    const { user } = useAuth();

    const firstName = user?.name?.split(" ")[0] || "Founder";

    return (

        <section
            className="
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                via-indigo-700
                to-violet-700
                p-8
                text-white
                shadow-lg
            "
        >

            {/* Decorative Background */}
            <div
                className="
                    absolute
                    -right-16
                    -top-16
                    h-48
                    w-48
                    rounded-full
                    bg-white/10
                "
            />

            <div
                className="
                    absolute
                    bottom-0
                    right-20
                    h-32
                    w-32
                    rounded-full
                    bg-white/5
                "
            />

            <div
                className="
                    relative
                    flex
                    flex-col
                    justify-between
                    gap-8
                    lg:flex-row
                    lg:items-center
                "
            >

                {/* Left Content */}

                <div className="max-w-2xl">

                    <div className="mb-4 flex items-center gap-2">

                        <Sparkles size={22} />

                        <span className="text-sm font-medium uppercase tracking-wide text-indigo-100">
                            LaunchPilot AI
                        </span>

                    </div>

                    <h1 className="text-3xl font-bold leading-tight lg:text-4xl">

                        Welcome back, {firstName} 👋

                    </h1>

                    <p className="mt-4 max-w-xl text-indigo-100">

                        Build your startup with confidence. Explore expert
                        guides, discover funding opportunities, understand
                        legal compliance, and get AI-powered answers instantly.

                    </p>

                </div>

                {/* CTA */}

                <div className="flex shrink-0">

                    <Link to="/chat">

                        <Button
                            className="
                                gap-2
                                rounded-xl
                                bg-black-800
                                px-6
                                py-3
                                font-semibold
                                text-indigo-700
                                transition-all
                                duration-200
                                hover:scale-105
                                hover:bg-black-500
                            "
                        >

                            Ask LaunchPilot AI

                            <ArrowRight size={18} />

                        </Button>

                    </Link>

                </div>

            </div>

        </section>

    );

};

export default WelcomeBanner;