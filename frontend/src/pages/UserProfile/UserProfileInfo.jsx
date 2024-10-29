import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const UserProfileInfo = () => {
    const [dropdowns, setDropdowns] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
    });

    const dropDownHandler = (id) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] lg:[4.8rem] mb-[1rem]">
                Your profile
            </h2>
            <div>
                <div>
                    <div className="flex justify-between">
                        <p>Your personal data</p>
                        <div className="flex gap-2">
                            <p>Show details</p>
                            <button
                                id="dropdown1"
                                onClick={() => dropDownHandler("dropdown1")}
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdown1 ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        TEST
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Your access data</p>
                        <div className="flex gap-2">
                            <p>Show details</p>
                            <button
                                id="dropdown2"
                                onClick={() => dropDownHandler("dropdown2")}
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdown2 ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        TEST
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Your address</p>
                        <div className="flex gap-2">
                            <p>Show details</p>
                            <button
                                id="dropdown3"
                                onClick={() => dropDownHandler("dropdown3")}
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdown3 ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        TEST
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileInfo;
