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

            <div className="flex items-center gap-4">

                <div className="hidden text-right md:block">

                    <p className="font-medium text-slate-900">

                        {user?.name}

                    </p>

                    <p className="text-sm capitalize text-slate-500">

                        {user?.role}

                    </p>

                </div>

                <Avatar
                    name={user?.name}
                    size="md"
                />

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                >

                    <LogOut size={18} />

                </Button>

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