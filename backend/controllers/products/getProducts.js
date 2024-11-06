import Product from "../../models/Product.model.js";

const getProducts = async ({ query: { type, sort } }, res) => {
    try {
        let conditions = {};
        let options = {};
        if (type === "deals") {
            conditions = { percentage: { $gt: 40 } };
        } else if (type === "topRated") {
            options = { sort: { rating: -1 }, limit: 6 };
        }
        switch (sort) {
            case "priceAsc":
                options = { sort: { price: 1 } };
                break;
            case "priceDesc":
                options = { sort: { price: -1 } };
                break;
            case "sales":
                options = { sort: { percentage: -1 } };
                break;
            case "rating":
                options = { sort: { rating: -1 } };
                break;
            case "newest":
                options = { sort: { updatedAt: -1 } };
                break;
            default:
                break;
        }

        const products = await Product.find(conditions, null, options);
        res.send(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ error: "Internal server error" });
    }
};

export default getProducts;
