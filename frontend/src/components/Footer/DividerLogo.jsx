import React from "react";

export default function DividerLogo() {
    return (
        <div className=" mx-[10%]">
            <div className="flex items-center justify-center my-8">
                <div className="flex-grow border-t border-gray-300" ></div>

                <div className="mx-4 text-center">
                    {/* Dein zentrales Symbol oder Bild */}
                    <img
                        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-footer-logo.svg"
                        alt="Logo"
                        className="h-42 w-42 rounded-full"
                    />
                </div>

                <div className="flex-grow border-t border-gray-300"></div>
            </div>
        </div>
    );
}
