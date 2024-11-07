/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [sortOption, setSortOption] = useState("default");

    return (
        <AppContext.Provider
            value={{
                sortOption,
                setSortOption,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
