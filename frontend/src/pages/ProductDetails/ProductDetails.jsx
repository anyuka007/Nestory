/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import StarRating from "../../components/StarRating/StarRating";
// import WishHeart from "../../components/WishHeart/WishHeart";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import { PiPackageBold } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import Reviews from "../../components/Reviews/Reviews";
import Carousel from "../../components/Carousel/Carousel";

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
  return (
    <>
      {/* <WishHeart className="text-colorPrimary cursor-pointer" /> */}
      <div className="flex-col gap-2 mt-1 xl:mt-[6rem] xl:mb-64 flex lg:flex-row justify-around items-center bg-white">
        {/* Left Section: Image */}
        <div className="w-full md:basis-[60%] flex justify-center mb-8 md:mb-0">
          <img
            src={product.imgUrl}
            alt="product"
            className="w-[30rem] md:w-[65rem] md:h-[65rem]"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="basis-[30%] flex flex-col justify-center space-y-10 ">
          <h1 className="text-3xl xl:text-5xl font-semibold mb-3">
            {product.name}
          </h1>
          <div className="flex items-end">
            <StarRating rate={product.rating} />
            <a
              href="#reviews" // This links to the reviews section
              className="no-underline text-[1rem] ml-2 text-gray-600 hover:text-gray-700 hover:underline"
            >
              (1 customer review)
            </a>
          </div>

          <div className="discount basis-[18%] flex flex-col justify-center">
            {product.discount > 0 ? (
              <div className="flex items-center space-x-5">
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

            <div className="mt-6 text-sm text-gray-500">
              <p>Delivery: 2 - 3 business days</p>
              <p>Shipping method: Parcel, immediately available</p>
            </div>
          </div>
          <div className="warranty flex items-center mt-4 border-b border-gray-300 pb-10">
            <label className="font-semibold text-2xl text-colorPrimary mr-4">
              Warranty
            </label>
            <div className=" items-center border border-gray-300 rounded-md p-1 shadow-sm max-w-fit self-start">
              <button className="bg-colorPrimary text-white px-5 py-2 rounded-md">
                5
              </button>
              <span className="px-4 py-2 text-gray-600 bg-gray-100 rounded-r-md">
                5 YEAR'S WARRANTY
              </span>
            </div>
          </div>

          <ColorSelector />

          <div className="parent flex justify-between items-center">
            <QuantitySelector />

            <button className="buy w-full px-6 py-4 my-6 text-white bg-colorSecondary text-3xl hover:bg-colorPrimary rounded-full">
              BUY NOW
            </button>
          </div>
          {/* Description reserve */}
          {/* <p className="xl:w-[70%] text-2xl text-gray-600 mt-4">
          {product.description}
        </p> */}
          <div className="parent flex flex-col space-y-6 mt-8 xl:mt-16">
            {/* Free Shipping */}
            <div className="flex items-center p-10 border border-gray-200 rounded-lg shadow-sm">
              <div className="icon text-6xl mr-8  text-colorPrimary">
                <PiPackageBold />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-colorPrimary mb-2">
                  Free Shipping
                </h3>
                <p className="text-xl  text-colorPrimary">Over 500€</p>
              </div>
            </div>

            {/* Chat Online */}
            <div className="flex items-center p-10 border border-gray-200 rounded-lg shadow-sm ">
              <div className="icon text-6xl mr-8  text-colorPrimary">
                <MdHeadsetMic />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-colorPrimary mb-2">
                  Chat Online
                </h3>
                <p className="text-xl  text-colorPrimary">
                  Contact with our agent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ReviewSection /> */}
      <Carousel />
      <div
        id="reviews"
        className="pt-[16rem] pb-[16rem] lg:pt-[12rem] lg:pb-[31rem]"
      >
        <Reviews />
      </div>
    </>
  );
};

export default ProductDetails;
