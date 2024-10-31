import React, { useReducer } from "react";
import UserProfileSection from "./UserProfileSection";

const defaultFormData = {
    personalData: {
        firstName: "",
        lastName: "",
        email: "",
        valid: true,
        errors: {},
    },
    accessData: {
        username: "",
        password: "",
        confirmPassword: "",
        valid: true,
        errors: {},
    },
    address: {
        street: "",
        house: "",
        city: "",
        zip: "",
        country: "",
        valid: true,
        errors: {},
    },
};

const reducer = (formData, action) => {
    switch (action.type) {
        case "cancelPasswordChange":
            /* formData.accessData.password = "";
            formData.valid = true;
            formData.errors = {};
            break; */
            return {
                ...formData,
                [action.sectionId]: {
                    ...defaultFormData.sectionId,
                    valid: true,
                    errors: {},
                },
            };

        case "submit_accessData":
            if (action.formData.password !== action.formData.confirmPassword) {
                //alert("ALERT Passwords sollen gleich sein!!!");
                return {
                    ...formData,
                    [action.sectionId]: {
                        ...action.formData,
                        valid: false,
                        errors: {
                            ...formData.errors,
                            confirmPassword:
                                "Passwords do not match. Please try again",
                        },
                    },
                };
            }
            if (
                formData.accessData.password === "" &&
                formData.accessData.password === action.formData.password
            ) {
                return {
                    ...formData,
                    [action.sectionId]: {
                        ...action.formData,
                        valid: false,
                        errors: {
                            ...formData.errors,
                            confirmPassword: "EMPTY Password! AAAAAA",
                        },
                    },
                };
            }
        default:
            //   fetch patch usercollection => formDate. NB Password hash!
            return {
                ...formData,
                [action.sectionId]: {
                    ...action.formData,
                    valid: true,
                    errors: {},
                },
            };
    }
};

const UserProfileInfo = () => {
    const [formData, dispatchSectionForm] = useReducer(
        reducer,
        defaultFormData
    );

    const fieldDefinitions = {
        personalData: [
            { name: "firstName", label: "First name" },
            { name: "lastName", label: "Last name" },
            { name: "email", label: "Email", type: "email" },
        ],
        accessData: [
            /* { name: "username", label: "Username" }, */
            { name: "password", label: "Password", type: "password" },
            {
                name: "confirmPassword",
                label: "Confirm password",
                type: "password",
            },
        ],
        address: [
            { name: "street", label: "Street" },
            { name: "house", label: "House" },
            { name: "city", label: "City" },
            { name: "zip", label: "Zip Code" },
            { name: "country", label: "Country" },
        ],
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-center text-[3rem] md:text-[4rem] mb-[1rem]">
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
                        formData={formData[sectionId]}
                        fields={fieldDefinitions[sectionId]}
                        dispatchSectionForm={dispatchSectionForm}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserProfileInfo;
