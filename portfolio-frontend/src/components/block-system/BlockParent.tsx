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
	const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>('md');
	const containerRef = useRef<HTMLDivElement>(null); // Reference to the parent div

	useEffect(() => {
		if (typeof window == 'undefined') return;
		const handleResize = () => {
			if (containerRef.current) {
				const parentWidth = containerRef.current.offsetWidth; // Get parent div width
				const newUnit = parentWidth / fraction;
				setUnit(newUnit);
			}

			if (window.innerWidth > 1536) {
				setScreenSize('xxl');
			} 
			else if (window.innerWidth > 1280) {
				setScreenSize('xl');
			} 
			else if (window.innerWidth > 1024) {
				setScreenSize('lg');
			}
			else if (window.innerWidth > 768) {
				setScreenSize('md');
			} 
			else if (window.innerWidth > 640) {
				setScreenSize('sm');
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
