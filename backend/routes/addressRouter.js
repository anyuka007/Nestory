import express from "express";
import {
    getAllAddresses,
    getUsersAddress,
    addAddress,
} from "../controllers/address/address.js";

const addressRouter = express.Router();

addressRouter
    .route("/")
    .get(/* authorize, */ getUsersAddress)
    .post(/* authorize, */ addAddress);
addressRouter.route("/all").get(/* authorize, */ getAllAddresses);

export default addressRouter;
