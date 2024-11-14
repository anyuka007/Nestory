import express from "express";

import { authorize } from "../middleware.js/auth.js";
import { getUser, updateUser } from "../controllers/user/user.js";

const userRouter = express.Router();

userRouter.route("/").get(authorize, getUser).patch(authorize, updateUser);

export default userRouter;
