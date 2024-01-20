/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        grid: "77.5rem",
        770: "48.125rem",
        1237: "77.313rem",
        360: "22.5rem",
      },
      minWidth: {
        770: "48.125rem",
        1237: "77.313rem",
        360: "22.5rem",
      },
      width: {
        400: "400px",
        300: "300px",
        195: "195px",
      },

      backgroundColor: {
        primary: "#9274e3",
        secondary: "#c481fd",
        tertiary: "#8c8cfb",
      },
    },
  },
  plugins: [],
};
