'use client'

import PortfolioItem from '@/app/my/portfolio/blox/projects/portfolio-item'
import { PaperNavigations } from '@/app/data/navigation-data'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import style from './PNavigationItem.module.scss';

export const PNavigationItems = () => {

	return (
		<div className='h-full flex lg:flex-col lg:items-center'>
			<div className='w-10 lg:rotate-0 sm:-rotate-90 relative center sm:text-np_microxxl  lg:text-np_smalll'>
				<h1>Navigation</h1>
			</div>
			<div className='flex gap-5 h-full lg:flex-wrap overflow-auto lg:felx-col lg:flex-row lg:justify-center '>
				{
					PaperNavigations.map((el, i) => {
						return <div className='item w-36 lg:h-36 h-full shrink-0 grow-0'>
							<PortfolioItem className='fluid' key={i.toString()} {...el} />
						</div>
					})
				}
			</div>
		</div>
	)
}
