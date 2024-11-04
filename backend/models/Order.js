import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        date: { type: Date, required: true, default: Date.now },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        shippingAddress: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true,
        },
        items: [
            {
                productID: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: { type: Number, required: true },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        status: {
            type: String,
            required: true,
            enum: ["delivered", "assembling", "in transit"],
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
