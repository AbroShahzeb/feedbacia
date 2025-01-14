/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AD1FEA",
        secondary: "#4661E6",
        grey: {
          0: "#fff",
          50: "#F7F8FD",
          100: "#F2F4FF",
          300: "#647196",
          400: "#3A4374",
          500: "#373F68",
        },
        accent: {
          peach: "#F49F85",
          cyan: "#62BCFA",
        },
      },
      fontFamily: {
        jost: "Jost",
      },
    },
    fontSize: {
      xs: ["13px", { lineHeight: "19px" }],
      sm: ["15px", { lineHeight: "22px" }],
      md: ["16px", { lineHeight: "23px" }],
      lg: ["14px", { lineHeight: "20px", letterSpacing: "-0.2px" }],
      xl: ["18px", { lineHeight: "26px", letterSpacing: "-0.25px" }],
      "2xl": ["20px", { lineHeight: "29px", letterSpacing: "-0.25px" }],
      "3xl": ["24px", { lineHeight: "35px", letterSpacing: "-0.33px" }],
    },
  },
  plugins: [],
};
