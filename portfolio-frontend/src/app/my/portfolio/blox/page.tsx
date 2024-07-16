'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import SideBarIntro from "@/components/pages/sidebar-intro.pages";
import Block from "@/components/micro/block/block";
import LogoFindAnkit from "@/components/sections/logo/m.findankit";
import { useEffect, useMemo, useState } from "react";
import { useRandomPositions } from "@/hooks/get-random-positions.hook";
import RandomTiles from "@/components/micro/random-tiles/random-tiles";
import BlurrBackground from "@/components/common/BlurrBackground";

const gte = (a: number, ref: number) => typeof (ref) === 'number' ? a >= ref : false;
const lte = (b: number, ref: number) => typeof (ref) === 'number' ? b <= ref : false;
const btwn = (max: number, min: number, ref: number) => gte(max, ref) && lte(min, ref);



export default function AboutMe() {
	return (
		<main className="fluid">
			<SideBarIntro label="INTRO">
				<Block span={[2, 13, 2, 13]} >
					<div className={`${styles.info} p-10 centerTransform w-3/4`}>
						<div>
							<span className="text-6xl">Hi</span><span className="text-smalll">👋</span>
						</div>
						<div className="mt-2">
							<span className="text-4xl">Ankit</span> <span className="text-1xl ml-2">here</span>
						</div>

						<div className="mt-7">
							<p>
								<span className={styles.mid}>I am a full-stack web developer.</span>
							</p>
							<p className="mt-3">
								I’ve built and deployed projects in various domains like CRM,
								Fitness, Surveys, and Podcasts.
							</p>
							<p className="text-justify mt-3">
								I’m a lifelong learner, constantly keeping pace with the latest industry trends. My passion lies in crafting robust and user-friendly web applications that deliver exceptional value. Throughout my career, I’ve honed my skills in both frontend and backend development through diverse projects. I thrive in collaborative environments that value innovation and teamwork.
							</p>
						</div>
						<p style={{color: 'black !important'}}>(Portfolio in progress)</p>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[2, 13, 2, 13],
					[1, 13, 1, 2],
					[5, 6, 10, 11],
				]} />
			</SideBarIntro>
			<BlurrBackground imagePath="fruites/davisuko-5E5N49RWtbA-unsplash.jpg" />
		</main>
	);
}
