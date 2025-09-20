/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'battle-illustration' : "url('./src/assets/bg-illus.svg')"

      },
      fontFamily: {
        retro: ["'Press Start 2P'", "cursive"], // replaces default sans
        fancy: ["'Montserrat'", "serif"], // custom name
      },
    },
  },
  plugins: [],
}

