import express from "express";
import {
    addWishlistItem,
    deleteWishlistItem,
    getAllWishlists,
    getUserWishlist,
} from "../controllers/wishlist/wishlist.js";

const wishlistRouter = express.Router();

wishlistRouter.route("/").get(getUserWishlist);
wishlistRouter.route("/all").get(getAllWishlists);
wishlistRouter.route("/:id").post(addWishlistItem).delete(deleteWishlistItem);

export default wishlistRouter;
