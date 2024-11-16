import { Router } from "express";
import getProducts, {
    getAllProducts,
} from "../controllers/products/getProducts.js";
import searchProducts from "../controllers/products/searchProducts.js";
import { getOneProduct } from "../controllers/products/getOneProduct.js";
import { authorize } from "../middleware.js/auth.js";
const router = Router();

router.route("/").get(getProducts);
router.route("/admin").get(authorize, getAllProducts);

router.get("/search", searchProducts);
router.get("/:id", getOneProduct);
export default router;
