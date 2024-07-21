import React, { useState, useEffect, Children, cloneElement, ReactNode, ReactElement } from 'react';
import TheBlock, { ITheBlockProps } from './TheBlock';

interface IBlockParentProps {
	fraction: number; // Number of fractions to divide the width into
	children: ReactNode; // Children elements to render inside the parent
}

const BlockParent: React.FC<IBlockParentProps> = ({ fraction, children }) => {
	const [containerSize, setContainerSize] = useState({ width: '1000px', height: '700px' });
	const [unit, setUnit] = useState<number | undefined>(undefined); // Initialize as undefined
	const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('md');

	useEffect(() => {
		if (typeof window !== 'undefined') { // Check if code is running in the browser
			const handleResize = () => {
				const newUnit = window.innerWidth / fraction;
				setUnit(newUnit);

				if (window.innerWidth < 600) {
					setScreenSize('sm');
				} else if (window.innerWidth >= 1200) {
					setScreenSize('lg');
				} else {
					setScreenSize('md');
				}
			};

			window.addEventListener('resize', handleResize);
			handleResize(); // Set initial unit size

			return () => window.removeEventListener('resize', handleResize);
		}
	}, [fraction]);

	// Extract and adjust data from children
	const blocks = Children.map(children, (child): ReactElement | null => {
		if (React.isValidElement(child) && child.type === TheBlock) {
			return cloneElement(child as ReactElement<ITheBlockProps>, { size: screenSize, unit });
		}
		return null;
	});

	return (
		<div style={{ position: 'relative', width: containerSize.width, height: containerSize.height }}>
			{blocks}
		</div>
	);
};

export default BlockParent;
