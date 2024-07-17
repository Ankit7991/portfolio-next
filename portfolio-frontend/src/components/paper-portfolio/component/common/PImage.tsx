import React from 'react'
import { constants } from '@/helpers/constants';
import Image from 'next/image';

interface IPImage {
	gitImageUrl?: string; // foldername/imagename.[jpg?]
	imageUrl?: string;
	className?: string;
}

export const PImage = ({gitImageUrl, imageUrl, className}: IPImage) => {
	const url = gitImageUrl ? constants.imgPrefix+gitImageUrl+'?raw=true' : imageUrl;
	return (
		<>
			{url && <Image src={url} width={500} height={500} alt={url} className={className || ''}/>}
		</>
	)
}
