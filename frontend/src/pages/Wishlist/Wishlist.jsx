import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WishlistItem from "../../components/WishlistItem/WishlistItem";

/* export const wishlist = [
    {
        _id: 1234,
        name: "Circle corners table",
        rating: 4.2,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 223,
        discount: 10,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic10-800x800.webp",
    },
    {
        _id: 5678,
        name: "Modern Nightstand",
        rating: 3.5,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 255,
        discount: 0,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic11-800x800.webp",
    },
    {
        _id: 9101,
        name: "Wooden dresser",
        rating: 4.7,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit ipsum nostrum ab perspiciatis sequi sunt tempore illum.",
        price: 468,
        discount: 41,
        imgUrl: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic17-800x800.webp",
    },
]; */

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        try {
            const response = await fetch("http://localhost:3000/wishlist", {
                method: "GET",
                credentials: "include",
            });
            if (!response.ok) {
                if (response.status === 404) {
                    setWishlist([]);
                } else {
                    throw new Error("Failed to fetch wishlist");
                }
            } else {
                const data = await response.json();
                console.log("data", data);
                const wishlistItems = data.items;
                setWishlist(wishlistItems);
            }
        } catch (error) {
            console.log("Error fetching userWishlist", error);
        }
    };

    const deleteWishItem = async (id) => {
        //console.log("item to del: ", wishlist.find((i) => i._id === id).name, id);
        try {
            const response = await fetch(
                `http://localhost:3000/wishlist/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to del wishlistItem");
            } else {
                fetchWishlist();
            }
        } catch (error) {
            console.log("Error deleting WishlistItem".red, error);
        }
    };
    const addToCart = (id) => {
        console.log(
            "item to add: ",
            wishlist.find((i) => i._id === id).name,
            id
        );
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
                        There are {wishlist.length} items in your wishlist
                    </h3>
                    {wishlist.map((item, index) => (
                        <WishlistItem
                            key={index}
                            wishItem={item}
                            deleteWishItem={() => deleteWishItem(item._id)}
                            addToCart={() => addToCart(item._id)}
                            /* addToChart={() => addToCart(item._id)} */
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[3.2rem] font-bold mb-[1.5rem]">
                        Your wishlist is empty
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
