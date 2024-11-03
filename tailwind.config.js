/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        blueSecondary: '#90bff5',
        secondary: '#81C784',
        accent: '#B39DDB',
        success: '#388E3C',
        background: '#F5F5F5',
        textPrimary: '#212121',
        textSecondary: '#757575',
      },
    },
  },
  plugins: [],
}
