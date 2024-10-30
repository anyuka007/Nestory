/* eslint-disable react/prop-types */
import { useState } from "react";
import StarRating from "../../components/StarRating/StarRating";
import WishHeart from "../../components/WishHeart/WishHeart";

const product = {
  _id: 1234,
  name: "Circle corners table",
  rating: 4.2,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
  price: 223,
  discount: 10,
  imgUrl:
    "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex-col gap-2 mt-2 xl:mt-28 flex md:flex-row justify-around items-center bg-white">
      {/* Left Section: Image */}
      <div className="w-full md:basis-[60%] flex justify-center mb-8 md:mb-0">
        <img
          src={product.imgUrl}
          alt="product"
          className="w-[30rem] md:w-[65rem] md:h-[65rem]"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="basis-[40%] flex flex-col justify-center space-y-10 xl:mt-[-25rem]">
        <h1 className="text-3xl xl:text-5xl font-semibold mb-3">
          {product.name}
        </h1>
        <StarRating rate={product.rating} />
        <p className="xl:w-[70%] text-2xl text-gray-600 mt-4">
          {product.description}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-6 space-x-4">
          <div className="flex items-center border rounded">
            <button
              onClick={decreaseQuantity}
              className="px-2 py-1 text-colorPrimary hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-4 py-1 text-colorPrimary">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-2 py-1 text-colorPrimary hover:bg-gray-200"
            >
              +
            </button>
          </div>
          <WishHeart className="text-colorPrimary cursor-pointer" />
        </div>
        <div className="discount basis-[18%] flex flex-col justify-center">
          {product.discount > 0 ? (
            <div className="flex items-center space-x-2">
              <p className="line-through text-3xl">
                {product.price.toFixed(2)}€
              </p>
              <p className="text-5xl text-colorTertiary">
                {Math.round(
                  product.price * (1 - product.discount / 100)
                ).toFixed(2)}
                €
              </p>
            </div>
          ) : (
            <p className="text-3xl">{product.price.toFixed(2)}€</p>
          )}
          <p className="text-green-600 mt-4">Available</p>
          <p className="text-green-600">Free Shipping</p>
          <div className="mt-6 text-sm text-gray-500">
            <p>Delivery: 2 - 3 business days</p>
            <p>Shipping method: Parcel, immediately available</p>
          </div>
        </div>
      </div>

      {/* Right Section: Price and Availability */}
    </div>
  );
};

export default ProductDetails;
