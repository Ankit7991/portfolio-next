import { CommonComponentAttributes } from '@/types/common-attributes.typs';
import React from 'react';

export interface ITheBlockProps extends CommonComponentAttributes {
	size?: 'sm' | 'md' | 'lg'; // Optional prop to specify screen size
	sm?: [number[], number[]]; // Optional prop for small screens
	md?: [number[], number[]]; // Optional prop for medium screens
	lg?: [number[], number[]]; // Optional prop for large screens
	unit?: number; // Optional unit size
	id: string; // Unique identifier for the block
	children: React.ReactNode; // Children elements to render inside the block
	position?: [number, number]; // Optional prop for position
	span?: [number, number]; // Optional prop for span
}

const TheBlock: React.FC<ITheBlockProps> = ({
	size = 'md',
	sm,
	md,
	lg,
	unit = 0, // Default to 0 if unit is not provided
	id,
	children,
	position = [0, 0], // Default position
	span = [1, 1], // Default span
}) => {
	// Determine current size properties
	const currentSize = size === 'sm' ? sm : size === 'lg' ? lg : md;

	// Use default position and span if currentSize is not provided
	const [currentPosition, currentSpan] = currentSize || [position, span];

	// Only apply styles if unit is provided
	const style = unit ? {
		position: 'absolute' as const,
		left: `${currentPosition[1] * unit}px`,
		top: `${currentPosition[0] * unit}px`,
		width: `${currentSpan[1] * unit}px`,
		height: `${currentSpan[0] * unit}px`,
		border: '1px solid black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#ccc',
	} : {};

	return (
		<div style={style} id={id}>
			{children}
		</div>
	);
};

export default TheBlock;
