/* 
	gpt optimizations

	Avoid recalculating free spaces unless usedSpaces changes.
	Use for loops instead of map for better performance in the calcSpace function.
	Simplify the shuffling logic and avoid unnecessary copying.
	Debounce or throttle updates to randomSpaces to prevent excessive re-renders.
*/

import { TileData } from "@/components/micro/random-tiles/random-tiles";
import { useEffect, useState, useMemo } from "react";

export type IGridOccupiedArea = [
	rowStart: number,
	rowEnd: number,
	colStart: number,
	colEnd: number
];
export interface IGridLocations {
	rowLine: number;
	colLine: number;
	info?: TileData;
}

export function useRandomPositions(
	elements: TileData[],
	usedSpaces: IGridOccupiedArea[],
	randomize = false
) {
	const [freeSpaces, setFreeSpaces] = useState<IGridLocations[]>([]);
	const [randomSpaces, setRandomSpaces] = useState<IGridLocations[]>([]);

	useEffect(() => {
		const calcSpace = (usedSpaces: IGridOccupiedArea[], total = 1, r = null, c = null) => {
			const n = 12; // 12 Grids -> 13 lines
			const rowLines = r || Array.from({ length: n }, (_, i) => i + 1);
			const colLines = c || [...rowLines];
			const grid: IGridLocations[] = [];

			const areaUsed = ([rowLine, colLine]: number[], usedSpaces: IGridOccupiedArea[]) => {
				return usedSpaces.some(([rowStart, rowEnd, colStart, colEnd]) =>
					colLine >= colStart && colLine < colEnd &&
					rowLine >= rowStart && rowLine < rowEnd
				);
			};

			for (const rl of rowLines) {
				for (const cl of colLines) {
					if (!areaUsed([rl, cl], usedSpaces)) {
						grid.push({ rowLine: rl, colLine: cl });
					}
				}
			}

			setFreeSpaces(grid);
		};

		calcSpace(usedSpaces);
	}, [usedSpaces]);

	useEffect(() => {
		const getRandomElements = (arr: IGridLocations[], count: number) => {
			if (randomize) {
				for (let i = arr.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
			}
			return arr.slice(0, count);
		};

		if (freeSpaces.length > 0) {
			const random = getRandomElements(freeSpaces, elements.length);
			const randomLocations = random.map((el, i) => {
				el.info = elements[i];
				return el;
			});
			setRandomSpaces(randomLocations);
		}
	}, [freeSpaces, elements, randomize]);

	return {
		freeSpaces,
		randomSpaces
	};
}
