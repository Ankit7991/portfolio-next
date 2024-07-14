import { IReactChildren } from "@/types/comp-params.types";
import React, { ReactNode, FC } from "react";
import styles from "./block.module.scss";

export interface IBlockParams extends IReactChildren {
  colStart?: number;
  rowStart?: number;
  colEnd?: number;
  rowEnd?: number;
}

export default function Block({
  children,
  rowStart,
  colStart,
  rowEnd,
  colEnd,
}: IBlockParams) {
	const obj = {
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
	};
  return <div className={`${styles.block} relative`} style={{...obj}}>{children}</div>;
}
