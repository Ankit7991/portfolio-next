import { PaperNavigations } from '@/app/data/navigation-data'
import PortfolioItem from '@/app/my/portfolio/blox/projects/portfolio-item'
import React, { Fragment } from 'react'
import { PImage } from '../../common/PImage'

export const PNavITem = () => {
  return (
	<div>
		{
			PaperNavigations.map((el, i) => {
				console.log(`$$`, el);
				return <Fragment key={i}>
					<PortfolioItem {...el}/>
				</Fragment>
			})
		}
	</div>
  )
}
