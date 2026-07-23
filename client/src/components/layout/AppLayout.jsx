import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const AppLayout = () => {

    return(
        <div className="min-h-screen flex bg-slate-50">

            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <div className="flex flex-col flex-1 min-h-screen">

                <Navbar/>

                <main className="flex-1 px-6 py-6">
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </div>
    )
}

export default AppLayout;