import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";

const DashboardLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50">

            <Sidebar
            />

            <div className="flex flex-1 flex-col">

                <Navbar
                />

                <main className="flex-1 overflow-y-auto p-6">

                    <Outlet />

                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;