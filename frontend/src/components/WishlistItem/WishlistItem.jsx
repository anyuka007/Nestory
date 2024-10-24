import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import StarRating from "../StarRating/StarRating";
import { Trash2 } from "lucide-react";

const WishlistItem = ({ wishItem, deleteWishItem, addToCart }) => {
    return (
        <div className="h-[28rem] py-[3rem] flex justify-around border-b">
            <div className="basis-[23%] flex justify-center items-center">
                <img
                    src={wishItem.imgUrl}
                    alt="wish item photo"
                    className="w-[20rem] h-[20rem]"
                />
            </div>
            <div className="basis-[47%] flex flex-col justify-center">
                <p className="pt-[1rem]">{wishItem.name}</p>
                <StarRating rate={wishItem.rating} />
                <p className="pt-8">{wishItem.description}</p>
                <p className="my-[2rem]">
                    <Link to={`/product/${wishItem._id}`} className="underline">
                        Details
                    </Link>
                </p>
            </div>
            <div className="basis-[23%] flex flex-col justify-center ">
                <div className="flex justify-between">
                    {wishItem.discount ? (
                        <div>
                            <p className="text-white text-center bg-red-600 w-[5rem]">
                                -{wishItem.discount}%
                            </p>
                            <p className="line-through text-[2rem]">
                                {wishItem.price.toFixed(2)}€
                            </p>
                            <p className="text-[2rem] text-colorSecondary">
                                {Math.round(
                                    wishItem.price *
                                        (1 - wishItem.discount / 100)
                                ).toFixed(2)}
                                €
                            </p>
                        </div>
                    ) : (
                        <p className="text-[2rem]">
                            {wishItem.price.toFixed(2)}€
                        </p>
                    )}
                    <button
                        onClick={deleteWishItem}
                        className="text-colorPrimary"
                    >
                        <Trash2 />
                    </button>
                </div>

                <p className="text-green-500">Is available</p>
                <p className="text-green-500">Free shipping</p>
                <Button
                    text="Add to cart"
                    width="250px"
                    onClickHandler={addToCart}
                />
            </div>
        </div>
    );
};

export default WishlistItem;
