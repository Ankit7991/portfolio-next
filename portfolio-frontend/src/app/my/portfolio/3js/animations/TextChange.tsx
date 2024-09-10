import React, { useEffect, useState } from 'react';


interface TextChangeProps {
	words: string[];
	type?: 'magic-rush' | 'dumb' | 'okay',
	delay?: boolean;
	auto?: boolean
}
export default function TextChange({ words, type = 'magic-rush', delay, auto }: TextChangeProps) {
	const [active, setActive] = useState(0);
	const [active_flag, setActiveFlag] = useState(false);
	let lg = 0;
	for(let i = 0; i < words.length; i++) {
		lg = Math.max(lg, words[i].length)
	}
	function toggleActive() {
		setActive(val => (val + 1) % words.length);
		setActiveFlag(val => !val);
	}
	useEffect(() => {
		let interval: null | NodeJS.Timeout = null

		if (auto) {
			interval = setInterval(() => {
				toggleActive()
			}, 3000)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [])
	return (
		<>	
			<div className='flex flex-wrap transition-all duration-1000 font-mono'>
			{
				Array(lg).fill('').map((lg_el, i: number) => {
					let [a, b] = [words[active], words[(active + 1) % words.length]];
					if (!active_flag) {
						[b, a] = [a, b]
					}
					
					return <>
						<AnimateText {...{ active: active_flag, setActive: toggleActive, text1: a[i], text2: b[i], type, delay: i * 50}}/>
					</>
				})
			}
		</div>
		</>
	);
}


interface AnimateTextProps extends Omit<TextChangeProps, 'delay' | 'words'> {
	text1: string;
	text2: string;
	active: boolean;
	delay: number;
	setActive: (params: boolean) => void;
}

const AnimateText: React.FC<AnimateTextProps> = ({ text1, text2, active, setActive, type, delay }) => {
	const delay_style = {transitionDelay: `${delay || 0}ms`}
	return (
		<>
			<div className={`relative text-6xl h-[1em] uppercase w-10 overflow-hidden delay-1000`} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
				{
					type === 'magic-rush' && <>
						<div style={delay_style} className={` absolute flex items-center overflow-hidden ${!active ? '-translate-y-0' : '-translate-y-full'}`}>
							<p className='relative'>{text1}</p>
						</div>
						<div style={delay_style} className={` absolute flex items-center overflow-hidden ${active ? '-translate-y-0' : '-translate-y-full'}`}>
							<p className='relative'>{text2}</p>
						</div>
					</>
				}
				{
					type === 'okay' && <>
						<div style={delay_style} className={` absolute flex items-center justify-center overflow-hidden ${!active ? '-translate-y-0' : '-translate-y-full'}`}>
							<p className='relative'>{text1}</p>
						</div>
						<div style={delay_style} className={` absolute flex items-center justify-center overflow-hidden ${active ? 'translate-y-0' : 'translate-y-full'}`}>
							<p className='relative'>{text2}</p>
						</div>
					</>
				}
				{
					type === 'dumb' && <>
						<div style={delay_style} className={` absolute flex items-center overflow-hidden top-0 ${active ? 'h-0' : 'h-full'}`}>
							<p className='relative'>{text1}</p>
						</div>
						<div style={delay_style} className={`absolute flex items-center overflow-hidden bottom-0 ${active ? 'h-full' : 'h-0'}`}>
							<p className='relative'>{text2}</p>
						</div>
					</>
				}
			</div>
		</>
	);
}
