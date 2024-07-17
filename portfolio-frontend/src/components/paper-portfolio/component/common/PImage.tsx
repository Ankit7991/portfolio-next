import React from 'react'
import { constants } from '@/helpers/constants';
import Image from 'next/image';

interface IPImage {
	gitImageUrl?: string; // foldername/imagename.[jpg?]
	imageUrl?: string;
	className?: string;
	clip?: 1 | 2 | 3;
}

const clipPaths = [
	'',
	'polygon(1% 8%, 12% 1%, 100% 0%, 99% 25%, 90% 28%, 99% 30%, 99% 100%, 91% 93%, 94% 100%, 88% 96%, 82% 100%, 26% 98%, 19% 99%, 0% 95%, 3% 92%, 1% 91%, 4% 87%, 1% 77%)',
	'polygon(1% 1%, 6% 8%, 6% 0%, 73% 1%, 83% 9%, 79% 0%, 98% 3%, 96% 10%, 99% 18%, 100% 49%, 98% 55%, 100% 61%, 99% 92%, 90% 99%, 16% 100%, 16% 91%, 9% 100%, 1% 97%, 5% 79%, 1% 65%)',
	'polygon(1% 9%, 3% 0%, 8% 4%, 11% 0%, 57% 1%, 68% 4%, 66% 0%, 85% 2%, 99% 1%, 97% 30%, 99% 45%, 99% 64%, 100% 78%, 92% 91%, 100% 87%, 100% 95%, 89% 99%, 38% 99%, 24% 100%, 19% 90%, 19% 100%, 1% 100%, 4% 81%, 1% 41%)'
]

export const PImage = ({gitImageUrl, imageUrl, className, clip}: IPImage) => {
	const url = gitImageUrl ? constants.imgPrefix+gitImageUrl+'?raw=true' : imageUrl;
	return (
		<>
			{url && <Image src={url} width={500} height={500} alt={url} className={className || ''} style={{ clipPath: clipPaths[clip || 0]}}/>}
		</>
	)
}
