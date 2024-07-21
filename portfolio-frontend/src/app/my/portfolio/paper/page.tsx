'use client'
import BlockParent from '@/components/block-system/BlockParent'
import TheBlock from '@/components/block-system/TheBlock'
import Block from '@/components/micro/block/block'
import { PNavigationItems } from '@/components/paper-portfolio/component/sections/navigation-items/PNavigationItems'
import React, { useEffect, useState } from 'react'
import { HeadInterSection } from './HeadInterSection'
import { INwsHeadline, NwsHeadline } from './Headline'


const PortfolioDataHome: { [key: string]: INwsHeadline| {} } = {
	headline: {
		largeLable: `Crafting Tomorrow's Solutions`,
		smallLable: `A Journey in Development`,
		textArr:
			[
				`Embarking on a journey in the world of development, I am driven by a passion to craft innovative solutions that shape the future. With a keen eye for detail and a dedication to continuous learning, each project becomes an opportunity to push boundaries and explore new horizons. From the intricacies of coding to the artistry of user experience design, I thrive on transforming ideas into practical, impactful realities.`,
				`My approach combines technical expertise with creative problem-solving, ensuring that every line of code contributes to robust, scalable solutions. Embracing challenges as stepping stones to growth, I am committed to delivering excellence while staying at the forefront of emerging technologies. Join me as I navigate through the ever-evolving landscape of development, driven by curiosity, determination, and a relentless pursuit of innovation.`
			],
		gitImageUrl: 'illustrations/growth-600nw-2298571729.webp',
	}
}

export default function PaperPortfolio() {

	useEffect(() => {
	},[])
	
	return (
		<div>
			<HeadInterSection />

			<BlockParent fraction={7}>
				<TheBlock position={[0, 2]} span={[3, 3]} id='1'>
					<span>block 1</span>
				</TheBlock>
				<TheBlock position={[0, 0]} span={[1, 2]} id='2'>
					<span>block 2</span>
				</TheBlock>
			</BlockParent>


			{/* 
			<div className='lg:flex'>
				<NwsHeadline {...PortfolioDataHome.headline as INwsHeadline} />
				<div className='w-1/5' style={{ minHeight: '400px', border: '2px solid red' }}>
					<div className='border border-blue-700 h-full overflow-auto justify-center '>
						<div className='border border-orange-700 border-dashed h-full overflow-hidden'>
							<PNavigationItems />
			

						</div>

					</div>
				</div>
			</div>
			<div className='lg: flex'>
				<div className="w-full md:w-full lg:w-4/5 text-np_text h-96 border border-blue-700"></div>
				<div className="w-full md:w-full lg:w-1/5 text-np_text h-96 border border-blue-700">
					<div className='border border-red-700 h-full'>
					<div className='border border-red-700 h-full'></div>

					</div>
				</div>
			</div> */}
		</div>
	)
}
