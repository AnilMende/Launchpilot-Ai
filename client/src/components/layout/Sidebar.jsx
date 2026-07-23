import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation.js";

const Sidebar = () => {

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">

            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-slate-200">

                <h1 className="text-2xl font-bold text-indigo-600">
                    LaunchPilot AI
                </h1>

            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {
                    navigation.map((item) => {

                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                ${isActive
                                        ? "bg-indigo-600 text-white shadow-md"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                    }`
                                }
                            >
                                <Icon size={20} />

                                <span className="font-medium">
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })
                }
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-200 p-4">

                <p className="text-sm text-slate-500 text-center">
                    LaunchPilot AI v1.0
                </p>

            </div>
        </aside>
    )
}
export default Sidebar;