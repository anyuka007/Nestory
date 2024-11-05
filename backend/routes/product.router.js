import { Router } from "express";
import getProducts from "../controllers/products/getProducts.js";

const router = Router();

router.get("/", getProducts);

export default router;
