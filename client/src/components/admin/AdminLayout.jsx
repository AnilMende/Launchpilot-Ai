import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {

    return (

        <div
            className="
                flex
                min-h-[calc(100vh-80px)]
                bg-slate-50
            "
        >

            <AdminSidebar />

            <main
                className="
                    flex-1
                    overflow-y-auto
                    p-8
                "
            >

                {children}

            </main>

        </div>

    );

};

export default AdminLayout;