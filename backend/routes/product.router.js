import { Router } from "express";
import getTopRated from "../controllers/products/getTopRated.js";
import getDeals from "../controllers/products/getDeals.js";
import getProducts from "../controllers/products/getProducts.js";

const router = Router();

router.get("/", getProducts);
router.get("/deals", getDeals);
router.get("/topRated", getTopRated);

export default router;
