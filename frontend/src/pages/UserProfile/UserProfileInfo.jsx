import React, { useState } from "react";
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

    const [formData, setFormData] = useState({
        personalData: { firstName: "", lastName: "", email: "" },
        accessData: { username: "", password: "" },
        address: { street: "", city: "", zip: "" },
    });

    const [showPassword, setShowPassword] = useState(false);

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

    const handleInputChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const fieldDefinitions = {
        personalData: [
            { name: "firstName", label: "First name" },
            { name: "lastName", label: "Last name" },
            { name: "email", label: "Email", type: "email" },
        ],
        accessData: [
            { name: "username", label: "Username" },
            { name: "password", label: "Password", type: "password" },
        ],
        address: [
            { name: "street", label: "Street" },
            { name: "house", label: "street" },
            { name: "city", label: "City" },
            { name: "zip", label: "Zip Code" },
            { name: "country", label: "Country" },
        ],
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] lg:text-[4.8rem] mb-[1rem]">
                Your profile
            </h2>
            <div>
                {Object.keys(fieldDefinitions).map((sectionId) => (
                    <UserProfileSection
                        key={sectionId}
                        sectionId={sectionId}
                        title={
                            sectionId.charAt(0).toUpperCase() +
                            sectionId.slice(1)
                        }
                        isOpen={dropdowns[sectionId]}
                        isEditMode={editModes[sectionId]}
                        formData={formData[sectionId]}
                        fields={fieldDefinitions[sectionId]}
                        onToggleDropdown={toggleDropdown}
                        onToggleEditMode={toggleEditMode}
                        onInputChange={handleInputChange}
                        /* showPassword={showPassword}
                        setShowPassword={setShowPassword} */
                    />
                ))}
            </div>
        </div>
    );
};

export default UserProfileInfo;
