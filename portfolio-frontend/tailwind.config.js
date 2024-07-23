/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				np_primary: 'var(--color-primary)',
				np_secondary: 'var(--color-secondary)',
				np_accent: 'var(--color-accent)',
				np_background: 'var(--color-background)',
				np_text: 'var(--color-text)',
				np_textdim: 'var(--color-text-dim)'
			},
			fontSize: {
				np_largel: 'var(--text-large-l)',
				np_largexl: 'var(--text-large-xl)',
				np_largexxl: 'var(--text-large-xxl)',
				np_smalll: 'var(--text-small-l)',
				np_smallxl: 'var(--text-small-xl)',
				np_smallxxl: 'var(--text-small-xxl)',
				np_microl: 'var(--text-micro-l)',
				np_microxl: 'var(--text-micro-xl)',
				np_microxxl: 'var(--text-micro-xxl)',
				np_nanol: 'var(--text-nano-l)',
				np_nanoxl: 'var(--text-nano-xl)',
				np_nanoxxl: 'var(--text-nano-xxl)',
			}
		},
	},
	plugins: [],
}

