import { ThemeType } from "@/components/paper-portfolio/data/theme";
import { Fragment } from "react";
import styled from "styled-components";

export interface INwsHeadline {
	largeLable: string;
	smallLabel: string;
	textArr: string[];
}

export const NwsHeadline = ({largeLable, smallLabel, textArr}: INwsHeadline) => {
	return <>
		<div className="w-3/5 text-text">
			<div>
				<div className="text-largel text-justify">{largeLable}</div>
				<div className="text-smallxl text-justify text-textdim">{smallLabel}</div>
			</div>
			<div className="mt-10">
				{
					textArr.map((el, i) => {
						return <Fragment key={i}>
							<p className="text-justify mb-3">
								{!i && <span className="text-smallxl leading-3">{el[0]}</span>}
								{!!i && <span>{el[0]}</span>}
								<span>{el.slice(1)}</span>
							</p>
						</Fragment>
					})
				}
			</div>
		</div>
	</>
}