import Order from "../../models/Order.js";
import User from "../../models/User.js";

export const getAllOrders = async (req, res) => {
    try {
        const userId = req.user?.id;
        const user = await User.findOne({ _id: userId });
        if (user.role !== "admin") {
            return res
                .status(403)
                .send("You are not authorized to perform this action");
        }
        const allOrders = await Order.find({});
        const orders = await Order.find({})
            .sort({ updatedAt: -1 })
            .limit(6)
            .populate("items.productId")
            .populate("userId", "firstName lastName email")
            .populate("shippingAddress");

        console.log(
            `There are ${orders.length.toString().brightMagenta} addresses`
        );
        res.send({ orders, allOrders });
    } catch (error) {
        console.error("Error fetching orders".red, error.message.red);
        res.status(500).send(error.message);
    }
};

export const getUserOrders = async (req, res) => {
    // const userId = req.user?.id;
    // console.log("userId", userId);
    const { sessionId } = req.query;
    console.log("sessionId in getUserOrders", sessionId);

    // if (!userId) {
    //     console.error("User ID is missing".red);
    //     return res.status(400).send("User ID is missing");
    // }
    if (!sessionId) {
        console.error("sessionId is missing".red);
        return res.status(400).send("sessionId is missing");
    }
    try {
        console.log("Fetching order for stripeSessionId:", sessionId);
        const order = await Order.findOne({ stripeSessionId: sessionId })
            .populate("items.productId")
            .populate("userId", "name email")
            .populate("shippingAddress");

        if (!order) {
            // console.log("No order found for userId:", userId);
            return res.status(404).send({ message: "Address not found" });
        }

        console.log("User's address fetched successfully".green, order);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error fetching user's address".red, error.message.red);
        res.status(500).send(error.message);
    }
};
