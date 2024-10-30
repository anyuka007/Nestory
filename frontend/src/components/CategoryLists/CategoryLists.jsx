import CategoryListCard from "../CategoryListCard/CategoryListCard";

const categoryLists = [
    {
        title: "BEDS",
        img: "/images/beds/bed2.webp",
    },
    {
        title: "SOFAS",
        img: "/images/sofas/sofa1.webp",
    },
    {
        title: "DESKS",
        img: "/images/desks/desk1.webp",
    },
    {
        title: "CHAIRS",
        img: "/images/chairs/chair4.webp",
    },
    {
        title: "TABLES",
        img: "/images/tables/table1.webp",
    },
];
const CategoryLists = () => {
    return (
        <>
            <h2 className="text-4xl font-bold mt-[20rem] mb-[5rem] text-center">
                NESTORY CATEGORIES
            </h2>
            {/* MOBILE */}
            {/* <div className="w-full grid grid-cols-4 grid-rows-2 h-[600px] gap-4 "> */}
            <div className="md:hidden w-[90%] aspect-[4/3] flex flex-col mx-auto gap-10 ">
                {categoryLists.map((item, index) => (
                    <CategoryListCard
                        key={index}
                        title={item.title}
                        img={item.img}
                    />
                ))}
                {/* TABLET */}
            </div>

            <div
                className="hidden md:grid lg:hidden w-full gap-4"
                style={{
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "auto auto auto",
                    gridTemplateAreas: `
            "img1 img1"
            "img2 img3"
            "img4 img5"
         `,
                }}
            >
                {categoryLists.map((item, index) => (
                    <CategoryListCard
                        key={index}
                        title={item.title}
                        img={item.img}
                        className={`${
                            index === 0 ? "col-span-2" : "col-span-1"
                        }`}
                        style={{ gridArea: `img${index + 1}` }}
                    />
                ))}
            </div>
            {/* DESKTOP */}
        </>
    );
};

export default CategoryLists;
