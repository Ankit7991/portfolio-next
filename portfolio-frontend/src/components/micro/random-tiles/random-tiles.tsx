import {
	IGridLocations,
	IGridOccupiedArea,
	useRandomPositions,
} from "@/hooks/get-random-positions.hook";
import React from "react";
import Block from "../block/block";
import Link from "next/link";
import { bloxRandomTileData } from "@/app/data/blox/blox-random-tile-data";
import { useRouter } from "next/navigation";


export interface TileData { text: string; note?: string; url?: string };
export interface IRandomTilesParams {
	usedSpaces: IGridOccupiedArea[];
	data?: TileData[];
	randomize?: boolean;
	checkActive?: boolean;
}



export default function RandomTiles({ usedSpaces, data, randomize = false, checkActive = true }: IRandomTilesParams) {
	const { freeSpaces, randomSpaces } = useRandomPositions(data || bloxRandomTileData, usedSpaces, randomize);

	return (
		<>
			{randomSpaces?.map((el) => {
				return (
					<Block key={`${el.rowLine}-${el.colLine}`} rowStart={el.rowLine} colStart={el.colLine} title={el.info?.note}>
						<div
							className={`fluid center cursor-pointer`}
							style={{
								cursor: el.info?.url ? 'pointer' : 'no-drop'
							}}
						>
							{el.info?.url ? (
								<Link href={el.info?.url}>
									<span>{el.info?.text}</span>
								</Link>
							) : (
								el.info?.text
							)}
						</div>
					</Block>
				);
			})}
		</>
	);
}

