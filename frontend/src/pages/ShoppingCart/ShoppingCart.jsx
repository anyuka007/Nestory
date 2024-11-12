import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem.jsx";
import Button from "../../components/Button/Button";
import { AppContext } from "../../context/AppProvider";
import { useContext, useEffect } from "react";

const ShoppingCart = () => {
    const { cartItems, setCartItems } = useContext(AppContext);

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
            const response = await fetch(
                `http://localhost:3000/cart/${productId}`,
                {
                    method: "DELETE",
                    credentials: "include", // Cookie mit Token senden
                }
            );

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
            const response = await fetch(
                `http://localhost:3000/cart/${productId}`,
                {
                    method: "PATCH",
                    credentials: "include", // Cookie mit JWT senden
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity, color }),
                }
            );
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

    // const totalPrice = cartItems
    //   .reduce((total, item) => total + item.price, 0)
    //   .toFixed(2);
    const totalPrice = 0;

    return (
        <div className="min-h-screen bg-white flex flex-col xl:flex-row">
            <div className="left w-full p-14 md:w-full">
                <h1 className="title text-center md:text-left text-4xl font-bold mb-8">
                    Shopping Cart
                </h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {/* novo */}
                        {cartItems.map((cartItem) => (
                            <div
                                className="flex mb-4 md:w-full"
                                key={cartItem._id}
                            >
                                <ShoppingCartItem
                                    cartItem={cartItem}
                                    // deleteCartItem={deleteCartItem(cartItem.productId)}
                                    deleteCartItem={() =>
                                        deleteCartItem(cartItem.productId._id)
                                    }
                                    updateCartItem={updateCartItem}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="pay w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] px-15 mx-auto py-20 mt-20 space-y-15 bg-white shadow-[0px_8px_15px_rgba(0,0,0,0.2)] rounded-lg h-fit">
                <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
                <div className="">
                    <div className="flex justify-between">
                        <span>Total Value:</span>
                        <span>{totalPrice} €</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Shipping Costs:</span>
                        <span>5.00 €</span>
                    </div>
                    <div className="line border-t border-gray-300 my-10"></div>
                    <div className="flex flex-col justify-between font-bold md:text-3xl mb-2">
                        <span>Total amount:</span>
                        {/* <span>{(parseFloat(totalPrice) + 5.0).toFixed(2)} €</span> */}
                    </div>
                    <span className="text-sm text-gray-500 mt-8">
                        incl. applicable VAT.
                    </span>
                </div>
                <div className="mt-12">
                    <Button
                        text="Checkout"
                        className="text-white w-full py-2 mt-6 font-bold"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
