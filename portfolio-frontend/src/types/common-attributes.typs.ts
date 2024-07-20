import { CSSProperties } from "react";
import { IReactChildren } from "./comp-params.types";

export interface HtmlAttributes extends IReactChildren {
	className?: string;
	style?: CSSProperties | undefined;
}