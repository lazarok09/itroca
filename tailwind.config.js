import tailwindcssMotion from "tailwindcss-motion";

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
      lightGreen: "#00b90f",
      cleanBlue: "#6CBAE9",
      heavyBlue: "#68BAF2",
    },
    extend: {
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [tailwindcssMotion],
};
