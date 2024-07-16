'use client';

import BlurrBackground from "@/components/common/BlurrBackground";
import Block from "@/components/micro/block/block";
import { homeRandomTileData } from "@/components/micro/random-tiles/home-random-tile-data";
import RandomTiles from "@/components/micro/random-tiles/random-tiles";
import SideBarIntro from '@/components/pages/sidebar-intro.pages';



export default function Home() {

	return (
		<main className="fluid text-white">
			<SideBarIntro label="HOME" >
				<Block span={[4, 13, 2, 9]}>
					<div className="centerTransform">
						<span className="text-6xl">Hi</span><span className="text-2xl">👋</span>
						<br />
						<span>{`Try out different portfolio ui's on random blocks.`}</span>
						<br />
						<span>Thanks for your visit 😊</span>
						<br />
						<span className="text-microl">(Responsiveness in progress. Please use desktop as of now.)</span>
					</div>
				</Block>
				<RandomTiles usedSpaces={[
					[1, 13, 1, 2], // this is the page label grid area
					[4, 13, 2, 9]
				]} data={homeRandomTileData} randomize={true} />
			</SideBarIntro>
			<BlurrBackground imagePath="generic-backgrounds/joanna-kosinska-LAaSoL0LrYs-unsplash.jpg" />
		</main>
	);
}
