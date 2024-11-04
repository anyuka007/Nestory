import Product from "../../models/Product.model.js";

const getTopRated = async (req, res) => {
    const topRated = await Product.find({}).sort({ rating: -1 }).limit(6);
    res.send(topRated);
};

export default getTopRated;
