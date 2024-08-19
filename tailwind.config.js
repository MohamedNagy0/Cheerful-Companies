/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
    container: {
      center: true,
      screens: {
        sm: "540px",

        md: "720px",

        lg: "960px",

        xl: "1140px",

        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color2": "var(--primary-color2)",
        "primary-color3": "var(--primary-color3)",
        "primary-color4": "var(--primary-color4)",
        "primary-bg-gray1": "var(--primary-bg-gray1)",
        "primary-bg-gray2": "var(--primary-bg-gray2)",
        "primary-bg-yellow": "var(--primary-bg-yellow)",
        "primary-bg-darkBlue": "var(--primary-bg-darkBlue)",
        "primary-bg-darkBlue2": "var(--primary-bg-darkBlue2)",
      },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(4deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 500ms linear infinite forwards",
      },
    },
  },
  plugins: [],
};
