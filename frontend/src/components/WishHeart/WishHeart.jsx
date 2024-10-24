import { Heart } from "lucide-react";
import { useState } from "react";

const WishHeart = () => {
    const [isWish, setIsWish] = useState(false);

    return (
        <div>
            <Heart
                onClick={() => setIsWish(!isWish)}
                fill={isWish ? "currentColor" : "none"}
                className={`hover:scale-125 duration-300 ease-in-out cursor-pointer ${
                    isWish
                        ? "text-colorSecondary"
                        : "text-colorPrimary hover:text-colorSecondary"
                }`}
                size={22}
            />
        </div>
    );
};

export default WishHeart;
