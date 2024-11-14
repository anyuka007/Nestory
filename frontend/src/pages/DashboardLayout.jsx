import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => (
    <>
        <DashboardNavbar />

        <main className="px-16 md:px-20 lg:px-40 xl:px-80 w-full pt-[16rem]">
            <Outlet />
        </main>
        {/* <Footer /> */}
    </>
);

export default DashboardLayout;
