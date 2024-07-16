import { darkTheme, lightTheme, ThemeType } from '@/components/paper-portfolio/data/theme';
import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';

interface ThemeContextData {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

const PaperThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const PaperThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const themeParent = useRef(null);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		if (themeParent.current) (themeParent.current as HTMLElement)?.setAttribute('data-paper-theme', theme);
	}, [theme])

	return (
		<PaperThemeContext.Provider value={{ theme, toggleTheme }}>
			<div ref={themeParent} data-paper-theme={theme}>
				{children}
			</div>
		</PaperThemeContext.Provider>
	);
};

export const usePaperTheme = (): ThemeContextData => {
	const context = useContext(PaperThemeContext);
	if (!context) {
		throw new Error('usePaperTheme must be used within a PaperThemeProvider');
	}
	return context;
};
