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
                // name: {type: String, required: true},
                // imgUrl: {type: String, required: true},
                quantity: { type: Number, required: true },
                // price soll mit discount berechnet werden
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
        total: { type: Number, required: true },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
