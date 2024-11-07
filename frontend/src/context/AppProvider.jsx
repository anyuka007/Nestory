/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState("default");
  const [cartCount, setCartCount] = useState(0);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userId, setUserId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContext.Provider
      value={{
        sortOption,
        setSortOption,
        cartCount,
        setCartCount,
        loginSuccess,
        setLoginSuccess,
        userId,
        setUserId,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
