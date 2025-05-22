/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    900: "#202225",
                    800: "#2f3136",
                    700: "#36393f",
                    600: "#4f545c",
                    400: "#d4d7dc",
                    300: "#e3e5e8",
                    200: "#ebedef",
                    100: "#f2f3f5",
                },

                primary: "#0a3d62",
                secondary: "#60a3bc",
                background: "#fafafa",
            },
            spacing: {
                88: "22rem",
            },
            fontFamily: {
                inter: ["inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
