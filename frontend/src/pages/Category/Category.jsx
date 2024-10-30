import { useParams } from "react-router-dom";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
import { products } from "../../components/HotDeals/HotDeals";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
    const { categoryName } = useParams();
    const filteredProducts = products.filter(
        (product) => product.category === categoryName
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
                        product.category === categoryName && (
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
