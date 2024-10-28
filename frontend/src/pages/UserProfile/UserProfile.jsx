import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import UserProfileMenu from "../../components/UserProfile/UserProfileMenu";

const UserProfile = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col md:flex-row">
            <div className="basis-[80%] order-1 md:order-2">
                {location.pathname === "/user" && (
                    <>
                        <h3 className="lg:text-[3.2rem] text-center">
                            Hello, User!
                        </h3>
                        <p className="text-center">
                            Welcome to your account. Here you can view your
                            current orders and manage your personal information.
                        </p>
                    </>
                )}
                <Outlet />
            </div>
            <UserProfileMenu />
        </div>
    );
};

export default UserProfile;
