import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;

// "productId":"67291802dce0b47c79eb0c9b",
// "quantity" : 2,
// "color": "black"
