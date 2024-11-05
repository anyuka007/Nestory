import { useParams } from "react-router-dom";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

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
