import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Footer from "../../components/Footer/Footer";
import CategoryLists from "../../components/CategoryLists/CategoryLists";

const Home = () => {
    return (
        <>
            <main>
                <section>
                    <Hero />
                </section>
                <section>
                    <CategoryLists />
                </section>
                <section>
                    <Bestsellers />
                </section>
            </main>
        </>
    );
};

export default Home;
