import Product from "../../models/Product.model.js";

const getProducts = async ({ query: { type } }, res) => {
    try {
        // Model.find(conditions, projection, options)
        // if (type === "deals") {
        //     const products = await Product.find({ percentage: { $gt: 40 } });
        //     res.send(products);
        // } else if (type === "topRated") {
        //     const products = await Product.find({})
        //         .sort({ rating: -1 })
        //         .limit(6);
        //     res.send(products);
        // } else {
        //     const products = await Product.find({});
        //     res.send(products);
        // }
        let conditions = {};
        let options = {};
        if (type === "deals") {
            conditions = { percentage: { $gt: 40 } };
        } else if (type === "topRated") {
            options = { sort: { rating: -1 }, limit: 6 };
        }

        const products = await Product.find(conditions, null, options);
        res.send(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Internal server error" });
    }
};

export default getProducts;
