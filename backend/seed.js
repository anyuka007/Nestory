import connect from "./lib/db.js";
import { products } from "./lib/product.data.js";
import Product from "./models/Product.model.js";

const seed = async () => {
    connect();

    await Product.deleteMany({});
    console.log("Products deleted");

    await Product.insertMany(products);
    console.log("Seeded successfully");
};

seed();
export default seed;
