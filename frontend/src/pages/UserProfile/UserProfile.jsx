import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import UserProfileMenu from "../../components/UserProfile/UserProfileMenu";
import SubscribeBox from "../../components/UserProfile/SubscribeBox/SubscribeBox";
import { AppContext } from "../../context/AppProvider";

const UserProfile = () => {
    const location = useLocation();
    const { user } = useContext(AppContext);
    return (
        <>
            <div className="mt-[3rem] flex justify-center flex-col lg:flex-row">
                <div className="basis-[80%] order-2">
                    {location.pathname === "/user" && (
                        <>
                            <h3 className="lg:text-[3.2rem] text-center">
                                Hello, {user.firstName}!
                            </h3>
                            <p className="text-center">
                                Welcome to your account. Here you can view your
                                current orders and manage your personal
                                information.
                            </p>
                        </>
                    )}
                    <Outlet />
                </div>
                <UserProfileMenu />
            </div>
            <SubscribeBox />
        </>
    );
};

export default UserProfile;
