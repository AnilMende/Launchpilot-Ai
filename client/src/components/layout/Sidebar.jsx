import { NavLink } from "react-router-dom";
import { LogOut, PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { navigation } from "../../constants/navigation.js";
import Button from "../ui/Button.jsx";
import { useAuth } from "../../context/useAuth.js";

const Sidebar = ({ collapsed, setCollapsed }) => {

    const { logout } = useAuth();

    return (

        <aside
            className={`
                sticky
                top-0
                flex
                h-screen
                flex-col
                border-r
                border-slate-200
                bg-white
                transition-all
                duration-300
                ${collapsed ? "w-20" : "w-72"}
            `}
        >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-5">

                <div className="flex items-center gap-3 overflow-hidden">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-indigo-600
                            text-lg
                            font-bold
                            text-white
                            shrink-0
                        "
                    >
                        LP
                    </div>

                    {!collapsed && (

                        <div>

                            <h2 className="text-lg font-semibold text-slate-900">
                                LaunchPilot
                            </h2>

                            <p className="text-xs text-slate-500">
                                AI Startup Assistant
                            </p>

                        </div>

                    )}

                </div>

                <button
                    onClick={() => setCollapsed(prev => !prev)}
                    className="rounded-lg p-2 transition hover:bg-slate-100"
                >

                    {collapsed ? (
                        <PanelLeftOpen size={18} />
                    ) : (
                        <PanelLeftClose size={18} />
                    )}

                </button>

            </div>

            {/* Navigation */}

            <nav className="flex-1 space-y-2 p-4">

                {navigation.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-medium
                                transition-all

                                ${
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                }
                                `
                            }
                        >

                            <Icon
                                size={20}
                                className="shrink-0"
                            />

                            {!collapsed && (
                                <span>{item.name}</span>
                            )}

                        </NavLink>

                    );

                })}

            </nav>

            {/* Footer */}

            <div className="border-t border-slate-200 p-4">

                <Button
                    variant="ghost"
                    onClick={logout}
                    className={`
                        w-full
                        justify-start
                        ${collapsed ? "px-3" : ""}
                    `}
                >

                    <LogOut
                        size={18}
                        className="shrink-0"
                    />

                    {!collapsed && (
                        <span className="ml-2">
                            Logout
                        </span>
                    )}

                </Button>

            </div>

        </aside>

    );

};

export default Sidebar;