import { Heart } from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const WishHeart = () => {
    const [isWish, setIsWish] = useState(false);
    const { heartCount } = useContext(AppContext);

    const handleHeart = () => {
        setIsWish(!isWish);
        if (isWish) {
            heartCount - 1;
        } else {
            heartCount + 1;
        }
    };

    return (
        <div>
            <Heart
                onClick={() => {
                    handleHeart;
                }}
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
