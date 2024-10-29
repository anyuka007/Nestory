import { useParams } from "react-router-dom";
import PagesBanner from "../../components/PagesBanner/PagesBanner";
import { products } from "../../components/HotDeals/HotDeals";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
    const { categoryName } = useParams();
    return (
        <>
            <div>
                <PagesBanner title={categoryName} quantity={products.length} />
            </div>
            <div className="w-full flex flex-wrap justify-start gap-10 mt-16">
                {products.map(
                    (product, index) =>
                        product.category === categoryName && (
                            <div
                                className="w-full sm:w-[45%] lg:w-[31%] "
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
