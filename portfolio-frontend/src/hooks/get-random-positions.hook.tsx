import { useEffect, useState } from "react";

export interface IRandomPositionElement {
	text: string;
	url?: string;
}
export type IGridOccupiedArea = [
	rowStart: number,
	rowEnd: number,
	colStart: number,
	colEnd: number
];
export interface IGridLocations {
	rowLine: number;
	colLine: number;
	info?: IRandomPositionElement;
}


export function useRandomPositions(
	elements: IRandomPositionElement[],
	usedSpaces: IGridOccupiedArea[]
) {
	const [freeSpaces, setFreeSpaces] = useState<IGridLocations[]>([]);
	const [randomSpaces, setRandomSpaces] = useState<IGridLocations[]>();

	useEffect(() => {
		function calcSpace(usedSpaces: IGridOccupiedArea[], total = 1, r = null, c = null) {
			let n = 12; // 12 Grids -> 13 lines
			let rowLines = r || new Array(n).fill("").map((el, i) => i + 1);
			let colLines = c || [...rowLines];
			let grid: IGridLocations[] = [];

			// check if any rowLine & colLine are free or not .. row/colLine is concept of grid css
			function areaUsed([rowLine, colLine]: number[], usedSpaces: IGridOccupiedArea[]) {
				let used = false;
				usedSpaces.map((space) => {
					if (used) return;
					const [rowStart, rowEnd, colStart, colEnd] = space;
					used =
						colLine >= colStart &&
						colLine < colEnd &&
						rowLine >= rowStart &&
						rowLine < rowEnd;
				});
				return used;
			}
			rowLines.map((rl) => {
				colLines.map((cl) => {
					let used = areaUsed([rl, cl], usedSpaces);
					if (!used) grid.push({ rowLine: rl, colLine: cl });
				});
			});

			setFreeSpaces(grid);
		}


		calcSpace(usedSpaces);
	}, []);

	useEffect(() => {

		const getRandomElements = (arr: IGridLocations[], count: number) => {
			const shuffled = arr.slice();
			// for (let i = arr.length - 1; i > 0; i--) {
			// 	const j = Math.floor(Math.random() * (i + 1));
			// 	[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
			// }
			let n = Math.abs(Math.floor(Math.random() * (arr.length-1-count)));
			if (n > arr.length - 1 - count) n = Math.abs(arr.length - 1 - count);
			console.log({arr, n, count, shuffled})
			return shuffled.slice(n, n+count);
		};
		const random = getRandomElements(freeSpaces, elements.length);
		console.log(random);
		const randomLocations = random.map((el, i: number) => {
		// const randomLocations = freeSpaces.slice(Math.floor(Math.random() * (freeSpaces.length - elements.length) - 1), elements.length).map((el, i: number) => {
			el.info = elements[i];
			return el;
		});

		setRandomSpaces(randomLocations);
	}, [freeSpaces])

	return {
		freeSpaces,
		randomSpaces
	};
}
