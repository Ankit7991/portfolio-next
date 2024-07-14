import { IReactChildren } from "@/types/comp-params.types";
import React, { ReactNode, FC } from "react";
import styles from "./block.module.scss";

export interface IBlockParams extends IReactChildren {
	colStart?: number;
	rowStart?: number;
	colEnd?: number;
	rowEnd?: number;
	span?: [
		rowStart: number, 
		rowEnd: number,
		colStart: number, 
		colEnd: number, 
	]
}

export default function Block({
	children,
	rowStart,
	colStart,
	rowEnd,
	colEnd,
	span
}: IBlockParams) {
	const obj = {
		gridRowStart: span?.[0] || rowStart,
		gridRowEnd: span?.[1] || rowEnd,
		gridColumnStart: span?.[2] || colStart,
		gridColumnEnd: span?.[3] || colEnd,
	};
	return <div className={`${styles.block} relative`} style={{ ...obj }}>{children}</div>;
}
