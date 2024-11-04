
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        "backgroundGray": 'rgb(18,18,18)',
        "grayLight": 'rgb(162,162,162)',
        "hoverGrayCard": 'rgb(31,31,31)',
        "greenCustom": 'rgb(0,208,85)'
      }
  	}
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
}