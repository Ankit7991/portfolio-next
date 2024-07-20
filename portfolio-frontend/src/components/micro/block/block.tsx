import { HtmlAttributes } from "@/types/common-attributes.typs";
import React, { ReactNode, FC } from "react";
import styles from "./block.module.scss";

export interface IBlockParams extends HtmlAttributes {
	colStart?: number;
	rowStart?: number;
	colEnd?: number;
	rowEnd?: number;
	span?: [
		rowStart: number, 
		rowEnd: number,
		colStart: number, 
		colEnd: number, 
	],
	title?: string;	
	// rest?: {}
}

export default function Block({
	children,
	rowStart,
	colStart,
	rowEnd,
	colEnd,
	span,
	...rest
}: IBlockParams) {
	const obj = {
		gridRowStart: span?.[0] || rowStart,
		gridRowEnd: span?.[1] || rowEnd,
		gridColumnStart: span?.[2] || colStart,
		gridColumnEnd: span?.[3] || colEnd,
	};
	return <div {...rest} className={`${styles.block} relative ${rest.className}`} style={{ ...obj }}>{children}</div>;
}
