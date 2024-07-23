'use client'
import Block from '@/components/micro/block/block'
import SideBarIntro from '@/components/pages/sidebar-intro.pages'
import React, { Fragment } from 'react'
import RandomTiles from '@/components/micro/random-tiles/random-tiles'
import BlurrBackground from '@/components/common/BlurrBackground'
import { technologyData } from '@/app/data/portfolio-data'
import PortfolioItem from '../profiles/portfolio-item'

export default function Page() {
	return (
		<main className='fluid relative'>
			<SideBarIntro label='RESUME'>
				<Block span={[2,13, 2, 13]} rowStart={3} rowEnd={12} colStart={3} colEnd={11}>
					<div style={{ height: '100%', width: '100%' }}>
						<embed
							src="/pdf/resume.pdf"
							type="application/pdf"
							width="100%"
							height="100%"
						/>
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
