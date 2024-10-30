import React, { useState } from "react";
import Input from "./Input";

const Form = ({ sectionId, fields, formData, onInputChange }) => {
    // Lokaler Zustand für die Passwortsichtbarkeit
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    <Input
                        label={field.label}
                        type={
                            field.name === "password"
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : field.type || "text"
                        }
                        value={formData[field.name]}
                        onChange={(e) =>
                            onInputChange(sectionId, field.name, e.target.value)
                        }
                    />

                    {/* Umschalt-Button für Passwortsichtbarkeit */}
                    {field.name === "password" && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-sm text-blue-500 mt-1"
                        >
                            {showPassword ? "Hide Password" : "Show Password"}
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Form;
