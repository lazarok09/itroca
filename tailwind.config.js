import tailwindcssMotion from "tailwindcss-motion";
import { theme } from "./src/styles/theme.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...theme.colors,
    },
    extend: {
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [tailwindcssMotion],
};
