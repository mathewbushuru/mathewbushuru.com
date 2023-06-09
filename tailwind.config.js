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
        background: {
          DEFAULT: "hsl(360,0%,97%)",
          popover: "hsl(360,0%,100%)",
          blur: "hsl(360,0%,94%)",
        },
        foreground: "hsl(0,0%,7%)",
        muted: "hsl(0,0%,40%)",
        accent: "hsl(0,0%,87%)",
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
  plugins: [require("tailwindcss-animate")],
};
