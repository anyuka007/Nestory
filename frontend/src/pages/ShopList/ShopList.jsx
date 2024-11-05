import { useContext, useEffect } from "react";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AppContext } from "../../context/AppProvider.jsx";

const ShopList = () => {
    const { products, sortedProducts, setProducts } = useContext(AppContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/products"
                );
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching deals:", error);
            }
        };

        // 仅在产品数组为空时调用 fetchDeals
        if (products.length === 0) {
            fetchProducts();
        }
    }, [products.length, setProducts]); // 依赖于 products.length

    return (
        <>
            <div>
                <PagesBanner title={"SHOP"} quantity={sortedProducts.length} />
            </div>
            <div className="w-full flex flex-wrap justify-between gap-10 mt-16">
                {sortedProducts.map((product, index) => (
                    <div className="w-full sm:w-[45%] lg:w-[31%]" key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopList;
