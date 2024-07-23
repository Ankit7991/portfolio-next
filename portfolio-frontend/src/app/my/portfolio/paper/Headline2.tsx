import { PImage } from "@/components/paper-portfolio/component/common/PImage";
import { ThemeType } from "@/components/paper-portfolio/data/theme";
import { Fragment } from "react";
import styled from "styled-components";
import { INwsHeadline } from "./Headline";


export const NwsHeadline2 = ({ largeLable, smallLable, textArr, gitImageUrl, imageUrl, inBetweenText }: INwsHeadline) => {
	return <>
		<div className="w-full md:w-full text-np_text ">
			<div className="flex flex-col-reverse md:flex md:flex-col">
				<div className="flex flex-col-reverse md:flex md:flex-row md:gap-5">
					<div className="">
						<div className="">
							{
								textArr.map((el, i) => {
									if (i > 1) return;
									return <Fragment key={i}>
										<p className={`text-justify mb-3 mt-5`}>
											{!i && <span className="text-np_smalll lg:text-np_smallxl leading-3">{el[0]}</span>}
											{!!i && <span>{el[0]}</span>}
											<span>{el.slice(1)}</span>
										</p>
									</Fragment>
								})
							}
						</div>
					</div>
					<div className="w-full md:w-full lg:w-3/6 center relative">
						<PImage gitImageUrl={gitImageUrl} imageUrl={imageUrl} className="w-1/2 md:w-full lg:w-full xl:w-3/5" clip={3} width={300} height={250} />
					</div>
				</div>
				<div className="flex">
					<p className="text-np_microxxl md:w-3/5 text-justify hidden md:visible">{inBetweenText}</p>
					<div className="flex-col text-left md:text-right md:w-full border">
						<div className="text-np_smallxl md:text-np_smallxxl lg:text-np_largel">{largeLable}</div>
						<div className="text-np_smalll lg:text-np_smallxxl text-np_textdim">{smallLable}</div>
					</div>
				</div>
			</div>
			<div className="mt-10 sm:mt-0.5">
				{
					textArr.map((el, i) => {
						if (i < 2) return;
						return <Fragment key={i}>
							<p className="text-justify mb-3">
								{!i && <span className="text-np_smalll lg:text-np_smallxl leading-3">{el[0]}</span>}
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