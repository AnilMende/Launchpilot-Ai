import { NavLink } from "react-router-dom";

import {

    LayoutDashboard,

    BookOpen,

    FileText,

    FolderOpen,

} from "lucide-react";

const menus = [

    {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin",
    },

    {
        label: "Topics",
        icon: BookOpen,
        path: "/admin/topics",
    },

    {
        label: "Articles",
        icon: FileText,
        path: "/admin/articles",
    },

    {
        label: "Resources",
        icon: FolderOpen,
        path: "/admin/resources",
    },

];

const AdminSidebar = () => {

    return (

        <aside
            className="
                w-64
                border-r
                border-slate-200
                bg-white
                p-6
            "
        >

            <h2
                className="
                    mb-8
                    text-2xl
                    font-bold
                    text-indigo-600
                "
            >

                LaunchPilot

            </h2>

            <nav className="space-y-2">

                {menus.map((menu) => {

                    const Icon = menu.icon;

                    return (

                        <NavLink

                            key={menu.path}

                            to={menu.path}

                            end={menu.path === "/admin"}

                            className={({ isActive }) => `

                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                transition

                                ${isActive
                                    ? "bg-indigo-600 text-white"
                                    : "text-slate-600 hover:bg-slate-100"}

                            `}

                        >

                            <Icon size={20} />

                            {menu.label}

                        </NavLink>

                    );

                })}

            </nav>

        </aside>

    );

};

export default AdminSidebar;