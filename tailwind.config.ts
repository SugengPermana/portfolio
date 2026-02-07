// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
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
