import Order from "../../models/Order.js";

export const getAllUsersOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        console.log(
            `There are ${orders.length.toString().brightMagenta} orders`
        );
        res.send(orders);
    } catch (error) {
        console.error("Error fetching orders", red, error.message.red);
        res.status(500).send(error.message);
    }
};

export const createOrder = async (req, res) => {
    const userId = req.body.userId;
    //const userId = req.user?.id;
    const { shippingAddress, shippingFee, items, status, total } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "User Id is required" });
    }

    try {
        const newOrder = new Order({
            userId: userId,
            shippingAddress: shippingAddress,
            shippingFee: shippingFee,
            items: items,
            status: status,
            total: total,
        });
        await newOrder.save();
        console.log("The new order was successfully created", newOrder);
        res.status(201).json({
            success: true,
            data: newOrder,
        });
    } catch (error) {
        console.error(`Error creating Order: ${error}`.red);
        res.status(500).json({
            success: false,
            error: "An error occurred while creating the order",
        });
    }
};
