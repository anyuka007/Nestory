import express from "express";
import {
    getAllAddresses,
    getUsersAddress,
    addAddress,
    editAddress,
} from "../controllers/address/address.js";

const addressRouter = express.Router();

addressRouter
    .route("/")
    .get(/* authorize, */ getUsersAddress)
    .post(/* authorize, */ addAddress);
addressRouter.route("/all").get(/* authorize, */ getAllAddresses);

addressRouter.route("/:id").patch(editAddress);

export default addressRouter;
