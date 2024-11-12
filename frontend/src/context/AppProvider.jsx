/* eslint-disable react/prop-types */

import { fetchWishlist } from "../utils/wishlistUtils/fetchWishList";

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [sortOption, setSortOption] = useState("default");
    const [cartCount, setCartCount] = useState(0);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [heartCount, setHeartCount] = useState(0);
    const [user, setUser] = useState({});
    const [product, setProduct] = useState({});
    const [quantityForCart, setQuantityForCart] = useState(0);

    //fly to shopping cart
    const [isFlying, setIsFlying] = useState(false);
    const [flyStyle, setFlyStyle] = useState({});
    const bagIconRef = useRef(null);
    const imgRef = useRef(null);

    const navigate = useNavigate();

    const fetchUser = async () => {
        const res = await fetch("http://localhost:3000/api/checkUser", {
            credentials: "include",
        });

        if (!res.ok) {
            setUser({});
            setLoginSuccess(false);
            navigate("/");
            return;
        }
        const data = await res.json();
        console.log("fetchUser", data);
        setUser(data.user);
        setLoginSuccess(data.success);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        const getWishlist = async () => {
            const items = await fetchWishlist();
            setWishlist(items);
        };
        if (user._id) {
            getWishlist();
        }
    }, [user._id]);

    //julijana
    const resetUserData = () => {
        setUser({});
        setCartItems([]);
        setWishlist([]);
        setCartCount(0);
        setHeartCount(0);
        setLoginSuccess(false);
    };

    const handleLogout = async () => {
        try {
            console.log(555);
            await fetch("http://localhost:3000/api/users/logout", {
                method: "POST",
                credentials: "include",
            });

            console.log("Logout successful");
            resetUserData();
            //   navigate("/login");
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };
    //-----bis hier

    return (
        <AppContext.Provider
            value={{
                sortOption,
                setSortOption,
                cartCount,
                setCartCount,
                wishlist,
                setWishlist,
                loginSuccess,
                setLoginSuccess,
                searchKeyword,
                setSearchKeyword,
                heartCount,
                setHeartCount,
                user,
                setUser,
                cartItems,
                setCartItems,
                product,
                setProduct,
                resetUserData,
                handleLogout,
                quantityForCart,
                setQuantityForCart,

                //fly animation
                isFlying,
                setIsFlying,
                flyStyle,
                setFlyStyle,
                bagIconRef,
                imgRef,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
