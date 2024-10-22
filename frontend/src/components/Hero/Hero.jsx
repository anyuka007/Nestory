import React from "react";
import Button from "../Button/Button";
import StarRating from "../StarRating/StarRating";
import ProductCard from "../ProductCard/ProductCard";

const product = {
    name: "Product Name",
    image: "/images/beds/bed1.webp",
    rate: 4.5,
    oldPrice: 1000,
    price: 560,
};
const Hero = () => {
    return (
        <div className="">
            <Button text={"Hero"} width={"100px"} />
            <StarRating rate={2.4} />
            <ProductCard product={product} />
            <div className=" bg-gray-100 mx-auto"></div>
        </div>
    );
};

export default Hero;
