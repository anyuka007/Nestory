import { Link } from "react-router-dom";
const CategoryLists = () => {
    return (
        <>
            <h1 className="text-[4rem] font-bold mt-[16rem] mb-[5rem] text-center">
                NESTORY CATEGORIES
            </h1>
            <div className="w-full grid grid-cols-4 grid-rows-2 h-[600px] gap-4">
                <div className="col-span-1 row-span-1">
                    <img
                        src="/images/tables/table2.webp"
                        alt="hero-pic1"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    TABLES
                </div>
                <div className="col-span-2 row-span-2">
                    <img
                        src="/images/beds/bed1.webp"
                        alt="hero-pic1"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
                <Link to={"/category/sofas"}>
                    <div
                        className="hover:scale-110 duration-300 ease-in-out w-full h-full bg-cover bg-no-repeat col-span-1 row-span-1"
                        style={{
                            backgroundImage: `url('/images/sofas/sofa1.webp')`,
                            backgroundPosition: "20% center", // 向左偏移
                        }}
                    >
                        SOFAS
                    </div>
                </Link>
                {/* <div className="col-span-1 row-span-1">
                    <img
                        src="/images/sofas/sofa1.webp"
                        alt="hero-pic1"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div> */}
                <div className="col-span-1 row-span-1">
                    <img
                        src="/images/deskes/desk1.webp"
                        alt="hero-pic1"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
                <div className="col-span-1 row-span-1">
                    <img
                        src="/images/chairs/chair1.webp"
                        alt="hero-pic1"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
            </div>
        </>
    );
};

export default CategoryLists;
