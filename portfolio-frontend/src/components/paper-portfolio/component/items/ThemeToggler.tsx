// ThemeToggler.tsx
import { usePaperTheme } from '@/context/paper/paper-theme-context';
import React from 'react';

const ThemeToggler = () => {
	const { theme, toggleTheme } = usePaperTheme();

	return (
		<div >
			<button onClick={toggleTheme} className='border rounded-4 color'>Toggle Theme</button>
		</div>
	);
};

export default ThemeToggler;
