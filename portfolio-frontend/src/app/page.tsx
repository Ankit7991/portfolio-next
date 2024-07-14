'use client';

import BlurrBackground from "@/components/common/BlurrBackground";
import Block from "@/components/micro/block/block";
import { homeRandomTileData } from "@/components/micro/random-tiles/home-random-tile-data";
import RandomTiles from "@/components/micro/random-tiles/random-tiles";
import SideBarIntro from '@/components/pages/sidebar-intro.pages';



export default function Home() {

	return (
		<main className="fluid ">
			<SideBarIntro label="HOME" >
				<Block span={[5, 8, 5, 8]}>
					<div className="centerTransform">
						<span className="text-6xl">Hi</span><span className="text-2xl">🌊</span>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], // this is the page label grid area
					[5, 8, 5, 8]
				]} data={homeRandomTileData} />
			</SideBarIntro>
			<BlurrBackground imagePath="generic-backgrounds/joanna-kosinska-LAaSoL0LrYs-unsplash.jpg" />
		</main>
	);
}
