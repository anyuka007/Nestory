import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../components/HotDeals/HotDeals";

const TopRated = () => {
    return (
        <div className="w-full mt-56">
            <h2 className="text-colorPrimary font-bold text-center mt-20">
                TOP RATED PRODUCTS
            </h2>
            {/* MOBILE */}
            <div className="w-full flex flex-col space-y-10 md:hidden items-center justify-center">
                {products.map((product, index) => (
                    <div className="w-[80%] mt-10 " key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* TABLET */}
            <div className="hidden lg:hidden md:flex flex-wrap gap-10 items-center justify-center">
                {products.map((product, index) => (
                    <div className="w-[45%] mt-10 " key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:flex flex-wrap gap-10 items-center justify-center">
                {products.map((product, index) => (
                    <div className="w-[30%] mt-10 " key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRated;
