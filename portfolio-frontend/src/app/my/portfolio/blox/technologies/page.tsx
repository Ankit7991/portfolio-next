'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React from 'react'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'
import PortfolioItem from '../projects/portfolio-item'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='TECHNOLOGIES'>
				<Block span={[2, 12, 3, 12]} rowStart={3} rowEnd={12} colStart={3} colEnd={11}>
					<div className='fluid flex flex-row flex-wrap gap-5 p-10 justify-around overflow-y-auto '>
						<PortfolioItem imageUrl='/images/technologies/node.jpg' link='' text='Node.JS'/>
						<PortfolioItem imageUrl='/images/technologies/react.png' link='' text='React'/>
						<PortfolioItem imageUrl='/images/technologies/angular.png' link='' text='Angular'/>
						<PortfolioItem imageUrl='/images/technologies/html-css-js.jpg' link='' text='HTML / CSS / JS'/>
						<PortfolioItem imageUrl='/images/technologies/mysql.png' link='' text='MySQL'/>
						<PortfolioItem imageUrl='/images/technologies/postgre.jpg' link='' text='PostgreSQL'/>
						<PortfolioItem imageUrl='/images/technologies/ts.png' link='' text='Typescript'/>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [2, 12, 3, 12]
				]}/>
			</SideBarIntro>
			<BlurrBackground imagePath='fruites/berries-5679562_1920.jpg'/>
		</main>
	)
}
