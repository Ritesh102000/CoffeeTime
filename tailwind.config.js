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
		  float: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-6px)' },
		  },
		  slideUp: {
			'0%': { opacity: 0, transform: 'translateY(40px)' },
			'100%': { opacity: 1, transform: 'translateY(0)' },
		  },
		  slideRight: {
			'0%': { opacity: 0, transform: 'translateX(-40px)' },
			'100%': { opacity: 1, transform: 'translateX(0)' },
		  },
		  slideLeft: {
			'0%': { opacity: 0, transform: 'translateX(40px)' },
			'100%': { opacity: 1, transform: 'translateX(0)' },
		  },
		  slideDown: {
			'0%': { opacity: 0, transform: 'translateY(-40px)' },
			'100%': { opacity: 1, transform: 'translateY(0)' },
		  },
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		},
		animation: {
		  float: 'float 6s ease-in-out infinite',
		  fadeIn: 'fadeIn 1.2s ease-in forwards',
		  slideUp: 'slideUp 0.8s ease-out forwards',
		  slideRight: 'slideRight 0.8s ease-out forwards',
		  slideLeft: 'slideLeft 0.8s ease-out forwards',
		  slideDown: 'slideDown 0.8s ease-out forwards',
		},
	  },
	},
	plugins: [],
  };
  
