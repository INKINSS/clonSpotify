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
        grayBold:'rgb(18,18,18)',
        greenLight:'rgb(27,197,88)',
        customWhite:'rgb(255,255,255)',
        grayLight:'rgb(51,51,51)'
      }
  	}
  },
  plugins: [import("tailwindcss-animate")],
}