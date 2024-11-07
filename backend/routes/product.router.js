import { Router } from "express";
import getProducts from "../controllers/products/getProducts.js";
import searchProducts from "../controllers/products/searchProducts.js";
const router = Router();

router.get("/", getProducts);
router.get("/search",searchProducts);
export default router;
