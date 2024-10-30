import React from "react";

const Input = ({ label, type = "text", value, onChange }) => (
    <div className="mb-2">
        <label className="block mb-1 text-pageBannerBGC">{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="border p-2 w-full"
        />
    </div>
);

export default Input;
