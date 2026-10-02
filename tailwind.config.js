import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
