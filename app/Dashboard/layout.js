'use client';
import AdminSidebar from "@/components/adminSidebar";
function DasboardLayout({ children }) {
    return (
        <>
        <div className="row">
            <div className="col-md-12 col-lg-2 mb-4 mb-lg-0 pt-4 ">
                <AdminSidebar />
            </div>
            <div className="col-md-9 col-lg-7 mb-4 mb-lg-0 pt-4 ">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {children}
            </div>
        </div>
        </>
    );
}
export default DasboardLayout;