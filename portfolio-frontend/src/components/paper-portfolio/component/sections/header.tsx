import { usePaperTheme } from "@/context/paper/paper-theme-context"
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";


export const NwsHeader = () => {
	const {theme, toggleTheme} = usePaperTheme();
	return <>
		<div className="flex justify-center items-center p-5">
			<div className="flex items-baseline">
				<h3 className="text-text bg-background text-largexl md:text-largexxl">D</h3>
				<h3 className="text-text bg-background text-largel md:text-largexl">EV </h3>
				<h3 className="text-text bg-background text-largexl md:text-largexxl">T</h3>
				<h3 className="text-text bg-background text-largel md:text-largexl">IMES</h3>
			</div>
			<button className="bg-secondary p-2 rounded-xl w-10 h-10 center" onClick={toggleTheme}>{theme === 'light' ? <MdLightMode /> : <MdOutlineLightMode />}</button>
		</div>
	</>
}