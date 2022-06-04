module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "1xs": "0.5rem",
      },
      colors: {
        gray: {
          50: "#F4F4F4",
          100: "#EEEEEE",
          200: "#DEDEDE",
          300: "#CECECE",
        },
        primary: {
          50: "#F4F4F4",
          100: "#fff059",
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
