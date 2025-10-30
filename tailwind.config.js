/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "text-blue-500",
    "text-yellow-400",
    "text-blue-400",
    "text-cyan-400",
    "text-green-500",
    "text-gray-300",
    "text-green-600",
    "text-blue-600",
    "text-orange-400",
    "text-red-500",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
