/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				background: 'var(--color-background)',
				text: 'var(--color-text)',
			},
			fontSize: {
				largel: 'var(--text-l)',
				largexl: 'var(--text-xl)',
				largexxl: 'var(--text-xxl)',
			}
		},
	},
	plugins: [],
}

