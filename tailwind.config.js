import typography from "@tailwindcss/typography"; // Import the 'typography' plugin

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
