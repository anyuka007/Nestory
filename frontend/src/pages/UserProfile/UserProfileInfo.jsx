import { useContext, useEffect, useReducer, useState } from "react";
import UserProfileSection from "./UserProfileSection";
import { AppContext } from "../../context/AppProvider";
import { getUserAddress } from "../../utils/addressUtils/getUserAddress";

const UserProfileInfo = () => {
    const { user } = useContext(AppContext);
    console.log("user._id", user._id);

    const defaultFormData = {
        personalData: {
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
            valid: true,
            errors: {},
        },
        accessData: {
            email: user.email ?? "",
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

    const reducer = (prevState, action) => {
        switch (action.type) {
            case "cancelPasswordChange":
                return {
                    ...prevState,
                    [action.sectionId]: {
                        ...defaultFormData[action.sectionId],
                        valid: true,
                        errors: {},
                    },
                };

            case "submit_accessData":
                if (
                    action.formData.password !== action.formData.confirmPassword
                ) {
                    return {
                        ...prevState,
                        [action.sectionId]: {
                            ...action.formData,
                            valid: false,
                            errors: {
                                ...prevState.errors,
                                confirmPassword:
                                    "Passwords do not match. Please try again",
                            },
                        },
                    };
                }
                if (
                    prevState.accessData.password === "" &&
                    prevState.accessData.password === action.formData.password
                ) {
                    return {
                        ...prevState,
                        [action.sectionId]: {
                            ...action.formData,
                            valid: false,
                            errors: {
                                ...prevState.errors,
                                confirmPassword: "EMPTY Password! AAAAAA",
                            },
                        },
                    };
                }
                return {
                    ...prevState,
                    [action.sectionId]: {
                        ...action.formData,
                        valid: true,
                        errors: {},
                    },
                };
            case "setUserInfo":
                return {
                    ...action.userInfo,
                };
            case "setUserAddress":
                return {
                    ...prevState,
                    address: {
                        ...action.address,
                        valid: true,
                        errors: {},
                    },
                };

            default:
                //   fetch patch usercollection => formDate. NB Password hash!
                return {
                    ...prevState,
                    [action.sectionId]: {
                        ...action.formData,
                        valid: true,
                        errors: {},
                    },
                };
        }
    };
    const [formData, dispatchSectionForm] = useReducer(
        reducer,
        defaultFormData
    );

    useEffect(() => {
        const fetchAddress = async () => {
            if (user._id) {
                const address = await getUserAddress(user._id);
                console.log("Fetched address:", address);
                dispatchSectionForm({
                    type: "setUserAddress",
                    address: address,
                });
                return;
            } else {
                return null;
            }
        };
        if (user._id) {
            fetchAddress(user._id);

            dispatchSectionForm({
                type: "setUserInfo",
                userInfo: defaultFormData,
            });
        }
    }, [user._id]);

    const fieldDefinitions = {
        personalData: [
            { name: "firstName", label: "First name" },
            { name: "lastName", label: "Last name" },
            /* { name: "email", label: "Email", type: "email" }, */
        ],
        accessData: [
            { name: "email", label: "Email", type: "email" },
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
