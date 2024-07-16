import { usePaperTheme } from "@/context/paper/paper-theme-context"

export const NwsHeader = () => {
	const {toggleTheme} = usePaperTheme();
	return <>
		<div>
			<h3 className="text-xl text-text bg-background">Hi there</h3>
			<button className="bg-secondary p-2" onClick={toggleTheme}>Toggle Theme</button>
		</div>
	</>
}