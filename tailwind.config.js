/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1b1d23",
        "very-light-gray": "#eeeff4",
        "light-gray": "#c8ccd8",
        "medium-gray": "#7d828f",
        "dark-gray": "#60636d",
        red: "#df5656",
      },
      backgroundImage: {
        "home-mobile": "url('/home/mobile/image-hero-paramour.jpg')",
        "home-desktop": "url('/home/desktop/image-hero-paramour.jpg')",
        "small-mobile": "url('/home/mobile/image-small-team.jpg')",
        "small-desktop": "url('/home/desktop/image-small-team.jpg')",
      },
    },
  },
  plugins: [],
};
