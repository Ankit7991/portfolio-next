import {
	IGridLocations,
	IGridOccupiedArea,
	useRandomPositions,
} from "@/hooks/get-random-positions.hook";
import React from "react";
import Block from "../block/block";
import Link from "next/link";
import { bloxRandomTileData } from "./blox-random-tile-data";


export interface TileData { text: string; note?: string; url?: string };
export interface IRandomTilesParams {
	usedSpaces: IGridOccupiedArea[];
	data?: TileData[];
}



export default function RandomTiles({ usedSpaces, data }: IRandomTilesParams) {
	const { freeSpaces, randomSpaces } = useRandomPositions(data || bloxRandomTileData, usedSpaces);
	// console.log(`^^^`, randomSpaces?.length, randomSpaces);
	return (
		<>
			{randomSpaces?.map((el) => {
				return (
					<>
						<Block rowStart={el.rowLine} colStart={el.colLine} title={el.info?.note}>
							<div className="fluid center cursor-pointer" style={{
								cursor: el.info?.url ? 'pointer' : 'no-drop'
							}}>
								{el.info?.url ? (
									<>
										<Link className="w-full h-full center" href={el.info?.url}><span>{el.info?.text}</span></Link>
									</>
								) : (
									el.info?.text
								)}
							</div>
						</Block>
					</>
				);
			})}
		</>
	);
}
