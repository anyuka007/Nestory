import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Link to={"/"}>Logo</Link>
                </div>
                <div>
                    <Link to={"/search"}>Search Loop</Link>
                </div>
                <div>
                    <Link to={"/cart"}>Shopping Cart</Link>
                </div>
                <div>
                    <Link to={"/wishlist"}>Wishlist</Link>
                </div>
                <div>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
            <div>
                <div>
                    <Link to={"/category"}>Category</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
