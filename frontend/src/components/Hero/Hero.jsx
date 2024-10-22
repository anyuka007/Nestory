import React from "react";
import Button from "../Button/Button";
import StarRating from "../StarRating/StarRating";

const Hero = () => {
    return (
        <div className="text-7xl text-red-500">
            <Button text={"Hero"} width={"100px"} />
            <StarRating rate={2.4} />
            Testtttttttttt
        </div>
    );
};

export default Hero;
