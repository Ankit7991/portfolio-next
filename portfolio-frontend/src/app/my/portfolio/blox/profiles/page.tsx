'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React, { Fragment } from 'react'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'
import { profileListData } from '@/app/data/portfolio-data'
import PortfolioItem from './portfolio-item'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='TECHNOLOGIES'>
				<Block span={[2,13, 2, 13]} rowStart={3} rowEnd={12} colStart={3} colEnd={11}>
					<div className='fluid overflow-y-auto center'>
						{
							profileListData.map(el => {
								return <Fragment key={el.text}>
									<PortfolioItem imageUrl={el.imageUrl} link={el.link} text={el.text} className='w-1/4 h-1/2' />
								</Fragment>	
							})
						}
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [2,13, 2, 13]
				]}/>
			</SideBarIntro>
			<BlurrBackground imagePath='fruites/berries-5679562_1920.jpg'/>
		</main>
	)
}
