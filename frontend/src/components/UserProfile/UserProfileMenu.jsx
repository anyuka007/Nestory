import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";

const UserProfileMenu = () => {
    const location = useLocation();
    /* const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    }; */
    return (
        <div className="lg:basis-[15%] pb-[3rem] order-1">
            {/* mobile + Tablet */}
            <div className="lg:hidden flex flex-col justify-between">
                <div className="flex justify-between items-center border-b">
                    <div>
                        <Link
                            to="/user"
                            style={{
                                color:
                                    location.pathname === "/user"
                                        ? "var(--colorTertiary)"
                                        : "inherit",
                            }}
                        >
                            Your account
                        </Link>
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
                    <Link
                        to="/user/orders"
                        className="pr-2 border-r"
                        style={{
                            color:
                                location.pathname === "/user/orders"
                                    ? "var(--colorTertiary)"
                                    : "inherit",
                        }}
                    >
                        Orders
                    </Link>

                    <Link
                        to="/user/data"
                        className="px-2 border-r"
                        style={{
                            color:
                                location.pathname === "/user/data"
                                    ? "var(--colorTertiary)"
                                    : "inherit",
                        }}
                    >
                        Profile
                    </Link>
                    <Link to="/wishlist" className="pl-2">
                        Wishlist
                    </Link>
                </div>
            </div>

            {/* LG */}
            <div className=" hidden lg:flex lg:flex-col justify-between">
                <Link
                    to="/user"
                    style={{
                        color:
                            location.pathname === "/user"
                                ? "var(--colorTertiary)"
                                : "inherit",
                    }}
                >
                    Your account
                </Link>
                <div className="pl-[3rem] flex flex-col">
                    <Link
                        to="/user/orders"
                        style={{
                            color:
                                location.pathname === "/user/orders"
                                    ? "var(--colorTertiary)"
                                    : "inherit",
                        }}
                    >
                        Orders
                    </Link>
                    <Link
                        to="/user/data"
                        style={{
                            color:
                                location.pathname === "/user/data"
                                    ? "var(--colorTertiary)"
                                    : "inherit",
                        }}
                    >
                        Profile
                    </Link>
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
