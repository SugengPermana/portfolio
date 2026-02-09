// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "poppins"],
        chakra: ["var(--font-chakra-petch)", "chakra-petch"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000000",
          "primary-content": "#ffffff",
        },
        dark: {
          primary: "#ffffff",
          "primary-content": "#000000",
        },
      },
    ],
  },
};
