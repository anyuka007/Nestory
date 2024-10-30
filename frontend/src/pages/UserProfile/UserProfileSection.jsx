import React from "react";
import { ChevronDown } from "lucide-react";
import Form from "./Form";

const UserProfileSection = ({
    sectionId,
    title,
    isOpen,
    isEditMode,
    formData,
    fields,
    onToggleDropdown,
    onToggleEditMode,
    onInputChange,
}) => (
    <div>
        <div className="flex justify-between">
            <p>{title}</p>
            <div className="flex gap-2">
                <p>Show details</p>
                <button onClick={() => onToggleDropdown(sectionId)}>
                    <ChevronDown />
                </button>
            </div>
        </div>
        <div className={`${isOpen ? "" : "hidden"} text-red-500 w-full`}>
            {!isEditMode ? (
                <div>
                    {Object.entries(formData).map(([key, value]) => (
                        <p key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                            {key === "password" ? "*".repeat(16) : value || " "}
                        </p>
                    ))}
                    <button onClick={() => onToggleEditMode(sectionId)}>
                        Edit
                    </button>
                </div>
            ) : (
                <div>
                    <Form
                        sectionId={sectionId}
                        fields={fields}
                        formData={formData}
                        onInputChange={onInputChange}
                    />
                    <button onClick={() => onToggleEditMode(sectionId)}>
                        Save
                    </button>
                </div>
            )}
        </div>
    </div>
);

export default UserProfileSection;
