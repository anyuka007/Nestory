import { useContext, useEffect, useState } from "react";
import OrderItem from "../../components/UserProfile/OrderItem/OrderItem";
import { fetchUsersOrders } from "../../utils/ordersUtils/fetchUsersOrders";
import { AppContext } from "../../context/AppProvider";

/* const testOrders = [
    {
        _id: 1234,
        name: "Circle corners table",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 223,
        discount: 10,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
        date: "2024-09-18",
        status: "delivered",
        priceByOrder: 200.7,
        quantity: 2,
    },
    {
        _id: 5678,
        name: "Modern Nightstand",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 255,
        discount: 0,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic11-800x800.webp",
        date: "2024-10-29",
        status: "assembling",
        priceByOrder: 255,
        quantity: 3,
    },
    {
        _id: 9101,
        name: "Wooden dresser",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 468,
        discount: 41,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic17-800x800.webp",
        date: "2024-10-29",
        status: "in transit",
        priceByOrder: 276.12,
        quantity: 1,
    },
]; */

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AppContext);

    useEffect(() => {
        const getUsersOrders = async () => {
            const orders = await fetchUsersOrders();
            //setOrders(orders);
            const sortedOrders = orders.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setOrders(sortedOrders);
        };
        if (user._id) {
            getUsersOrders();
        }
    }, []);

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] lg:[4.8rem] mb-[1rem]">
                Orders
            </h2>
            {orders.map((order, orderIndex) => (
                <div key={orderIndex}>
                    {order.items.map((item, itemIndex) => (
                        <OrderItem
                            key={itemIndex}
                            orderItem={{
                                ...item,
                                createdAt: order.createdAt,
                                status: order.status,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default UserOrders;
