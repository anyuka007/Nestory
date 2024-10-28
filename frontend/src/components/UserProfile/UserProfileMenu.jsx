import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserProfileMenu = () => {
    return (
        <div className="basis-[15%] py-[3rem] order-2 md:order-1 md:pt-[10rem]">
            <Link to="/user">Your account</Link>
            <div className="pl-[3rem] flex flex-col">
                <Link to="/user/orders">Your orders</Link>
                <Link to="/user/data">Profile information</Link>
                <Link to="/wishlist">Your wishlist</Link>
            </div>
            <div className="pt-[3rem]">
                <Link to="/login" className="h-8">
                    Log out
                </Link>
            </div>
        </div>
    );
};

export default UserProfileMenu;
