import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const UserProfileMenu = () => {
    /* const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    }; */
    return (
        <div className="lg:basis-[15%] pb-[3rem] order-1 lg:pt-[10rem]">
            {/* mobile + Tablet */}
            <div className="lg:hidden flex flex-col justify-between">
                <div className="flex justify-between items-center border-b">
                    <div>
                        <Link to="/user">Your account</Link>
                    </div>
                    <div>
                        {/* <Button
                            text="Log out"
                            width="100px"
                            onClickHandler={handleLogout}
                        /> */}
                        <Link to="/login" className="h-8">
                            Log out
                        </Link>
                    </div>
                </div>
                <div className=" pt-4 flex">
                    <Link to="/user/orders" className="pr-2 border-r">
                        Orders
                    </Link>
                    <Link to="/user/data" className="px-2 border-r">
                        Profile
                    </Link>
                    <Link to="/wishlist" className="pl-2">
                        Wishlist
                    </Link>
                </div>
            </div>

            {/* LG */}
            <div className=" hidden lg:flex lg:flex-col justify-between">
                <Link to="/user">Your account</Link>
                <div className="pl-[3rem] flex flex-col">
                    <Link to="/user/orders">Orders</Link>
                    <Link to="/user/data">Profile</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </div>
                <div className="pt-[3rem]">
                    <Link to="/login" className="h-8">
                        Log out
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfileMenu;
