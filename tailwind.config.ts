import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
			xs: "450px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1800px",
		},
    extend: {
      fontFamily: {
        sans: ['var(--font-nexa)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				"boost-tan-1": "var(--boost-tan-1)",
				"boost-black-1": "var(--boost-black-1)",
        "boost-black-2": "var(--boost-black-2)",
        "banner-gradient": "var(--banner-gradient)",
        "homepage-gradient": "var(----homepage-gradient)",
        "homepage-gradient-sec": "var(--homepage-gradient-sec)",
        "homepage-gradient-third": "var(--homepage-gradient-third)",

			},
    },
  },
  plugins: [],
}
export default config
