import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const ShowOrders = () => {
    const [order, setOrder] = useState(null);
    const { sessionId } = useContext(AppContext);

    useEffect(() => {
        const fetchUserOrder = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/order/?sessionId=${sessionId}`,
                    {
                        credentials: "include",
                    }
                );
                const data = await response.json();
                console.log(data);
                setOrder(data);
            } catch (error) {
                console.log("Error fetching user order", error);
            }
        };
        fetchUserOrder();
    }, []);

    return (
        <div className="order-list-container p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Order Details</h1>
            {order ? (
                <div className="order-card border rounded-lg p-4 mb-6 shadow-md bg-white">
                    <div className="order-info flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-lg font-semibold">
                                Order ID: {order._id}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Created at:{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-500">
                                Status:{" "}
                                <span className="font-medium text-blue-600">
                                    {order.status}
                                </span>
                            </p>
                        </div>
                        <p className="text-lg font-semibold">
                            Total: ${order.total?.toFixed(2) || "N/A"}
                        </p>
                    </div>
                    <div className="items-list mb-4">
                        {order.items?.map((item) => (
                            <div
                                key={item.productId}
                                className="item flex justify-between py-2 border-b"
                            >
                                <div className="item-details">
                                    <p className="font-semibold">
                                        {item.productId.name ||
                                            "Unknown Product"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <p className="text-right text-gray-700">
                                    ${item.price?.toFixed(2) || "N/A"}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="shipping-info text-sm text-gray-600">
                        <p>Shipping Address:</p>
                        {order.shippingAddress ? (
                            <>
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>House: {order.shippingAddress.house}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Zip: {order.shippingAddress.zip}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                            </>
                        ) : (
                            <p>No shipping address available</p>
                        )}
                        <p>Shipping Fee: ${order.shippingFee || "N/A"}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Order not found.</p>
            )}
        </div>
    );
};

export default ShowOrders;
