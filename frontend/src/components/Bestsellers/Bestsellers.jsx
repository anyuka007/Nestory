import ProductCard from "../ProductCard/ProductCard";
const products = [
    {
        name: "Product Name",
        image: "/images/beds/bed1.webp",
        rate: 4.5,
        percentage: "70%",
        price: 560,
    },
    {
        name: "Product Name",
        image: "/images/sofas/sofa1.webp",
        rate: 4.8,
        percentage: "30%",
        price: 1560,
    },
    {
        name: "Product Name",
        image: "/images/tables/table2.webp",
        rate: 4.2,
        percentage: "50%",
        price: 360,
    },
    {
        name: "Product Name",
        image: "/images/deskes/desk1.webp",
        rate: 4.9,
        percentage: "10%",
        price: 1060,
    },
];

const Bestsellers = () => {
    return (
        <div className="mt-80 ">
            <h2 className="mb-40 text-[4rem] font-bold text-center">
                HOT DEALS
            </h2>
            <div className="flex gap-10 ">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
