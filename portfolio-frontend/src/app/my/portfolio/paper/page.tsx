import { HeadInterSection } from '@/components/paper-portfolio/component/sections/HeadInterSection'
import { INwsHeadline, NwsHeadline } from '@/components/paper-portfolio/component/sections/Headline'
import { PNavigationItems } from '@/components/paper-portfolio/component/sections/navigation-items/PNavigationItems'
import React from 'react'

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
	}
}

export default function PaperPortfolio() {
	return (
		<div>
			<HeadInterSection />
			<div className='lg:flex'>
				<NwsHeadline {...PortfolioDataHome.headline as INwsHeadline} />
				<div className='w-1/5' style={{minHeight: '400px', border: '2px solid red'}}>
				<PNavigationItems />
				</div>
			</div>
		</div>
	)
}
