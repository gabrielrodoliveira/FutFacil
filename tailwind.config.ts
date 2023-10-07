import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)',
      },
      colors: {
        primary: '#006400',
        secondary: '#00FF7F',
        primaryLighter:'#90EE90',
        grayPrimary: '#717171',
        grayLighter: "#BBBFBF",
        walterWhite: "#F5F5F5",
        primaryDarker: "#003300",
      },
      textColor:{
        dark: '#717171',
      },
    },
  },
  plugins: [],
}
export default config
