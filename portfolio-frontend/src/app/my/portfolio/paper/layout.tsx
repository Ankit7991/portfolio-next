'use client'
import { PaperThemeProvider } from "@/context/paper/paper-theme-context";
import { NwsHeader } from "./header";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<PaperThemeProvider>
				<div className="bg-np_background h-screen w-full overflow-auto pl-10 pr-10 pb-20">
					<NwsHeader />
					{children}
				</div>
			</PaperThemeProvider>
		</>
	);
}
