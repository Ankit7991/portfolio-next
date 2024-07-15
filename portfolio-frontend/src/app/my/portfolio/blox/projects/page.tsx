'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React, { Fragment } from 'react'
import PortfolioItem from './portfolio-item'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'
import { portfolioList } from '@/helpers/portfolio-data'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='PORTFOLIO'>
				<Block span={[2, 13, 2, 13]}>
					<div className='fluid flex flex-row flex-wrap gap-5 p-10 justify-around overflow-y-auto '>
						{
							portfolioList.map(el => {
								return <Fragment key={el.displayText}>
									<PortfolioItem imageUrl={el.imageUrl} link={el.appLink} text={el.displayText}/>
								</Fragment>
							})
						}
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [2,13, 2, 13]
				]}/>
			</SideBarIntro>
			<BlurrBackground imagePath='fruites/currants-3538617_1920.jpg'/>
		</main>
	)
}
