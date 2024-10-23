import React from "react";
import { Link } from "react-router-dom";
import WishlistItem from "../../components/WishlistItem/WishlistItem";

export const testWishItems = [
    /* {
        _id: 1234,
        name: "Circle corners table",
        rating: 4,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum, autem eius repudiandae excepturi. Asperiores, dicta quo.",
        price: 223,
        discount: 10,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
    }, */
    {
        _id: 5678,
        name: "Modern Nightstand",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum, autem eius repudiandae excepturi. Asperiores, dicta quo.",
        price: 255,
        discount: 8,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic11-800x800.webp",
    },
    {
        _id: 9101,
        name: "Wooden dresser",
        rating: 5,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum, autem eius repudiandae excepturi. Asperiores, dicta quo.",
        price: 468,
        discount: 22,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic17-800x800.webp",
    },
];

const Wishlist = () => {
    return (
        <div className="w-full h-[80vh]">
            <div className="w-full py-[3rem] flex items-center justify-center">
                <h1 className="text-[6.4rem] font-bold">Wishlist</h1>
            </div>
            {testWishItems.length ? (
                <div className="h-[80%] w-[80%] mx-auto flex flex-col items-center justify-center">
                    <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        There are {testWishItems.length} items in your wishlist
                    </h3>
                    {testWishItems.map((item, index) => (
                        <WishlistItem key={index} wishItem={item} />
                    ))}
                </div>
            ) : (
                <div className="h-[80%] w-[80%] mx-auto flex flex-col items-center justify-center">
                    <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        Your wishlist is empty
                    </h3>
                    <p className="bg-[#FFB128] py-[1.5rem] px-[3.5rem] text-[1.4rem] text-white  font-bold rounded-[8rem]">
                        <Link to={"/"}>Go Shopping</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
