'use client'

import PortfolioItem from '@/app/my/portfolio/blox/projects/portfolio-item'
import { PaperNavigations } from '@/app/data/navigation-data'
import React, { Fragment, useEffect, useRef, useState } from 'react'

export const PNavigationItems = () => {
	const parentref = useRef(null);
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		if(parentref.current) {
			const el = parentref.current as any;
			el.style.height = `${el.clientHeight}px`;
			setDisplay(true);
		}
	}, [parentref])

	return (
		<div ref={parentref} className='paper-side-nav h-full relative fluid item-center items-center flex flex-col gap-3 p-5 w-1/5' >
			{
				display && PaperNavigations.map((el, i) => {
					return <PortfolioItem className='paper-side-nav-item border relative' key={i.toString()} {...el}/>
				})
			}
		</div>
	)
}
