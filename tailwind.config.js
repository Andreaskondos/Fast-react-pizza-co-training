/*eslint-disable*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  //HERE IN <THEME> WE OVERWRITE EVERYTHING IN EACH CATEGORY WE CHOOSE!!
  theme: {
    fontFamily: {
      sans: "Roboto mono, monospace",
    },
    //HERE IN <EXTEND> WE JUST ADD MORE OPTIONS OR WE ONLY OVERWRITE THE MATCHING ONES
    extend: {
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
