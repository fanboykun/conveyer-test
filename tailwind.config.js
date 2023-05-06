/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        alex: ["alex", 'cursive'],
      },
      colors: {
        "lilac": {
          50: "#F9F5F9",
          100: "#F4ECF4",
          200: "#E8D9E8",
          300: "#DFC9DF",
          400: "#D3B5D3",
          500: "#C8A2C8",
          600: "#AE75AE",
          700: "#8A518A",
          800: "#5A355A",
          900: "#2D1B2D",
          950: "#160D16"
        }
      },
    },
  },
  plugins: [],
}

