/** @type {import('tailwindcss').Config} */
import { Colors } from "./src/data/types/enums/color.enum";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: Colors.FOREST, //font-color : white, cream
        sand: Colors.SAND, //font-color : forest, copper
        copper: Colors.COPPER, //font-color : cream
        sage: Colors.SAGE, //font-color : forest, copper
        cream: Colors.CREAM, //font-color : forest, copper
      },
    },
  },
  plugins: [],
};
