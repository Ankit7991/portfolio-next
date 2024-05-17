import { IReactChildren } from '@/types/comp-params.types'
import React from 'react'
import styles from './sidebar-intro.module.scss';

interface IParmas extends IReactChildren {
	label: string
}

export default function SideBarIntro({children, label}: IParmas) {
	return (
		<div className={[styles.parent, 'fluid'].join(' ')}>
			<div className={styles.label}>
				{label}
			</div>	
			{children}
		</div>
	)
}
