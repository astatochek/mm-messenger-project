/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "american-purple": "#4A154B",
        "dark-purple": "#2D0B2E",
        "spanish-viridian": "#007A5A",
        "raisin-black": "#262626",
        "charleston-green": "#2B2B2B",
        "onyx": "#383838",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-80": "rgba(255, 255, 255, 0.8)"
      },
      fontFamily: {
        "jetbrains-mono": ['"JetBrains Mono", sans-serif']
      },
      spacing: {
        "navbar-size": "3rem",
        "form-len": "20rem",
        "scroll": "0.5rem",
        "left-nav-menu": "24.5rem",
        "left-chat-menu": "24rem"
      }
    },
  },
  plugins: [],
}

