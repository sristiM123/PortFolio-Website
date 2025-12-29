/** @type {import('tailwindcss').Config} */
import generated from "@tailwindcss/typography";

module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: { xl: "1rem", "2xl": "1.25rem" },
        },
    },
    // optional plugin — remove if not installed
    plugins: [generated],
};
