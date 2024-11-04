import Product from "../../models/Product.model.js";

const getDeals = async (req, res) => {
    const deals = await Product.find({ percentage: { $gt: 40 } });
    res.send(deals);
};

export default getDeals;
