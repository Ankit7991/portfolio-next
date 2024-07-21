import React from 'react';

// Define the interface for TheBlock props
type fullOrNumber = (number | 'full')[];
export interface ITheBlockProps {
	size?: 'sm' | 'md' | 'lg' | 'xl'; // Optional prop to specify screen size
	sm?: [fullOrNumber, fullOrNumber]; // Optional prop for small screens
	md?: [fullOrNumber, fullOrNumber]; // Optional prop for medium screens
	lg?: [fullOrNumber, fullOrNumber]; // Optional prop for large screens
	xl?: [fullOrNumber, fullOrNumber]; // Optional prop for large screens
	unit?: number; // Optional unit size
	fraction?: number;
	id: string; // Unique identifier for the block
	children: React.ReactNode; // Children elements to render inside the block
	position?: fullOrNumber; // Optional prop for position
	span?: fullOrNumber; // Optional prop for span
	debug?: boolean;
	develop?: boolean;
}

// Define TheBlock component
const TheBlock: React.FC<ITheBlockProps> = ({
	size = 'md',
	sm,
	md,
	lg,
	xl,
	unit = 0, // Default to 0 if unit is not provided
	fraction = 0,
	id,
	children,
	position = [0, 0], // Default position
	span = [1, 1], // Default span
	debug,
	develop
}) => {
	// Determine current size properties
	const currentSize = size === 'sm' ? sm : size === 'lg' ? lg : size === 'xl' ? xl : md;

	// Use default position and span if currentSize is not provided
	const [currentPosition, currentSpan] = currentSize || [position, span];

	// Function to handle 'full' values
	const resolveFullValue = (value: number | 'full') => `${(value === 'full' ? fraction : value) * unit}px`;


	// Only apply styles if unit is provided
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
				<p className='centerTransform'>ID ({id})</p>
			</> : children}
		</div>
	);
};

export default TheBlock;
