import express from "express";
import { authorize } from "../middleware.js/auth.js";
import {
    getAllUsersOrders,
    createOrder,
} from "../controllers/orders/orders.js";

const ordersRouter = express.Router();

ordersRouter
    .route("/")
    //     .get(/* authorize, */ getUsersOrders)
    .post(/* authorize, */ createOrder);
ordersRouter.route("/all").get(/* authorize, */ getAllUsersOrders);

export default ordersRouter;
