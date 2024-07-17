import { ThemeType } from "@/components/paper-portfolio/data/theme";
import { Fragment } from "react";
import styled from "styled-components";
import { PImage } from "../common/PImage";

export interface INwsHeadline {
	largeLable: string;
	smallLabel: string;
	textArr: string[];
	gitImageUrl?: string;
}

export const NwsHeadline = ({ largeLable, smallLabel, textArr, gitImageUrl }: INwsHeadline) => {
	return <>
		<div className="w-full md:w-full lg:w-3/5 text-text ">
			<div className="flex flex-col-reverse md:flex md:flex-row md:gap-5">
				<PImage gitImageUrl={gitImageUrl} className="w-full md:w-3/5"/>
				<div>
					<div className="text-smallxl md:text-smallxxl lg:text-largel text-justify">{largeLable}</div>
					<div className="text-smalll lg:text-smallxl text-justify text-textdim">{smallLabel}</div>
				</div>
			</div>
			<div className="mt-10">
				{
					textArr.map((el, i) => {
						return <Fragment key={i}>
							<p className="text-justify mb-3">
								{!i && <span className="text-smalll lg:text-smallxl leading-3">{el[0]}</span>}
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