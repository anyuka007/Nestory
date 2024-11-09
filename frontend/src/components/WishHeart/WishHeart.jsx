import { Heart } from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { addToWishlist } from "../../utils/wishlistUtils/addToWishlist";
import { deleteWishItem } from "../../utils/wishlistUtils/deleteWishItem";
import { fetchWishlist } from "../../utils/wishlistUtils/fetchWishList";

const WishHeart = ({ productId }) => {
    const [isWish, setIsWish] = useState(false);
    const { heartCount, wishlist, setWishlist } = useContext(AppContext);

    const handleHeart = async (id) => {
        console.log("wishlist", wishlist);
        if (!id) {
            console.error("Product ID is undefined".red);
            return;
        }
        const isInWishlist = wishlist.some((product) => product._id === id);
        console.log("isInwishlistForHeart", isInWishlist);

        try {
            if (!isInWishlist) {
                await addToWishlist(id);
                const updatedWishlist = await fetchWishlist();
                setWishlist(updatedWishlist);
                setIsWish(true);
            } else {
                await deleteWishItem(id);
                const updatedWishlist = await fetchWishlist();
                setWishlist(updatedWishlist);
                setIsWish(false);
            }
        } catch (error) {
            console.error("Error adding/deleting to wishlist:", error);
        }
        // try {
        //     await addToWishlist(id);
        //     setIsWish(!isWish);
        /*  if (isWish) {
                heartCount - 1;
            } else {
                heartCount + 1;
            } */
    };

    return (
        <div>
            <Heart
                onClick={() => {
                    handleHeart(productId);
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
