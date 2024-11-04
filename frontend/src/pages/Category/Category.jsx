import { useParams } from "react-router-dom";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
// import { products } from "../../components/HotDeals/HotDeals";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

// export const products = [
//     {
//         _id: 1,
//         name: "Product Name",
//         category: "Beds",
//         image: "/images/beds/bed1.webp",
//         rate: 4.5,
//         percentage: "70%",
//         price: 560,
//     },
//     {
//         _id: 2,
//         name: "Product Name",
//         category: "Sofas",
//         image: "/images/sofas/sofa1.webp",
//         rate: 4.8,
//         percentage: "30%",
//         price: 1560,
//     },
//     {
//         _id: 3,
//         name: "Product Name",
//         category: "Tables",
//         image: "/images/tables/table2.webp",
//         rate: 4.2,
//         percentage: "50%",
//         price: 360,
//     },
//     {
//         _id: 4,
//         name: "Product Name",
//         category: "Chairs",
//         image: "/images/chairs/chair1.webp",
//         rate: 4.9,
//         percentage: "10%",
//         price: 1060,
//     },
//     {
//         _id: 5,
//         name: "Product Name",
//         category: "Desks",
//         image: "/images/desks/desk1.webp",
//         rate: 4.9,
//         percentage: "10%",
//         price: 1060,
//     },
//     {
//         _id: 6,
//         name: "Product Name",
//         category: "Desks",
//         image: "/images/desks/desk2.webp",
//         rate: 4.9,
//         percentage: 0,
//         price: 1060,
//     },
// ];

const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/products"
                );
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching deals:", error);
            }
        };
        fetchDeals();
    }, []);

    const { categoryName } = useParams();
    const filteredProducts = products.filter(
        (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
    );
    return (
        <>
            <div>
                <PagesBanner
                    title={categoryName}
                    quantity={filteredProducts.length}
                />
            </div>
            <div className="w-full flex flex-wrap justify-start gap-10 mt-16">
                {products.map(
                    (product, index) =>
                        product.category.toLowerCase() ===
                            categoryName.toLowerCase() && (
                            <div
                                className="w-full sm:basis-[45%] lg:basis-[31%] "
                                key={index}
                            >
                                <ProductCard product={product} />
                            </div>
                        )
                )}
            </div>
        </>
    );
};

export default Category;
