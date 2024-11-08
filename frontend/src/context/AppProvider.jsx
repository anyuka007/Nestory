/* eslint-disable react/prop-types */

import { fetchWishlist } from "../utils/wishlistUtils/fetchWishList";

import React, { useEffect, useState } from "react";
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

  const navigate = useNavigate();

  useEffect(() => {
    const getWishlist = async () => {
      const items = await fetchWishlist();
      setWishlist(items);
    };
    getWishlist();
  }, []);

  const fetchUser = async () => {
    const res = await fetch("http://localhost:3000/api/checkUser", {
      credentials: "include",
    });

    if (!res.ok) {
      setUser({});
      setLoginSuccess(false);
      navigate("/login");
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
