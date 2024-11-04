import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="flex items-center mr-4 space-x-4">
      <div className="flex items-center border rounded ">
        <button
          onClick={decreaseQuantity}
          className="minus px-5 py-4 text-colorPrimary text-3xl hover:bg-gray-200 focus-within:bg-gray-200"
        >
          -
        </button>
        <span className="font-medium w-16 px-5 py-4 text-colorPrimary text-3xl">
          {quantity}
        </span>
        <button
          onClick={increaseQuantity}
          className="plus px-5 py-4 text-colorPrimary text-3xl hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
