import express from "express";
import {
  updateProductInCart,
  deleteProductFromCart,
} from "../controllers/cartControllers.js";
import { authorize } from "../middleware.js/auth.js";

const router = express.Router();

router
  .route("/:productId")
  .patch(authorize, updateProductInCart)
  .delete(authorize, deleteProductFromCart);

export default router;
