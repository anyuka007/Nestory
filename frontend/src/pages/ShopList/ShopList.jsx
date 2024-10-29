import PagesBanner from "../../components/PagesBanner/PagesBanner";
import { products } from "../../components/HotDeals/HotDeals";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopList = () => {
    return (
        <>
            <div>
                <PagesBanner title={"SHOP"} quantity={products.length} />
            </div>
            <div className="w-full flex flex-wrap justify-between gap-10 mt-16">
                {products.map((product, index) => (
                    <div className="w-full sm:w-[45%] lg:w-[31%] " key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShopList;
