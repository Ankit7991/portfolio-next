'use client'
import React, { useState, useEffect, useRef, Children, cloneElement, ReactNode, ReactElement } from 'react';
import TheBlock, { ITheBlockProps } from './TheBlock';

interface IBlockParentProps {
	fraction: number; // Number of fractions to divide the width into
	debug?: boolean;
	develop?: boolean;
	children: ReactNode; // Children elements to render inside the parent
}

const BlockParent: React.FC<IBlockParentProps> = ({ fraction, children, debug, develop }) => {
	const [unit, setUnit] = useState<number | undefined>(undefined); // Initialize as undefined
	const [screenSize, setScreenSize] = useState<ITheBlockProps['size']>('md');
	const containerRef = useRef<HTMLDivElement>(null); // Reference to the parent div

	useEffect(() => {
		if (typeof window == 'undefined') return;
		const handleResize = () => {
			if (containerRef.current) {
				const parentWidth = containerRef.current.offsetWidth; // Get parent div width
				const newUnit = parentWidth / fraction;
				setUnit(newUnit);
			}

			const w = window.innerWidth;
			const btwn = (a: number, b: number) => w > a && w <= b;

			if (w > 1536) {
				setScreenSize('xxl');
			}
			if (btwn(1280, 1536)) {
				setScreenSize('xl');
			}
			else if (btwn(1024, 1280)) {
				setScreenSize('lg');
			}
			else if (btwn(768, 1024)) {
				setScreenSize('md');
			}
			else if (btwn(640, 768)) {
				setScreenSize('sm');
			}
			else {
				setScreenSize('init');
			}
		};

		(window as any).addEventListener('resize', handleResize);
		handleResize(); // Set initial unit size

		return () => (window as any).removeEventListener('resize', handleResize);
	}, [fraction]);

	// Extract and adjust data from children
	const blocks = Children.map(children, (child): ReactElement | null => {
		if (React.isValidElement(child) && child.type === TheBlock) {
			return cloneElement(child as ReactElement<ITheBlockProps>, { size: screenSize, unit, fraction, debug, develop });
		}
		return null;
	});

	return (
		<div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
			{blocks}
			{develop && <span className='fixed top-0 right-0 text-np_microl'>{screenSize}<span>({window.innerWidth})</span></span>}
		</div>
	);
};

export default BlockParent;
