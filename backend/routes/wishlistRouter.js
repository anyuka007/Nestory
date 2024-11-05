import express from "express";
import { getWishlist } from "../controllers/wishlist.js";

const wishlistRouter = express.Router();

wishlistRouter.route("/").get(getWishlist);

export default wishlistRouter;
