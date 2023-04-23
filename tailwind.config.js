/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(360,0%,98%)",
        foreground: "hsl(0,0%,2%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      gridTemplateColumns: {
        desktop: "250px 1fr",
      },
      gridTemplateRows: {
        custom: "50px 500px 1fr",
      },
    },
  },
  plugins: [],
};
