import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import HotDeals from "../../components/HotDeals/HotDeals";
import Footer from "../../components/Footer/Footer";
import CategoryLists from "../../components/CategoryLists/CategoryLists";
import TopRated from "../../components/TopRated/TopRated";

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
                    <HotDeals cardWidth={320} visibleCards={1} />
                </section>
                {/* TABLET */}
                <section className="hidden sm:block md:hidden w-full">
                    <HotDeals cardWidth={260} visibleCards={2} />
                </section>
                {/* DESKTOP */}
                <section className="hidden md:block lg:hidden w-full">
                    <HotDeals cardWidth={300} visibleCards={2} />
                </section>
                {/* DESKTOP LARGE */}
                <section className="hidden lg:block xl:hidden w-full">
                    <HotDeals cardWidth={280} visibleCards={3} />
                </section>
                {/* DESKTOP X LARGE */}
                <section className="hidden xl:block w-full">
                    <HotDeals cardWidth={370} visibleCards={3} />
                </section>
                <section>
                    <TopRated />
                </section>
            </main>
        </>
    );
};

export default Home;
