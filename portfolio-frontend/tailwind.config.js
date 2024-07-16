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
				textdim: 'var(--color-text-dim)'
			},
			fontSize: {
				largel: 'var(--text-large-l)',
				largexl: 'var(--text-large-xl)',
				largexxl: 'var(--text-large-xxl)',
				smalll: 'var(--text-small-l)',
				smallxl: 'var(--text-small-xl)',
				smallxxl: 'var(--text-small-xxl)',
				microl: 'var(--text-micro-l)',
				microxl: 'var(--text-micro-xl)',
				microxxl: 'var(--text-micro-xxl)',
			}
		},
	},
	plugins: [],
}

