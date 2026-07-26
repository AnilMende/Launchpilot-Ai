import { useLocation } from "react-router-dom";
import {
    Menu,
    Search,
    LogOut,
} from "lucide-react";

import { navigation } from "../../constants/navigation.js";
import { useAuth } from "../../context/useAuth.js";
import Avatar from "../ui/Avatar.jsx";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";

const Navbar = ({ collapsed, setCollapsed }) => {

    const location = useLocation();

    const { user, logout } = useAuth();

    const currentPage = navigation.find(
        (item) => item.path === location.pathname
    );

    return (

        <header
            className="
                sticky
                top-0
                z-30
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                bg-white
                px-6
                py-4
            "
        >

            {/* Left Section */}

            <div className="flex items-center gap-4">

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="
                        rounded-lg
                        p-2
                        transition
                        hover:bg-slate-100
                    "
                >
                    <Menu size={20} />
                </button>

                <div>

                    <h1 className="text-xl font-semibold text-slate-900">

                        {currentPage?.label || "Dashboard"}

                    </h1>

                    <p className="text-sm text-slate-500">

                        Welcome back!

                    </p>

                </div>

            </div>

            {/* Center */}

            <div className="hidden w-full max-w-md lg:block">

                <Input
                    leftIcon={Search}
                    placeholder="Search..."
                />

            </div>

            {/* Right Section */}

            <div className="flex items-center">

                <div
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white
                     px-3 py-2 shadow-sm"
                >

                    <Avatar
                        name={user?.name}
                        size="lg"
                    />

                    <div className="hidden md:block">

                        <p className="text-sm font-semibold text-slate-900">
                            {user?.name}
                        </p>

                        <p className="text-xs capitalize text-slate-500">
                            {user?.role}
                        </p>

                    </div>

                    <div className="h-8 w-px bg-slate-200" />

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={logout}
                        className="
                gap-2
                rounded-lg
                px-3
                py-2
                text-slate-600
                transition-all
                duration-200
                hover:bg-red-50
                hover:text-red-600
                cursor-pointer
            "
                    >

                        <LogOut size={16} />

                        <span className="hidden lg:inline">
                            Logout
                        </span>

                    </Button>

                </div>

            </div>

        </header>

    );

};

export default Navbar;

// const Navbar = () => {

//     return(
//         <div>
//             Navbar
//         </div>
//     )
// }

// export default Navbar;