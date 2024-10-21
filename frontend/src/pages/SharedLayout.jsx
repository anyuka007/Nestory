import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="main-container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SharedLayout;
