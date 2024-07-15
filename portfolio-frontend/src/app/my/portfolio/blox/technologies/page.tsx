'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React, { Fragment } from 'react'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'
import PortfolioItem from '../projects/portfolio-item'
import { technologyData } from '@/helpers/portfolio-data'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='TECHNOLOGIES'>
				<Block span={[2,13, 2, 13]} rowStart={3} rowEnd={12} colStart={3} colEnd={11}>
					<div className='fluid flex flex-row flex-wrap gap-5 p-10 justify-around overflow-y-auto '>
						{
							technologyData.map(el => {
								return <Fragment key={el.text}>
									<PortfolioItem imageUrl={el.imageUrl} link={el.link} text={el.text}/>
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
