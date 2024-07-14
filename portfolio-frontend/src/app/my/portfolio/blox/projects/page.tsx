'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React from 'react'
import PortfolioItem from './portfolio-item'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='PORTFOLIO'>
				<Block rowStart={2} rowEnd={13} colStart={2} colEnd={12}>
					<div className='fluid flex flex-row flex-wrap gap-5 p-3 align-middle justify-center overflow-y-auto'>
						<PortfolioItem imageUrl='/images/alive-podcast.png' link='https://alivepodcastnetwork.com/' text='alive podcast'/>
						<PortfolioItem imageUrl='/images/surveybooker-crm.png' link='https://sandbox.surveybooker.co.uk/' text='surveybooker'/>
						<PortfolioItem imageUrl='/images/sim-gym.png' link='https://play.google.com/store/apps/details?id=com.simgym&pli=1' text='sim gym'/>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [2,13, 1, 12]
				]}/>
			</SideBarIntro>
			<BlurrBackground url='/images/blox/patrick-tomasso-QMDap1TAu0g-unsplash.jpg'/>
		</main>
	)
}
