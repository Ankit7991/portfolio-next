import React from 'react'
import styles from './portfolio.module.scss';
import Image from 'next/image';
import { HtmlAttributes, ReactAttributes } from '@/types/common-attributes.typs';
import Link from 'next/link';

export interface IPortfolioItemParam  {
	text?: string;
	link?: string;
	navigate?: string;
	imageUrl?: string;
	externalUrl?: string;
}

export default function PortfolioItem({ text, imageUrl, link, navigate, externalUrl, className, style, ...rest }: IPortfolioItemParam & HtmlAttributes & ReactAttributes) {
	return (
		<div className={`${styles.item} ${className}`} style={style} key={rest.key}>
			<div className={`${styles.imageContainer} fluid`}>
				<img className={`${styles.image} fluid`} src={externalUrl || imageUrl} width={220} height={180} alt='' />
			</div>
			<div className={`${styles.infoContainer} center fluid text-center`}>
				{(!link && navigate) && <Link href={navigate}>{text}🔗</Link>}
				{(link && !navigate) && <a href={link} target="new">{text}🔗</a>}
				{!link && !navigate && <span className=''>{text}</span>}
			</div>
		</div>
	)
}
