/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "off-white": "#f0f9f8", // light minty off-white
        "neon-magenta": "#ff5fa2", // neon-magenta
        "text-default": "#383838",
        "text-subtitle": "#8a8a8a",
        "mint-green": "#6FC5C2", // mint green
        apricot: "#fccfa6",
        "blue-nine": "#016CBA",
      },
    },
  },
  plugins: [],
};
