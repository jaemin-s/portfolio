import type { Config } from 'tailwindcss'
import { Colors } from './app/domain/enums/Color.enum'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        forest: Colors.FOREST, //font-color : white, cream
        sand: Colors.SAND, //font-color : forest, copper
        copper: Colors.COPPER, //font-color : cream
        sage: Colors.SAGE, //font-color : forest, copper
        cream: Colors.CREAM, //font-color : forest, copper
        black: Colors.BLACK,
      },
    },
  },
  plugins: [],
} satisfies Config
