import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem.jsx";
import Button from "../../components/Button/Button";
import WishHeart from "../../components/WishHeart/WishHeart.jsx";

const testCartItems = [
  {
    _id: 1234,
    name: "Circle corners table",
    rating: 4.2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
    price: 223,
    discount: 10,
    imgUrl:
      "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
  },
  {
    _id: 5678,
    name: "Modern Nightstand",
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
    price: 255,
    discount: 0,
    imgUrl:
      "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic11-800x800.webp",
  },
  {
    _id: 9101,
    name: "Wooden dresser",
    rating: 4.7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
    price: 468,
    discount: 41,
    imgUrl:
      "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic17-800x800.webp",
  },
];

const ShoppingCart = () => {
  const cartItems = testCartItems;
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-2/3 p-6">
        <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div className="flex mb-4" key={item._id}>
                <ShoppingCartItem cartItem={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/3 p-6 bg-gray-200 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Value:</span>
            <span>{totalPrice} €</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Costs:</span>
            <span>5.00 €</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Gesamtsumme:</span>
            <span>{(parseFloat(totalPrice) + 5.0).toFixed(2)} €</span>
          </div>
        </div>
        <Button
          text="Zur Kasse"
          className="bg-red-600 text-white w-full py-2 mt-4 font-bold"
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
