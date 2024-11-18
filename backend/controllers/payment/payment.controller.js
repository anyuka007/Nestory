import { stripe } from "../../lib/stripe.js";
import Cart from "../../models/Cart.js";
import Order from "../../models/Order.js";
import Address from "../../models/Address.js";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.CLIENT_URL);

// const YOUR_DOMAIN = "http://localhost:5173";
// export const createCheckoutSession = async (req, res) => {
//     try {
//         const { id: userId } = req.user;
//         console.log("createCheckoutSession", req.body);
//         // Get the cart items from the request body
//         const { items } = req.body;

//         if (!items || items.length === 0) {
//             return res.status(400).json({ error: "Cart is empty" });
//         }

//         // const cartItems = await Cart.find({
//         //     _id: { $in: items.map((item) => item._id) },
//         // });
//         // // .populate("productId", "name image") // 假设productId是一个ObjectId，populate用来获取产品的name和image字段
//         // // .exec();

//         const cartItems = await Cart.find({ userId })
//             .populate("items.productId", "name image") // 假设productId是一个ObjectId，populate用来获取产品的name和image字段
//             .exec();

//         console.log("cartItems", cartItems);
//         let totalAmount = 0;
//         console.log("cartItems[0].items", cartItems[0].items);
//         const lineItems = cartItems[0].items.map((item) => {
//             const price = Number(item.price);
//             const quantity = Number(item.quantity);

//             if (
//                 isNaN(price) ||
//                 isNaN(quantity) ||
//                 price <= 0 ||
//                 quantity <= 0
//             ) {
//                 throw new Error("Invalid item price or quantity");
//             }
//             const amount = Math.round(price * 100); //stripe requires amount in cents
//             totalAmount += amount * quantity;
//             return {
//                 price_data: {
//                     currency: "usd",
//                     product_data: {
//                         name: item.productId.name,
//                         // images: [item.productId.image],
//                     },
//                     unit_amount: amount,
//                 },
//                 quantity: quantity, // Ensure quantity is included here
//             };
//         });

//         console.log("lineItems", lineItems);

//         // Create a Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             // success_url: `${YOUR_DOMAIN}?success=true`,
//             // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//             success_url: `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
//             cancel_url: `${process.env.CLIENT_URL}/purchase-cancel`,

//             metadata: {
//                 items: JSON.stringify(
//                     items.map((item) => ({
//                         _id: item._id,
//                         quantity: item.quantity,
//                         // color: item.color,
//                         price: item.price,
//                     }))
//                 ),
//             },
//         });
//         console.log("session", session);
//         // Return the Stripe checkout session ID
//         res.status(200).json({
//             id: session.id,
//             totalAmount: totalAmount / 100,
//         });
//     } catch (error) {
//         console.error("Error creating checkout session:", error);
//         res.status(500).json({ error: "Failed to create checkout session" });
//     }
// };

// export const checkoutSuccess = async (req, res) => {
//     try {
//         const { session_id } = req.body;
//         const session = await stripe.checkout.sessions.retrieve(session_id);

//         console.log("session", session);
//         if (session.payment_status === "paid") {
//             //create a new order
//             const items = JSON.parse(session.metadata.items);
//             console.log(items);
//             const newOrder = new Order({
//                 userId: session.metadata.userId,
//                 items,
//                 shippingAddress: session.customer_details.address,
//                 totalAmount: session.amount_total / 100,
//                 stripeSessionId: session.id,
//             });
//             await newOrder.save();
//         }

//         // Handle successful payment
//         res.status(200).json({
//             success: true,
//             message: "Payment successful,oder created",
//             orderId: newOrder._id,
//         });
//     } catch (error) {
//         console.error("Error handling payment:", error);
//         res.status(500).json({ error: "Failed to handle payment" });
//     }
// };

