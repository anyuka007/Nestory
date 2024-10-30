import React, { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";

const Form = ({ sectionId, fields, formData, onInputChange }) => {
    const [showPassword, setShowPassword] = useState({});

    const toggleShowPassword = (fieldName) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [fieldName]: !prevState[fieldName],
        }));
    };

    return (
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
                        value={formData[field.name]}
                        onChange={(e) =>
                            onInputChange(sectionId, field.name, e.target.value)
                        }
                    />

                    {(field.name === "password" ||
                        field.name === "confirmPassword") && (
                        <button
                            type="button"
                            onClick={() => toggleShowPassword(field.name)}
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
        </div>
    );
};

export default Form;
