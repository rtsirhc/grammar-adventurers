/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adventure-blue': '#4facfe',
        'adventure-green': '#00f260',
        'adventure-yellow': '#f093fb',
        'adventure-red': '#ff5858',
      },
      fontFamily: {
        'comic': ['"Comic Neue"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
