'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React from 'react'
import PortfolioItem from './portfolio-item'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'

export default function Page() {
	return (
		<main className='fluid'>
			<SideBarIntro label='PORTFOLIO'>
				<Block rowStart={3} rowEnd={13} colStart={2} colEnd={13}>
					<div className='fluid flex flex-row flex-wrap gap-5 p-3 align-middle justify-center overflow-y-auto'>
						<PortfolioItem imageUrl='/images/alive-podcast.png' link='https://alivepodcastnetwork.com/' text='alive podcast'/>
						<PortfolioItem imageUrl='/images/surveybooker-crm.png' link='https://sandbox.surveybooker.co.uk/' text='surveybooker'/>
						<PortfolioItem imageUrl='/images/sim-gym.png' link='https://play.google.com/store/apps/details?id=com.simgym&pli=1' text='sim gym'/>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [3, 13, 2, 13]
				]}/>
			</SideBarIntro>
		</main>
	)
}
