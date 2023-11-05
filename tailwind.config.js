/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('https://i.ibb.co/5v0FXq6/wood.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

