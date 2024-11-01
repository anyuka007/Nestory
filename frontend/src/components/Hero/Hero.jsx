// import Button from "../Button/Button";
// import StarRating from "../StarRating/StarRating";
// import ProductCard from "../ProductCard/ProductCard";

// const product = {
//     name: "Product Name",
//     image: "/images/beds/bed1.webp",
//     rate: 4.5,
//     percentage: "70%",
//     price: 560,
// };
const Hero = () => {
    return (
        <div className="mx-auto w-full aspect-[4/2] bg-colorPrimary rounded-3xl relative">
            <img
                src="/images/hero/hero-pic1.webp"
                alt="hero-pic1"
                className="w-[86%] rounded-3xl absolute left-1/2 transform -translate-x-1/2  top-1/2 -translate-y-1/3 "
            />
        </div>
    );
};

export default Hero;
