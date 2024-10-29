import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const UserProfileInfo = () => {
    const [dropdowns, setDropdowns] = useState({
        dropdownPersonalData: false,
        dropdownAccessData: false,
        dropdownAddress: false,
    });

    const [isEditMode, setIsEditMode] = useState({
        personalDataDetails: false,
        accessDataDetails: false,
        addressDetails: false,
    });

    const dropDownHandler = (id) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const editModeHandler = (id) => {
        setIsEditMode((prevState) => ({
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
                                id="dropdownPersonalData"
                                onClick={() =>
                                    dropDownHandler("dropdownPersonalData")
                                }
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdownPersonalData ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        {!isEditMode.personalDataDetails ? (
                            <div id="personalDataDetails">
                                Info
                                <button
                                    onClick={() =>
                                        editModeHandler("personalDataDetails")
                                    }
                                >
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <div>
                                Form
                                <button
                                    onClick={() =>
                                        editModeHandler("personalDataDetails")
                                    }
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Your access data</p>
                        <div className="flex gap-2">
                            <p>Show details</p>
                            <button
                                id="dropdownAccessData"
                                onClick={() =>
                                    dropDownHandler("dropdownAccessData")
                                }
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdownAccessData ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        {!isEditMode.accessDataDetails ? (
                            <div>
                                Info
                                <button
                                    onClick={() =>
                                        editModeHandler("accessDataDetails")
                                    }
                                >
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <div>
                                Form
                                <button
                                    onClick={() =>
                                        editModeHandler("accessDataDetails")
                                    }
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Your address</p>
                        <div className="flex gap-2">
                            <p>Show details</p>
                            <button
                                id="dropdownAddress"
                                onClick={() =>
                                    dropDownHandler("dropdownAddress")
                                }
                            >
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            !dropdowns.dropdownAddress ? "hidden" : ""
                        } text-red-500 w-24 h-24`}
                    >
                        {!isEditMode.addressDetails ? (
                            <div>
                                Info
                                <button
                                    onClick={() =>
                                        editModeHandler("addressDetails")
                                    }
                                >
                                    Edit
                                </button>
                            </div>
                        ) : (
                            <div>
                                Form
                                <button
                                    onClick={() =>
                                        editModeHandler("addressDetails")
                                    }
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileInfo;
