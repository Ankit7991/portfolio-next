import React from 'react'
import styles from './portfolio.module.scss';
import Image from 'next/image';

export interface IPortfolioItemParam {
	text?: string;
	link?: string;
	imageUrl?: string;
}

export default function PortfolioItem({text, imageUrl, link}: IPortfolioItemParam) {
	return (
		<div className={`${styles.item} basis-1/4`}>
			<div className={`${styles.imageContainer} fluid`}>
				<img className={`${styles.image} fluid`} src={imageUrl} width={220} height={180} alt='' />
			</div>
			<div className={`${styles.infoContainer} center fluid text-center`}>
				{link && <a href={link} target="new">{text}🔗</a>}
				{!link && <span className=''>{text}</span>}
			</div>
		</div>
	)
}
