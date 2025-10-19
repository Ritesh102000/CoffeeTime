// tailwind.config.js
module.exports = {
	// existing content
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  fontFamily: {
		Source: ['"Source Serif 4"', "serif"],
		Bebas: ['"Bebas Neue"', "sans-serif"],
	  },
	  extend: {
		colors: {
		  primary: "#C67C4E",
		  secondary: "#4B2E2B",
		  fill: "#F8F3ED",
		  text: "#2F1D14",
		  backgrounds: "#F2E6DA",
		  border: "#E0D2C4",
		  icons: "#D9C7B8",
		  inputBorder: "#D9C8B6",
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		  fadeOut: {
			'0%': { opacity: 1 },
			'100%': { opacity: 0 },
		  },
		},
		animation: {
		  fadeIn: 'fadeIn 1.5s ease-in-out forwards',
		  fadeOut: 'fadeOut 1.5s ease-in-out forwards',
		},
	  },
	},
	plugins: [],
  };
  
