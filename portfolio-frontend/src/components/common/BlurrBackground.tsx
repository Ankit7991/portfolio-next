import Image from 'next/image';
import React from 'react'


export interface IBlurrBackground {
	url: string;
}

export default function BlurrBackground({ url }: IBlurrBackground) {
	return (
		<div className='absolute top-0 left-0 bottom-0 right-0 -z-50 overflow-hidden'>
			<div className='absolute top-1/2 left-1/2 w-full h-full' style={{transform: 'translate(-50%, -50%) scale(1.1)'}}>
				<img src={url} className={`absolute w-full h-full -z-50 blur-sm`} alt='' />
			<div className='-z-40 absolute w-full h-full' style={{backgroundColor: '#fff6'}}></div>
			</div>
		</div>
	)
}
