/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
		extend: {
			colors: {
				primary: '#007247',
				secondary: '#C1D9B0',
				contrast: '#ff7c2b',
				tertiary: '#ffd3b4',
			}
		}
	},
};
