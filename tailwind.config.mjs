/** @type {import('tailwindcss').Config} */
export default {
  /* The list of files Tailwind will go look at in search of tailwind css classes */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
};
