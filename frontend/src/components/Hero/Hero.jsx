import Button from "../Button/Button";
import StarRating from "../StarRating/StarRating";
import ProductCard from "../ProductCard/ProductCard";

const product = {
    name: "Product Name",
    image: "/images/beds/bed1.webp",
    rate: 4.5,
    percentage: "70%",
    price: 560,
};
const Hero = () => {
    return (
        <div className="mx-auto w-full h-[650px] bg-colorPrimary rounded-3xl relative">
            <img
                src="/images/hero/hero-pic1.webp"
                alt="hero-pic1"
                className="left-1/2 transform -translate-x-1/2 rounded-3xl absolute top-20"
            />
        </div>
    );
};

export default Hero;
