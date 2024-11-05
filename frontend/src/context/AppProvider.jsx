/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [sortOptions, setSortOptions] = useState("default");
    const [sortedProducts, setSortedProducts] = useState([]);

    // Update sorted products whenever products or sort options change
    useEffect(() => {
        const newSortedProducts = [...products];
        newSortedProducts.sort((a, b) => {
            switch (sortOptions) {
                case "priceAsc":
                    return a.price - b.price;
                case "priceDesc":
                    return b.price - a.price;
                case "sales":
                    return b.percentage - a.percentage;
                case "rating":
                    return a.rating - b.rating;
                case "newest":
                    return new Date(b.updatedAt) - new Date(a.updatedAt);
                default:
                    return 0;
            }
        });
        setSortedProducts(newSortedProducts);
    }, [products, sortOptions]); //依赖于products和sortOptions

    return (
        <AppContext.Provider
            value={{
                products,
                setProducts,
                sortOptions,
                setSortOptions,
                sortedProducts,
                setSortedProducts,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
