import React from "react";
import { useState } from "react";
import UserProfileSection from "./UserProfileSection";

const UserProfileInfo = () => {
    const [dropdowns, setDropdowns] = useState({
        personalData: false,
        accessData: false,
        address: false,
    });

    const [editModes, setEditModes] = useState({
        personalData: false,
        accessData: false,
        address: false,
    });

    const toggleDropdown = (section) => {
        setDropdowns((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const toggleEditMode = (section) => {
        setEditModes((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] lg:text-[4.8rem] mb-[1rem]">
                Your profile
            </h2>
            <div>
                <UserProfileSection
                    sectionId="personalData"
                    title="Your personal data"
                    isOpen={dropdowns.personalData}
                    isEditMode={editModes.personalData}
                    onToggleDropdown={toggleDropdown}
                    onToggleEditMode={toggleEditMode}
                />
                <UserProfileSection
                    sectionId="accessData"
                    title="Your access data"
                    isOpen={dropdowns.accessData}
                    isEditMode={editModes.accessData}
                    onToggleDropdown={toggleDropdown}
                    onToggleEditMode={toggleEditMode}
                />
                <UserProfileSection
                    sectionId="address"
                    title="Your address"
                    isOpen={dropdowns.address}
                    isEditMode={editModes.address}
                    onToggleDropdown={toggleDropdown}
                    onToggleEditMode={toggleEditMode}
                />
            </div>
        </div>
    );
};

export default UserProfileInfo;
