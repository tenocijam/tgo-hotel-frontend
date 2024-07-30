const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(), "node_modules/flowbite-react/lib/esm/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Playfair Display"'],
				sans: ["Lato"],
			},
			colors: {
				"primary": "#00BD9D",
				"primary-hover": "#25DABB",
				"gray": "F8F9F9",
				"cardbg": "#E9EBEC",
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
		},
	},
	plugins: [
		flowbite.plugin(),
		require('flowbite/plugin'),
	],
};
