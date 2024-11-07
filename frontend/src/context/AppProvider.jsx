/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { fetchWishlist } from "../utils/wishlistUtils/fetchWishList";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [sortOption, setSortOption] = useState("default");
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const getWishlist = async () => {
            const items = await fetchWishlist();
            setWishlist(items);
        };
        getWishlist();
    }, []);

    return (
        <AppContext.Provider
            value={{
                sortOption,
                setSortOption,
                wishlist,
                setWishlist,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
