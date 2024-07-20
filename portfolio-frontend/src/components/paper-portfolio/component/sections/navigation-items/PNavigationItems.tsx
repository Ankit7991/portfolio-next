import PortfolioItem from '@/app/my/portfolio/blox/projects/portfolio-item'
import { PaperNavigations } from '@/app/data/navigation-data'
import React, { Fragment } from 'react'

export const PNavigationItems = () => {
	return (
		<div className='paper-side-nav h-full relative fluid' style={{border: '2px solid green', height: '100%'}}>
			<div className='paper-side-nav-item border relative'></div>
			<div className='paper-side-nav-item border relative'></div>
			<div className='paper-side-nav-item border relative'></div>
			<div className='paper-side-nav-item border relative'></div>
		</div>
	)
}
