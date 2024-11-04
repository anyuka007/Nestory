import OrderItem from "../../components/UserProfile/OrderItem/OrderItem";

const testOrders = [
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
];

const UserOrders = () => {
    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] lg:[4.8rem] mb-[1rem]">
                Orders
            </h2>
            {testOrders.map((item, index) => (
                <OrderItem key={index} orderItem={item} />
            ))}
        </div>
    );
};

export default UserOrders;
