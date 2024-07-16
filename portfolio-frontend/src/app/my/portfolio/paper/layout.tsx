'use client'
import type { Metadata } from "next";
import style from './page.module.scss';
import { lightTheme } from "../../../../components/paper-portfolio/data/theme";
import { NwsHeader } from "@/components/paper-portfolio/component/sections/header";
import { PaperThemeProvider } from "@/context/paper/paper-theme-context";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div>
				<PaperThemeProvider>
					<NwsHeader />
					{children}
				</PaperThemeProvider>
			</div>
		</>
	);
}
