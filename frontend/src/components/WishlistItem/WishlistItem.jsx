import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import StarRating from "../StarRating/StarRating";
import { Trash2 } from "lucide-react";

const WishlistItem = ({ wishItem, deleteWishItem, addToCart }) => {
    return (
        <div className="h-fit w-[100%] md:h-[30rem] py-[3rem] flex flex-col md:flex-row justify-around border-b">
            <div className="md:basis-[30%] flex md:flex-col justify-between md:justify-center md:mx-8">
                <div className="basis-[15%]">
                    {wishItem.discount > 0 && (
                        <p
                            className={`text-white text-center ${
                                wishItem.discount > 40
                                    ? "bg-colorTertiary"
                                    : "bg-colorSecondary"
                            } w-[5rem]`}
                        >
                            -{wishItem.discount}%
                        </p>
                    )}
                </div>
                <div>
                    <Link to={`/product/${wishItem._id}`}>
                        <img
                            src={wishItem.imgUrl}
                            alt="wish item photo"
                            className="w-[25rem] h-[25rem] mx-auto"
                        />
                    </Link>
                </div>
                <div className="text-center basis-[15%] flex justify-center">
                    <button
                        onClick={deleteWishItem}
                        className=" h-8 w-8 text-colorPrimary md:hidden mb-auto"
                    >
                        <Trash2 />
                    </button>
                </div>
            </div>
            <div className="basis-[47%] flex flex-col justify-center md:mx-8">
                <p className="pt-8 md:pt-0">{wishItem.name}</p>
                <StarRating rate={wishItem.rating} />
                <p className="pt-8">{wishItem.description}</p>
                <p className="mt-auto pt-4">
                    <Link to={`/product/${wishItem._id}`} className="underline">
                        Details
                    </Link>
                </p>
            </div>
            <div className="basis-[18%] flex flex-col justify-center md:mx-8">
                <div className="flex justify-between mt-8 md:mt-0">
                    {wishItem.discount ? (
                        <div>
                            <p className="line-through text-[2rem]">
                                {wishItem.price.toFixed(2)}€
                            </p>
                            <p className="text-[2rem] text-colorTertiary">
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
                        className="p-4 text-colorPrimary hidden md:block mb-auto"
                    >
                        <Trash2 />
                    </button>
                </div>

                <p className="text-green-600">Is available</p>
                <p className="text-green-600">Free shipping</p>
                <div className="flex justify-center mt-auto pt-8">
                    <Button
                        text="Add to cart"
                        width="200px"
                        onClickHandler={addToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
