import React, { useState, useEffect, useRef, Children, cloneElement, ReactNode, ReactElement } from 'react';
import TheBlock, { ITheBlockProps } from './TheBlock';

interface IBlockParentProps {
	fraction: number; // Number of fractions to divide the width into
	debug?: boolean;
	children: ReactNode; // Children elements to render inside the parent
}

const BlockParent: React.FC<IBlockParentProps> = ({ fraction, children, debug }) => {
	const [unit, setUnit] = useState<number | undefined>(undefined); // Initialize as undefined
	const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('md');
	const containerRef = useRef<HTMLDivElement>(null); // Reference to the parent div

	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current) {
				const parentWidth = containerRef.current.offsetWidth; // Get parent div width
				const newUnit = parentWidth / fraction;
				setUnit(newUnit);

				if (window.innerWidth < 600) {
					setScreenSize('sm');
				} else if (window.innerWidth >= 1200) {
					setScreenSize('lg');
				} else {
					setScreenSize('md');
				}
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Set initial unit size

		return () => window.removeEventListener('resize', handleResize);
	}, [fraction]);

	// Extract and adjust data from children
	const blocks = Children.map(children, (child): ReactElement | null => {
		if (React.isValidElement(child) && child.type === TheBlock) {
			return cloneElement(child as ReactElement<ITheBlockProps>, { size: screenSize, unit, fraction, debug });
		}
		return null;
	});

	return (
		<div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
			{blocks}
		</div>
	);
};

export default BlockParent;
