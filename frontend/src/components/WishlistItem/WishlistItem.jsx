import React from "react";
import { Link } from "react-router-dom";

const WishlistItem = ({ wishItem }) => {
    return (
        <div className="w-full h-[55rem] flex justify-around ">
            <div className="basis-[23%] flex justify-center items-center">
                <img
                    src={wishItem.imgUrl}
                    alt="wish item photo"
                    className="w-[20rem] h-[20rem]"
                />
            </div>
            <div className="basis-[47%] flex flex-col justify-center">
                <p className="pt-[1rem]">{wishItem.name}</p>
                {/* <p>{wishItem._id}</p> */}
                <p>{"⭐".repeat(wishItem.rating)}</p>
                {<p>{wishItem.description}</p>}
                <p className="my-[2rem]">
                    <Link to={`/product/${wishItem._id}`}>Details</Link>
                </p>
            </div>
            <div className="basis-[23%] flex flex-col justify-center ">
                <p className="text-white bg-red-600 w-[5rem]">
                    -{wishItem.discount}%
                </p>
                <p className="line-through">{wishItem.price.toFixed(2)}€</p>
                <p className="text-[3rem] text-[#FFB128]">
                    {Math.round(
                        wishItem.price * (1 - wishItem.discount / 100)
                    ).toFixed(2)}
                    €
                </p>
                <p className="text-green-500">Is available</p>
                <p className="text-green-500">Free shipping</p>
                <button className="border">Add to cart</button>
            </div>
        </div>
    );
};

export default WishlistItem;
