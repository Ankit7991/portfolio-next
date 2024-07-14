import type { Metadata } from "next";



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="relative w-full h-full" style={{
				minHeight: '600px',
				minWidth: '1100px'
			}}>
				{children}
			</div>
		</>
	);
}
