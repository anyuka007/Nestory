import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem.jsx";
// import Button from "../../components/Button/Button";
import { AppContext } from "../../context/AppProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckOut from "../../components/CheckOut/CheckOut.jsx";

const ShoppingCart = () => {
  const { cartItems, setCartItems, user } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        } else {
          throw new Error("Failed to fetch cart items");
        }
      } else {
        const data = await response.json();
        console.log("data:", data.items);
        setCartItems(data.items); //treba da aktueliziram sto imam so novite data
      }
    } catch (error) {
      console.log("Error fetching users cart items", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [setCartItems]);
  console.log("cartItems", cartItems);

  const deleteCartItem = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${productId}`, {
        method: "DELETE",
        credentials: "include", // Cookie mit Token senden
      });

      if (!response.ok) {
        throw new Error("Failed to delete cart item");
      } else {
        const updatedCart = await response.json();
        console.log(updatedCart);
        console.log("updatedCart.cart.items", updatedCart.cart.items);
        setCartItems(updatedCart.cart.items); // Aktualisierte Cart-Items setzen
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const updateCartItem = async (productId, quantity, color = "black") => {
    console.log(333);
    try {
      console.log("pred fetch");
      const response = await fetch(`http://localhost:3000/cart/${productId}`, {
        method: "PATCH",
        credentials: "include", // Cookie mit JWT senden
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity, color }),
      });
      console.log("posle fetch");

      if (!response.ok) {
        throw new Error("Failed to update cart item");
      } else {
        const updatedCart = await response.json();
        console.log(updatedCart);
        setCartItems(updatedCart.cart.items);
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + item.productId.price * item.quantity,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className="min-h-screen flex flex-col xl:flex-row px-0">
      {/* <div className=" left w-full py-14 px-6 xl:w-[80%]"> */}
      <div className="left lg:w-[90%] py-14 px-20 ">
        <h1 className="title text-center md:text-center md:text-[4rem] text-4xl font-semibold mb-10">
          Shopping Cart
        </h1>

        {/* <h1 className="title text-center md:text-center md:text-[4rem] text-4xl font-bold mb-8">
          Shopping Cart
        </h1> */}
        {/* <h2 className=" text-[2.2rem] md:text-[4rem] lg:text-[4.8rem] text-colorPrimary font-semibold">
          Shopping cart
        </h2> */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-[3rem] font-semibold mb-[4rem] mt-[3rem]">
              {user.firstName}, your Shopping cart is empty
            </h3>
            <div>
              <p className="bg-[#FFB128] py-[1.5rem] px-[3.5rem] text-[1.4rem] text-white  font-bold rounded-[8rem]  transition-transform duration-300 transform hover:scale-105 active:scale-100 active:bg-colorPrimary">
                <Link to={"/shop"}>Go Shopping</Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className=" w-[100%] lg:text-[3rem] text-center mb-10 mt-[4rem]">
              {user.firstName}, there are {cartItems.length} items in your
              Shopping cart
            </h3>

            {cartItems.map((cartItem) => (
              <div className="flex mb-4 md:mr-4 md:w-full" key={cartItem._id}>
                <ShoppingCartItem
                  cartItem={cartItem}
                  // deleteCartItem={deleteCartItem(cartItem.productId)}
                  deleteCartItem={() => deleteCartItem(cartItem.productId._id)}
                  updateCartItem={updateCartItem}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="bg-white xl:w-[38%] md:py-8 h-fit ml-10">
          <CheckOut totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
