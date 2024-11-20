module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(74, 108, 247)",
        customBlack: "rgb(9, 14, 52)",
      },
      spacing: {
        145: "145px",
        120: "120px",
      },
      boxShadow: {
        "inset-bottom": "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        999: "999",
      },
      rotate: {
        45: "45deg",
      },
      skew: {
        '12': '12deg',
      },
    },
  },
  plugins: [],
};
