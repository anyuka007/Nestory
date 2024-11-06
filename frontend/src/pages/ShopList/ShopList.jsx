import { useContext, useEffect, useState } from "react";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AppContext } from "../../context/AppProvider";

const ShopList = () => {
    const [products, setProducts] = useState([]);
    const { sortOption } = useContext(AppContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/products/?sort=${sortOption}`
                );
                const data = await response.json();
                // console.log(data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching deals:", error);
            }
        };
        console.log(sortOption);
        fetchProducts();
    }, [sortOption]);

    return (
        <>
            <div>
                <PagesBanner title={"SHOP"} quantity={products.length} />
            </div>
            <div className="w-full flex flex-wrap justify-between gap-10 mt-16">
                {products.map((product, index) => (
                    <div className="w-full sm:w-[45%] lg:w-[31%]" key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopList;
