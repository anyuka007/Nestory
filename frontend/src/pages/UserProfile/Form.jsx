import React, { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../components/Button/Button";

const Form = ({ sectionId, fields, formData, dispatchSectionForm }) => {
    const [showPassword, setShowPassword] = useState({});
    const [sectionFormData, setSectionFormData] = useState(formData);
    const [editMode, setEditMode] = useState(false);

    const toggleShowPassword = (fieldName) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [fieldName]: !prevState[fieldName],
        }));
    };

    const handleInputChange = (field, value) => {
        setSectionFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <>
            {!editMode && formData.valid ? (
                <div className="flex flex-col gap-2 py-4">
                    {Object.entries(formData)
                        .filter(
                            ([field, _]) =>
                                field !== "valid" && field !== "errors"
                        )
                        .every(([_, value]) => !value) ? (
                        <p className="text-pageBannerBGC  pl-6">No data</p>
                    ) : (
                        Object.entries(formData)
                            .filter(
                                ([field, _]) =>
                                    field !== "valid" && field !== "errors"
                            )
                            .map(([key, value]) => (
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
                        onClickHandler={() => setEditMode((prev) => !prev)}
                    />
                </div>
            ) : (
                <div>
                    {fields.map((field) => (
                        <div key={field.name} className="mb-4">
                            <Input
                                label={field.label}
                                type={
                                    field.name === "password" ||
                                    field.name === "confirmPassword"
                                        ? showPassword[field.name]
                                            ? "text"
                                            : "password"
                                        : field.type || "text"
                                }
                                value={sectionFormData[field.name]}
                                onChange={(e) =>
                                    handleInputChange(
                                        field.name,
                                        e.target.value
                                    )
                                }
                                /* name={field.name} */
                            />

                            {(field.name === "password" ||
                                field.name === "confirmPassword") && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleShowPassword(field.name)
                                    }
                                    className="text-m mt-1"
                                >
                                    {showPassword[field.name] ? (
                                        <div className="flex gap-2">
                                            <EyeOff size={20} />
                                            <p>Hide Password</p>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Eye size={20} />
                                            <p>Show Password</p>
                                        </div>
                                    )}
                                </button>
                            )}
                        </div>
                    ))}
                    <div className="flex gap-5">
                        <Button
                            text="Cancel"
                            width="100px"
                            height="3rem"
                            onClickHandler={() => {
                                setEditMode((prev) => !prev);
                                dispatchSectionForm({
                                    type: "cancelPasswordChange",
                                    sectionId,
                                });
                            }}
                        />
                        <Button
                            text="Save"
                            width="100px"
                            height="3rem"
                            onClickHandler={() => {
                                setEditMode((prev) => !prev);
                                dispatchSectionForm({
                                    type: "submit_" + sectionId,
                                    sectionId,
                                    formData: sectionFormData,
                                });
                            }}
                            Save
                        />
                        {!formData.valid && formData.errors.confirmPassword && (
                            <p className="text-colorTertiary flex items-center">
                                {formData.errors.confirmPassword}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Form;
