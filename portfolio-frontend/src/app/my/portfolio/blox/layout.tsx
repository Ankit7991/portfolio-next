import type { Metadata } from "next";
import style from './page.module.scss';



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className={`relative w-full h-full ${style['blox-parent']}`} style={{
				minHeight: '600px',
				minWidth: '1100px',
			}}>
				{children}
			</div>
		</>
	);
}
