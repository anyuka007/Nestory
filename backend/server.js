import express from "express";
import connect from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import colors from "colors";
import morgan from "morgan";
import checkUserRouter from "./routes/checkUser.router.js";
import productRouter from "./routes/product.router.js";
import authRouter from "./routes/authRoutes.js";
import wishlistRouter from "./routes/wishlistRouter.js";

await connect();
const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://localhost:5175",
        "http://localhost:5177",
    ],
    credentials: true,
};
app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/checkUser", checkUserRouter);
app.use("/api/products", productRouter);
app.use("/api/users", authRouter);
app.use("/wishlist", wishlistRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});
