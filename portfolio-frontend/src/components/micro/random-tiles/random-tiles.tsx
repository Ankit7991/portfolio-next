import {
  IGridLocations,
  IGridOccupiedArea,
  useRandomPositions,
} from "@/hooks/get-random-positions.hook";
import React from "react";
import Block from "../block/block";
import Link from "next/link";

export interface IRandomTilesParams {
  usedSpaces: IGridOccupiedArea[];
}

const data = [
  { text: "ankit" },
  { text: "node" },
  { text: "abc" },
  { text: "Portfolios", url: "/my/portfolio" },
	{text: 'about me', url: '/'}
];

export default function RandomTiles({ usedSpaces }: IRandomTilesParams) {
  const { freeSpaces, randomSpaces } = useRandomPositions(data, usedSpaces);

  return (
    <>
      {randomSpaces?.map((el) => {
        return (
          <>
            <Block rowStart={el.rowLine} colStart={el.colLine}>
              <div className="fluid center cursor-pointer">
                {el.info?.url ? (
                  <>
                    <Link href={el.info?.url}>{el.info?.text}</Link>
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
