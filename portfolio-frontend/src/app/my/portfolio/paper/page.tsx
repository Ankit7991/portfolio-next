'use client'
import TheBlock from '@/components/block-system/TheBlock'
import { PNavigationItems } from '@/components/paper-portfolio/component/sections/navigation-items/PNavigationItems'
import React, { useEffect } from 'react'
import { HeadInterSection } from './HeadInterSection'
import { INwsHeadline, NwsHeadline } from './Headline'
import { NwsHeadline2 } from './Headline2'
import dynamic from 'next/dynamic';

const BlockParent = dynamic(() => import('@/components/block-system/BlockParent'), { ssr: false });



const PortfolioDataHome: { [key: string]: INwsHeadline | {} } = {
	headline: {
		largeLable: `Crafting Tomorrow's Solutions`,
		smallLable: `A Journey in Development`,
		textArr:
			[
				`Embarking on a journey in the world of development, I am driven by a passion to craft innovative solutions that shape the future. With a keen eye for detail and a dedication to continuous learning, each project becomes an opportunity to push boundaries and explore new horizons. From the intricacies of coding to the artistry of user experience design, I thrive on transforming ideas into practical, impactful realities.`,
				`My approach combines technical expertise with creative problem-solving, ensuring that every line of code contributes to robust, scalable solutions. Embracing challenges as stepping stones to growth, I am committed to delivering excellence while staying at the forefront of emerging technologies. Join me as I navigate through the ever-evolving landscape of development, driven by curiosity, determination, and a relentless pursuit of innovation.`
			],
		gitImageUrl: 'illustrations/growth-600nw-2298571729.webp',
	},
	aboutAuthor: {
		largeLable: "About the Author",
		smallLable: "A Glimpse into the Journey",
		textArr: [
			"Ankit is a full-stack web developer with over 4 years of experience in technologies like Node, React, and MySQL. They have built and deployed projects in various domains, including CRM, fitness, surveys, and podcasts.",
			"As a lifelong learner, Ankit constantly keeps pace with the latest industry trends. Their passion lies in crafting robust and user-friendly web applications that deliver exceptional value. Throughout their career, they have honed their skills in both frontend and backend development through diverse projects. Ankit thrives in collaborative environments that value innovation and teamwork.",
			"In addition to their professional work, Ankit holds a B.E/B.Tech in Electronics & Communications. Their technical skill set includes languages like JavaScript and TypeScript, web presentation using HTML and CSS/SCSS, backend development with Node.js and Nest.js, frontend development with React, Angular, and Next.js, and database management with MySQL, PostgreSQL, and Redis Cache.",
			"Join Ankit as they continue to navigate the ever-evolving landscape of technology, driven by curiosity, determination, and a relentless pursuit of innovation."
		],
		imageUrl: "/images/me/me-blurred.jpg"
	}

}

export default function PaperPortfolio() {

	useEffect(() => {
	}, [])

	return (
		<div>
			<HeadInterSection />

			<BlockParent fraction={12} debug={false} develop={true}>
				<TheBlock
					lg={[[0, 0], [10, 6.5]]}
					md={[[0, 2], ['full', 19]]}
					init={[[0, 3], ['full', 32]]}
					id='headline'
				>
					<NwsHeadline {...PortfolioDataHome.headline as INwsHeadline} />
				</TheBlock>

				<TheBlock
					lg={[[10, 0], [2, 6.5]]}
					md={[[0, 0], ['full', 2]]}
					init={[[0, 0], ['full', 3]]}
					id='navigation'
				>
					<PNavigationItems />
				</TheBlock>

				<TheBlock
					lg={[[0, 6.5], ['full', 6]]}
					md={[[0, 21], ['full', 18]]}
					init={[[0, 35], ['full', 32]]}
					xxl={[[0, 6.5], ['full', 5.5]]}
					id='about-me'
				>
					<NwsHeadline2 {...PortfolioDataHome.aboutAuthor as INwsHeadline}/>
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
