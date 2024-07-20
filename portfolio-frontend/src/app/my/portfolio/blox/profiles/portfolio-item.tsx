import React from 'react'
import styles from './portfolio.module.scss';
import Image from 'next/image';
import { HtmlAttributes } from '@/types/common-attributes.typs';
import Link from 'next/link';

export interface IPortfolioItemParam extends HtmlAttributes {
	text?: string;
	link?: string;
	navigate?: string;
	imageUrl?: string;
	externalUrl?: string;
}

export default function PortfolioItem({ text, imageUrl, link, navigate, externalUrl, className, style }: IPortfolioItemParam) {
	return (
		<div className={`flex flex-col center ${styles.parent}`}>
			<div className={styles.bounce}>
				<h3>{text}</h3>
			</div>
			<div className={`${styles.item} ${className}`} style={style}>
				<div className={`${styles.imageContainer} fluid`}>
					<img className={`${styles.image} fluid`} src={externalUrl || imageUrl} width={220} height={180} alt='' />
				</div>
				<div className={`${styles.infoContainer} center fluid text-center`}>
					{(!link && navigate) && <Link href={navigate}>{text}🔗</Link>}
					{(link && !navigate) && <a href={link} target="new">{text}🔗</a>}
					{!link && !navigate && <span className=''>{text}</span>}
				</div>
			</div>
		</div>
	)
}
