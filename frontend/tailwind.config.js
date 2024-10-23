/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                colorSecondary: "#ffb128", // 自定义颜色
                colorPrimary: "#0B3954",
            },
        },
    },
    plugins: [],
};
