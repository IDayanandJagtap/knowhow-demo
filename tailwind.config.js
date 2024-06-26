/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "auto-fit-300": "repeat(auto-fit, minmax(280px, 1fr))",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                    "&::-webkit-scrollbar": {
                        display: "none" /* Chrome, Safari, and Opera */,
                    },
                },
            });
        },
    ],
};
