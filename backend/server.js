import express from "express";
import connect from "./lib/db.js";

import colors from "colors";
import morgan from "morgan";

await connect();
const app = express();
app.use(express.json());

app.use(morgan("dev"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});
