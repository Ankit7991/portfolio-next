import { HeadInterSection } from '@/components/paper-portfolio/component/items/HeadInterSection'
import { NwsHeadline } from '@/components/paper-portfolio/component/items/Headline'
import React from 'react'

export default function PaperPortfolio() {
  return (
	<div>
		<HeadInterSection />
		  <NwsHeadline largeLable={`Crafting Tomorrow's Solutions`} smallLabel={`A Journey in Development`} textArr={[
			`Embarking on a journey in the world of development, I am driven by a passion to craft innovative solutions that shape the future. With a keen eye for detail and a dedication to continuous learning, each project becomes an opportunity to push boundaries and explore new horizons. From the intricacies of coding to the artistry of user experience design, I thrive on transforming ideas into practical, impactful realities.`,
			`My approach combines technical expertise with creative problem-solving, ensuring that every line of code contributes to robust, scalable solutions. Embracing challenges as stepping stones to growth, I am committed to delivering excellence while staying at the forefront of emerging technologies. Join me as I navigate through the ever-evolving landscape of development, driven by curiosity, determination, and a relentless pursuit of innovation.`
		  ]}/>
	</div>
  )
}
