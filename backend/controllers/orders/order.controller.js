import Order from "../../models/Order.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        console.log(
            `There are ${orders.length.toString().brightMagenta} addresses`
        );
        res.send(orders);
    } catch (error) {
        console.error("Error fetching orders".red, error.message.red);
        res.status(500).send(error.message);
    }
};

export const getUserOrders = async (req, res) => {
    const userId = req.user?.id;
    console.log("userId", userId);

    if (!userId) {
        console.error("User ID is missing".red);
        return res.status(400).send("User ID is missing");
    }
    try {
        console.log("Fetching order for userId:", userId);
        const order = await Order.findOne({ userId: userId })
            .populate("items.productID")
            .populate("userId", "name email")
            .populate("shippingAddress");

        if (!order) {
            console.log("No order found for userId:", userId);
            return res.status(404).send({ message: "Address not found" });
        }

        console.log("User's address fetched successfully".green, order);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error fetching user's address".red, error.message.red);
        res.status(500).send(error.message);
    }
};
