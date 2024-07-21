import { usePaperTheme } from "@/context/paper/paper-theme-context"
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";


export const NwsHeader = () => {
	const {theme, toggleTheme} = usePaperTheme();
	return <>
		<div className="flex justify-center items-center p-5">
			<div className="flex items-baseline">
				<h3 className="text-np_text text-np_largexl md:text-np_largexxl">D</h3>
				<h3 className="text-np_text text-np_largel md:text-np_largexl">EV </h3>
				<h3 className="text-np_text text-np_largexl md:text-np_largexxl">T</h3>
				<h3 className="text-np_text text-np_largel md:text-np_largexl">IMES</h3>
			</div>
			<button className="bg-np_secondary p-2 rounded-xl w-10 h-10 center" onClick={toggleTheme}>{theme === 'light' ? <MdLightMode /> : <MdOutlineLightMode />}</button>
		</div>
	</>
}