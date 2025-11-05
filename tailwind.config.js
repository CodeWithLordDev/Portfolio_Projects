// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 6s infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],

};
