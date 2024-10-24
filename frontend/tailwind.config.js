/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                colorSecondary: "#ffb128",
                colorPrimary: "#0B3954",
                colorTertiary: "#ee6352",
            },
        },
    },
    plugins: [],
};
