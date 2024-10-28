import { Link } from "react-router-dom";

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
                {/* MOBILE */}
                <section className="block sm:hidden w-full">
                    <Bestsellers cardWidth={320} visibleCards={1} />
                </section>
                {/* TABLET */}
                <section className="hidden sm:block md:hidden w-full">
                    <Bestsellers cardWidth={280} visibleCards={2} />
                </section>
                {/* DESKTOP */}
                <section className="hidden md:block lg:hidden w-full">
                    <Bestsellers cardWidth={300} visibleCards={2} />
                </section>
                {/* DESKTOP LARGE */}
                <section className="hidden lg:block xl:hidden w-full">
                    <Bestsellers cardWidth={280} visibleCards={3} />
                </section>
                {/* DESKTOP X LARGE */}
                <section className="hidden xl:block w-full">
                    <Bestsellers cardWidth={372} visibleCards={3} />
                </section>
            </main>
        </>
    );
};

export default Home;
