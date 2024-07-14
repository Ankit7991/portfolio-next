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
					<div className='fluid flex flex-row flex-wrap gap-5 p-10 justify-around overflow-y-auto '>
						<PortfolioItem imageUrl='/images/alive-podcast.png' link='https://alivepodcastnetwork.com/' text='alive podcast'/>
						<PortfolioItem imageUrl='/images/surveybooker-crm.png' link='https://sandbox.surveybooker.co.uk/' text='surveybooker'/>
						<PortfolioItem imageUrl='/images/sim-gym.png' link='https://play.google.com/store/apps/details?id=com.simgym&pli=1' text='sim gym'/>
						<PortfolioItem imageUrl='/images/projects/video-streaming.jpg' link='' text='Video Streaming'/>
						<PortfolioItem imageUrl='/images/projects/pdf-generator-with-graph.jpg' link='' text='Pdf Generator and Schedular'/>
						<PortfolioItem imageUrl='/images/projects/nomadic-insight.png' link='https://nomadicsurveys.com/' text='Nomadic Surveys'/>

					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], [2,13, 1, 12]
				]}/>
			</SideBarIntro>
			<BlurrBackground imagePath='fruites/currants-3538617_1920.jpg'/>
		</main>
	)
}
