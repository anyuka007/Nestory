import React from "react";
import { ChevronDown } from "lucide-react";
import Form from "./Form";
import Button from "../../components/Button/Button";

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
        <div
            className={`flex justify-between bg-[#F6F6F6] my-4 p-6 ${
                isOpen ? "border-b-2" : ""
            }`}
        >
            <p>{title}</p>
            <div className="flex gap-2">
                <p>Show details</p>
                <button onClick={() => onToggleDropdown(sectionId)}>
                    <ChevronDown />
                </button>
            </div>
        </div>
        <div className={`${isOpen ? "" : "hidden"}`}>
            {!isEditMode ? (
                <div className="flex flex-col gap-2 py-4">
                    {Object.values(formData).every((value) => !value) ? (
                        <p className="text-pageBannerBGC  pl-6">No data</p>
                    ) : (
                        Object.entries(formData).map(([key, value]) => (
                            <div key={key}>
                                <p className=" pl-6">
                                    {key === "password" ||
                                    key === "confirmPassword"
                                        ? ""
                                        : value}
                                </p>
                            </div>
                        ))
                    )}
                    <Button
                        text="Edit"
                        width="100px"
                        height="3rem"
                        onClickHandler={() => onToggleEditMode(sectionId)}
                    />
                </div>
            ) : (
                <div>
                    <Form
                        sectionId={sectionId}
                        fields={fields}
                        formData={formData}
                        onInputChange={onInputChange}
                    />
                    <Button
                        text="Save"
                        width="100px"
                        height="3rem"
                        onClickHandler={() => onToggleEditMode(sectionId)}
                        Save
                    />
                </div>
            )}
        </div>
    </div>
);

export default UserProfileSection;
