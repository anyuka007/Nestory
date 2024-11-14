import { useContext } from "react";
import { Link } from "react-router-dom";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import { AppContext } from "../../context/AppProvider";
import { fetchWishlist } from "../../utils/wishlistUtils/fetchWishList";

const Wishlist = () => {
    const { wishlist, setWishlist, user, setCartItems } =
        useContext(AppContext);

    const deleteWishItem = async (id) => {
        //console.log("item to del: ", wishlist.find((i) => i._id === id).name, id);
        try {
            const response = await fetch(
                `http://localhost:3000/wishlist/${id}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete wishlist item");
            } else {
                // Wishlist erneut abrufen, um die UI zu aktualisieren
                const updatedWishlist = await fetchWishlist();
                setWishlist(updatedWishlist);
            }
        } catch (error) {
            console.error("Error deleting wishlist item:", error);
        }
    };
    /* const addToCart = (id) => {
        console.log(
            "item to add: ",
            wishlist.find((i) => i._id === id).name,
            id
        );
    }; */

    const addToCart = async (productId) => {
        try {
            const response = await fetch(
                `http://localhost:3000/cart/${productId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quantity: 1,
                        color: "black",
                    }),
                    credentials: "include",
                }
            );

            const data = await response.json();
            console.log("fetched data:", data);

            if (response.ok) {
                console.log("Product added to cart", data);
                setCartItems(data.cart.items);
            } else {
                console.error("Error adding product to cart:", data.message);
            }
        } catch (error) {
            console.error("Request failed:", error);
        }
    };

    return (
        <div>
            <div className="py-[1rem] lg:py-[3rem] flex items-center justify-center">
                <h2 className=" text-[2.4rem] md:text-[4rem] lg:text-[4.8rem] text-colorPrimary font-bold">
                    Wishlist
                </h2>
            </div>
            {wishlist.length ? (
                <div className="flex flex-col items-center justify-center">
                    <h3 className=" w-[100%] lg:text-[3.2rem] text-center border-b">
                        {user.firstName}, there are {wishlist.length} items in
                        your wishlist
                    </h3>
                    {wishlist.map((item, index) => (
                        <WishlistItem
                            key={index}
                            wishItem={item}
                            deleteWishItem={() => deleteWishItem(item._id)}
                            addToCart={() => addToCart(item._id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        {user.firstName}, your wishlist is empty
                    </h3>
                    <p className="bg-[#FFB128] py-[1.5rem] px-[3.5rem] text-[1.4rem] text-white  font-bold rounded-[8rem]">
                        <Link to={"/shop"}>Go Shopping</Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
