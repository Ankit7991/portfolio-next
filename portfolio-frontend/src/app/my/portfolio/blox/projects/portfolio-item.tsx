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
		<div className={`${styles.item}`}>
			<div className={`${styles.imageContainer} fluid`}>
				<img className={`${styles.image} fluid`} src={imageUrl} width={220} height={180} alt='surveybooker' />
			</div>
			<div className={`${styles.infoContainer} center fluid`}>
				<a href={link} target="new">{text}🔗</a>
			</div>
		</div>
	)
}
