import React from "react";
import { Link } from "react-router-dom";
const SearchItems = ({ SearchItem }) => {
    return (
        <div className="w-full h-[25rem] flex justify-center gap-16  pt-48">
            <div className="basis-[24%] flex justify-center items-center ">
                <Link to={`/product/${SearchItem._id}`}>
                    {" "}
                    <img
                        src={SearchItem.imgUrl}
                        alt="search item photo"
                        className="w-[30rem] h-[25rem]"
                    />
                </Link>
            </div>
            <div className="  pt-8 basis-[37%] flex flex-col justify-center ">
                <p className="text-[3.2rem] text-colorPrimary">
                    {SearchItem.name}
                </p>
                <div className="basis-[23%] flex flex-col justify-center ">
                    {/* <p className="text-white bg-red-600 w-[5rem]">
                    -{SearchItem.discount}%
                </p> */}
                    <div className="price flex gap-5">
                        <p className="line-through text-red-400">
                            {SearchItem.price.toFixed(2)}€
                        </p>
                        <p className="text-[2rem] text-colorSecondary">
                            {Math.round(
                                SearchItem.price *
                                    (1 - SearchItem.discount / 100)
                            ).toFixed(2)}
                            €
                        </p>
                    </div>
                    {/* <p>{wishItem._id}</p> */}
                    {/* <p>{"⭐".repeat(SearchItem.rating)}</p> */}
                    {<p>{SearchItem.description}</p>}
                    <Link className=" border-2 p-2 flex justify-end  text-red-500 " to={`/product/${SearchItem._id}`}>
                        
                            View product
                    </Link>
                </div>

                {/* <p className="text-green-500">Is available</p>
                <p className="text-green-500">Free shipping</p>
                <button className="border">Add to cart</button> */}
            </div>
        </div>
    );
};

export default SearchItems;
