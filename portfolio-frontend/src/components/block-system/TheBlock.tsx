import React from 'react';

// Define the interface for TheBlock props
type fullOrNumber = (number | 'full')[];
export interface ITheBlockProps {
	size?: 'init' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; 
	sm?: [fullOrNumber, fullOrNumber]; 
	md?: [fullOrNumber, fullOrNumber]; 
	lg?: [fullOrNumber, fullOrNumber]; 
	xl?: [fullOrNumber, fullOrNumber]; 
	xxl ?: [fullOrNumber, fullOrNumber]; 
	init: [fullOrNumber, fullOrNumber]; 
	unit?: number; 
	fraction?: number;
	id: string; 
	children: React.ReactNode; 
	debug?: boolean;
	develop?: boolean;
}

const order: ITheBlockProps['size'][] = ['init', 'sm', 'md', 'lg', 'xl', 'xxl'];

const TheBlock: React.FC<ITheBlockProps> = ({
	size = 'md',
	sm,
	md,
	lg,
	xl,
	xxl,
	init,
	unit = 0, 
	fraction = 0,
	id,
	children,
	debug,
	develop
}) => {
	const sizes = {
		sm, md, lg, xl, xxl, init
	}
	// let currentSize = size === 'sm' ? sm : size === 'lg' ? lg : size === 'xl' ? xl : size === 'xxl' ? xxl : md;
	let currentSize = sizes[size];

	let currentIndex = order.indexOf(size);
	console.log("here");
	while (!currentSize) {
		let i: number = currentIndex;
		if(i-1 < -1) {
			currentSize = init;
			break;
		}
		let newOrder = order[i -1];
		if(newOrder) currentSize = sizes[newOrder];
		currentIndex --;
	}

	
	const [currentPosition, currentSpan] = currentSize || init;

	
	const resolveFullValue = (value: number | 'full') => `${(value === 'full' ? fraction : value) * unit}px`;


	
	const style = unit ? {
		position: 'absolute' as const,
		left: resolveFullValue(currentPosition[0]),
		top: resolveFullValue(currentPosition[1]),
		width: resolveFullValue(currentSpan[0]),
		height: resolveFullValue(currentSpan[1]),
		...debug? {
			border: '1px solid black',
			background: '#0005',
		} : {},
		...develop ? {
			border: '1px solid black',
		} : {},
		padding: '3px'
	} : {};

	return (
		<div style={style} id={id}>
			{debug ? <>
				<div className='centerTransform h-1/2'>
					<p>ID ({id})</p>
					<pre className='h-3/5 overflow-auto border rounded-lg border-black p-5' title={JSON.stringify({ size: order[currentIndex], location: currentSize[0], span: currentSize[1] }, null, 5)}>{JSON.stringify({size: order[currentIndex] || 'init', location: currentSize[0], span: currentSize[1]}, null, 5)}</pre>
				</div>
			</> : children}
		</div>
	);
};

export default TheBlock;
