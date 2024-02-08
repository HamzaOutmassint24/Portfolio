/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            xs: "3px",
            sm: "13px",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.600rem",
        },
        fontFamily: {
            "second-font": ["Public Sans", "sans-serif"],
        },
        letterSpacing: {
            normal: "1.5px",
            wide: "6.5px",
        },
        width: {
            30: "10.6rem",
            28: "10.4rem",
        },
        colors: {
            "main-color": "#28E98C",
            "second-color": "#575757",
            "therd-color": "#404042",
            "fourth-color": "#7f7272",
            "fifth-color" :'#999999'
        },
        borderWidth: {
            1: "1px",
            2: "2px",
            3: "3px",
        },
        container: {
            padding: "5rem",
        },
        extend: {
            right:{
                "14.4rem" : "14.4rem",
            },
        },
    },
    plugins: [],
};
