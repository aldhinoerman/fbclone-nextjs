module.exports = {
  node: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  plugins: [require("tailwind-scrollbar-hide")],
}
