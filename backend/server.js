import express from "express";
import connect from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import colors from "colors";
import morgan from "morgan";

import productRouter from "./routes/product.router.js";
import authRouter from "./routes/authRoutes.js";

await connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/products", productRouter);
app.use("/api/users", authRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.bold);
});
