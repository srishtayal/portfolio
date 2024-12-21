module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Tan Pearl', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      width: {
        '128': '44rem',
      },
    },
  },
  plugins: [],
}
