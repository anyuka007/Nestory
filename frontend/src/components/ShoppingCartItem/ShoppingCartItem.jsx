/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { Trash2 } from "lucide-react";

const ShoppingCartItem = ({ cartItem, deleteCartItem }) => {
  return (
    <div className="h-fit md:h-[30rem] py-[3rem] flex flex-col md:flex-row justify-around border-b">
      {/* Left Section: Image and Delete Button (Mobile) */}
      <div className="md:basis-[30%] flex md:flex-col justify-between md:justify-center md:mx-8">
        <div className="basis-[15%]">
          {cartItem.discount > 0 && (
            <p
              className={`text-white text-center ${
                cartItem.discount > 40
                  ? "bg-colorTertiary"
                  : "bg-colorSecondary"
              } w-[5rem]`}
            >
              -{cartItem.discount}%
            </p>
          )}
        </div>
        <div>
          <Link to={`/product/${cartItem._id}`}>
            <img
              src={cartItem.imgUrl}
              alt="product"
              className="w-[10rem] h-[10rem] mx-auto" // Smaller size
            />
          </Link>
        </div>
        <div className="text-center basis-[15%] flex justify-center">
          <button
            onClick={deleteCartItem}
            className="h-8 w-8 text-colorPrimary md:hidden mb-auto"
          >
            <Trash2 />
          </button>
        </div>
      </div>

      {/* Middle Section: Product Details */}
      <div className="basis-[47%] flex flex-col justify-center md:mx-8">
        <p className="pt-8 md:pt-0 font-semibold text-lg">{cartItem.name}</p>
        <StarRating rate={cartItem.rating} />
        <p className="pt-8 text-sm text-gray-600">{cartItem.description}</p>

        {/* Quantity Selector */}
        <div className="mt-4">
          <label htmlFor="quantity" className="text-gray-700 mr-2">
            Quantity:
          </label>
          <select id="quantity" className="border rounded px-2 py-1">
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-auto pt-4">
          <Link to={`/product/${cartItem._id}`} className="underline">
            Details
          </Link>
        </p>
      </div>

      {/* Right Section: Price, Availability, and Remove Button (Desktop) */}
      <div className="basis-[18%] flex flex-col justify-center md:mx-8">
        <div className="flex justify-between mt-8 md:mt-0">
          {cartItem.discount ? (
            <div>
              <p className="line-through text-[2rem]">
                {cartItem.price.toFixed(2)}€
              </p>
              <p className="text-[2rem] text-colorTertiary">
                {Math.round(
                  cartItem.price * (1 - cartItem.discount / 100)
                ).toFixed(2)}
                €
              </p>
            </div>
          ) : (
            <p className="text-[2rem]">{cartItem.price.toFixed(2)}€</p>
          )}
          <button
            onClick={deleteCartItem}
            className="p-4 text-colorPrimary hidden md:block mb-auto"
          >
            <Trash2 />
          </button>
        </div>

        <p className="text-green-600">Is available</p>
        <p className="text-green-600">Free shipping</p>

        {/* Click & Collect and Delivery Info */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="clickCollect" />
            <label htmlFor="clickCollect" className="text-sm text-gray-700">
              Click & Collect
            </label>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <p>Delivery: 2 - 3 business days</p>
            <p>Shipping method: Parcel, immediately available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
