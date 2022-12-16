/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      smallmobile: "100px",
      // => @media (min-width: 400px) { ... }

      mobile: "400px",
      // => @media (min-width: 400px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      //for products page
      Psmallmobile: "120px",
      // => @media (min-width: 400px) { ... }

      Pmobile: "480px",
      // => @media (min-width: 400px) { ... }

      Ptablet: "768px",
      // => @media (min-width: 640px) { ... }

      Plaptop: "1168px",
      // => @media (min-width: 1024px) { ... }

      Pdesktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
