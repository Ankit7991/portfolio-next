// ThemeToggler.tsx
import { usePaperTheme } from '@/context/paper/paper-theme-context';
import React from 'react';

const ThemeToggler = () => {
	const { theme, toggleTheme } = usePaperTheme();

	return (
		<div >
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggler;
