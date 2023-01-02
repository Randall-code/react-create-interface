/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", ".public/index.html"] ,
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
