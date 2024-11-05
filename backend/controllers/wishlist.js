import Wishlist from "../models/Wishlist.js";

export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.find();

        console.log(
            `There are ${wishlist.length.toString().brightMagenta} wishlists`
        );
        res.send(wishlist);
    } catch (error) {
        console.error("Error fetching wishlist".red);
        res.status(500).send(error.message);
    }
};
