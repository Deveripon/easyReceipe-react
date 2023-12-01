/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xxs: "400px",
            },
            fontFamily: {
                subHeadingFont: ["Cormorant Garamond", "serif"],
                paragraphFont: ["Karma", "serif"],
                headingFont: ["Pridi", "serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#eb2f06",
                    light: "#f84e1d",
                    dark: "#c52a04",
                },
                secondary: {
                    DEFAULT: "#e55039",
                    light: "rgba(229, 80, 57,0.5)",
                    dark: "rgba(229, 80, 57,1.5)",
                },
                textColor: {
                    DEFAULT: "rgba(34, 47, 62,1.0)",
                    light: "rgba(0, 0, 0,0.5)",
                    dark: "rgba(0, 0, 0,1.5)",
                },
                gradientColor: {
                    DEFAULT: "rgba(243, 104, 224,1.0)",
                    light: "rgba(243, 104, 224,0.5)",
                    dark: "rgba(243, 104, 224,1.5)",
                },
            },
        },
    },
    plugins: [],
};
