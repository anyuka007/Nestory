import React from "react";
import { ChevronDown } from "lucide-react";

const UserProfileSection = ({
    sectionId,
    title,
    isOpen,
    isEditMode,
    onToggleDropdown,
    onToggleEditMode,
}) => {
    return (
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
            <div className={`${isOpen ? "" : "hidden"} text-red-500 w-24 h-24`}>
                {!isEditMode ? (
                    <div>
                        Info
                        <button onClick={() => onToggleEditMode(sectionId)}>
                            Edit
                        </button>
                    </div>
                ) : (
                    <div>
                        Form
                        <button onClick={() => onToggleEditMode(sectionId)}>
                            Save
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfileSection;
