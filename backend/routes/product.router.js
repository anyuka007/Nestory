import { Router } from "express";
import getProducts from "../controllers/products/getProducts.js";
import searchProducts from "../controllers/products/searchProducts.js";
import { getOneProduct } from "../controllers/products/getOneProduct.js";
const router = Router();

router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/:id", getOneProduct);
export default router;