export const createCheckoutSession = async (req, res) => {
    try {
        const { id: userId } = req.user;
        console.log("createCheckoutSession", req.body);
        // 获取请求体中的购物车项和收货地址
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "购物车为空" });
        }

        // 查找购物车中的商品
        const cartItems = await Cart.findOne({ userId })
            .populate("items.productId") // 获取商品的名称和图片
            .exec();

        console.log("cartItems", cartItems);
        let totalAmount = 0;
        let shippingFee = 50;
        // let totalAmountNoShippingFee = 0;

        // 计算每个商品的金额和总金额
        const lineItems = cartItems.items.map((item) => {
            const price = Number(item.productId.price);
            const quantity = Number(item.quantity);

            if (
                isNaN(price) ||
                isNaN(quantity) ||
                price <= 0 ||
                quantity <= 0
            ) {
                throw new Error("商品价格或数量无效");
            }

            const amount = Math.round(price * 100); // Stripe要求金额以分为单位
            // totalAmountNoShippingFee += amount * quantity;
            // totalAmount = totalAmountNoShippingFee + 50;
            // totalAmount += amount * quantity;

            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.productId.name,
                        // images: [item.productId.image], // 如果需要添加图片，可以在此处添加
                    },

                    unit_amount: amount,
                },
                quantity: quantity, // 确保这里包含数量
            };
        });

        lineItems.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Shipping Fee",
                },
                unit_amount: shippingFee * 100, // 运费金额以分为单位
            },
            quantity: 1,
        });
        // const shippingFee = 50;
        // totalAmount += shippingFee;
        // console.log("lineItems", lineItems);

        // 获取收货地址信息
        const shippingAddress = await Address.findOne({ userId });
        const shippingAddressId = shippingAddress._id.toString();
        // console.log("shippingAddress", shippingAddress);
        // console.log("shippingAddressId", shippingAddressId);

        // 创建Stripe结账会话
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/purchase-cancel`,
            metadata: {
                items: JSON.stringify(
                    cartItems.items.map((item) => ({
                        _id: item.productId._id,
                        quantity: item.quantity,
                        price: item.productId.price,
                    }))
                ),
                shippingAddressId, // 添加收货地址ID到metadata
                userId,
            },
        });

        console.log("session", session);

        // 返回Stripe结账会话ID
        res.status(200).json({
            id: session.id,
            totalAmount: totalAmount / 100,
        });
    } catch (error) {
        console.error("创建结账会话时出错:", error);
        res.status(500).json({ error: "创建结账会话失败" });
    }
};

export const checkoutSuccess = async (req, res) => {
    try {
        console.log("now in checkoutSuccess");
        console.log("session_id", req.body);
        const { sessionId } = req.body;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        console.log("session in checkoutSuccess", session);
        if (session.payment_status === "paid") {
            // 从session的metadata中获取商品和收货地址ID
            const items = JSON.parse(session.metadata.items);
            const shippingAddressId = session.metadata.shippingAddressId;

            // 查找收货地址
            const shippingAddress = await Address.findById(shippingAddressId);
            console.log("shippingAddress", shippingAddress);
            console.log("items in checkoutSuccess", items);

            const userId = session.metadata.userId;

            const cartItems = await Cart.findOne({ userId })
                .populate("items.productId") // 假设productId是一个ObjectId，populate用来获取产品的name和image字段
                .exec();

            console.log("cartItems in checkoutSuccess", cartItems);
            // 创建一个新的订单
            const newOrder = new Order({
                userId: session.metadata.userId, // 用户ID
                items: cartItems.items.map((item) => ({
                    productId: item.productId._id, // 商品ID
                    quantity: item.quantity, // 商品数量
                    price: item.productId.price, // 商品价格
                })),
                shippingAddress: shippingAddress._id, // 使用收货地址ID
                total: session.amount_total / 100, // 总金额（Stripe返回的是以分为单位的金额）
                stripeSessionId: session.id, // Stripe会话ID
                status: "assembling", // 默认状态为“正在组装”
            });

            // 保存订单到数据库
            await newOrder.save();

            // 返回成功响应
            res.status(200).json({
                success: true,
                message: "支付成功，订单已创建",
                orderId: newOrder._id,
                Order: newOrder,
            });
        } else {
            res.status(400).json({ error: "支付未成功" });
        }
    } catch (error) {
        console.error("处理支付时出错:", error);
        res.status(500).json({ error: "处理支付失败" });
    }
};
