import { Menu, Bell, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
    "/dashboard": "Dashboard",
    "/chat": "AI Chat",
    "/topics": "Topics",
    "/articles": "Articles",
    "/resources": "Resources",
    "/admin": "Admin Dashboard",
};

const Navbar = () => {

    const location = useLocation();

    const title = pageTitles[location.pathname] || "LaunchPilot AI";

    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

            {/* Left Section */}
            <div className="flex items-center gap-4">

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                >
                    <Menu size={22} />
                </button>

                <div>
                    <h1 className="text-xl font-semibold text-slate-800">
                        {title}
                    </h1>

                    <p className="text-sm text-slate-500">
                        Welcome back 👋
                    </p>
                </div>

            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">

                <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">

                    <Bell size={20} />

                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition">

                    <UserCircle2
                        size={36}
                        className="text-slate-600"
                    />

                    <div className="hidden sm:block text-left">

                        <p className="text-sm font-medium text-slate-700">
                            Guest User
                        </p>

                        <p className="text-xs text-slate-500">
                            user@example.com
                        </p>

                    </div>

                </button>

            </div>

        </header>
    );
}

export default Navbar;