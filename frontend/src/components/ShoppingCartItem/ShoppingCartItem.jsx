/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { Trash2 } from "lucide-react";
import WishHeart from "../WishHeart/WishHeart";

const ShoppingCartItem = ({ cartItem, deleteCartItem }) => {
  return (
    <div className="relative border-b py-7">
      {/* Top Section: Discount and Trash Icon */}
      <div className="flex justify-between">
        {/* Discount Label */}
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

        {/* Trash Icon */}
        <div className="absolute top-7 right-6 flex space-x-2">
          <Trash2
            onClick={deleteCartItem}
            className="text-colorPrimary cursor-pointer"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="big flex flex-col md:flex-row justify-between mt-4">
        {/* Product Image */}
        <div className="flex flex-col md:basis-[25%] md:mx-8">
          <Link to={`/product/${cartItem._id}`}>
            <img
              src={cartItem.imgUrl}
              alt="product"
              className="w-[18rem] h-[18rem] mx-auto"
            />
          </Link>
        </div>

        {/* Main Middle Content */}
        {/* <div className="flex flex-col md:basis-[47%] md:mx-8"> */}
        <div className="flex flex-col md:basis-[65%] md:mx-8">
          {/* Top Middle Div: Title, Stars, Description */}
          <div className=" flex flex-col md:flex md:flex-row">
            <div className="flex flex-col justify-center basis-2/3">
              <p className="text-center md:text-left md:pt-8 font-semibold text-3xl mb-4">
                {cartItem.name}
              </p>
              <div className="flex justify-center md:justify-start">
                <StarRating rate={cartItem.rating} />
              </div>
              <p className="text-center sm:text-left pt-8 text-xl text-gray-600">
                {cartItem.description}
              </p>
            </div>
            <div className="hidden md:block basis-1/3"></div>
          </div>

          {/* Bottom Middle Div: Quantity, Heart, and Price */}
          <div className="flex flex-row justify-between items-center mt-5">
            <div className="flex items-center">
              <select
                id="quantity"
                className="border rounded px-2.5 py-1.5 mr-4"
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
              <WishHeart className="text-colorPrimary cursor-pointer" />
            </div>

            {/* Price */}
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Delivery and Click & Collect */}
      <div className="flex-col md:flex-row flex justify-between mt-4 w-full gap-4">
        {/* Delivery Info */}
        <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8 rounded-md space-y-1">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="delivery"
              name="deliveryOption"
              className="form-radio"
              value="delivery"
              defaultChecked
            />
            <label htmlFor="delivery" className="text-[1.3rem] text-gray-700">
              <h3 className="text-[1.3rem] font-semibold">Delivery</h3>
            </label>
          </div>
          <p className="text-[1.3rem] text-green-600">
            Delivery: 2 - 3 business days
          </p>
          <p className="text-[1.3rem] text-green-600">
            Shipping method: Parcel, immediately available
          </p>
        </div>

        {/* Click & Collect Info */}
        <div className="w-full p-4 md:w-1/2 bg-gray-100 md:p-8 rounded-md">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="clickCollect"
              name="deliveryOption"
              className="form-radio"
              value="clickCollect"
            />
            <label
              htmlFor="clickCollect"
              className="text-[1.3rem] text-gray-700"
            >
              <h3 className="text-[1.3rem] font-semibold">Click & Collect</h3>
            </label>
          </div>
          <div className="mt-2 text-[1.3rem] text-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
