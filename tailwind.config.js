module.exports = {
    darkMode: "class", // Habilita o dark mode via classe
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#f0fdf6", // Cor de fundo do modo claro
            100: "#dcfceb",
            200: "#baf6d6",
            300: "#89ecb9",
            400: "#50d992",
            500: "#29bf73",
            600: "#19a05b",
            700: "#167f4a",
            800: "#16653d",
            900: "#145334",
            950: "#062d1b", // Cor de fundo do modo escuro
          },
        },
      },
    },
    plugins: [],
  }
  