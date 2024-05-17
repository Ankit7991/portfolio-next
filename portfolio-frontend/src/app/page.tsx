import Image from "next/image";
import styles from "./page.module.css";
import SideBarIntro from "@/components/pages/sidebar-intro.pages";
import Block from "@/components/micro/block/block";
import LogoFindAnkit from "@/components/sections/logo/m.findankit";

export default function Home() {
  return (
		<main className="fluid">
      <SideBarIntro label="INTRO">
        <Block rowStart={3} rowEnd={13} colStart={2} colEnd={9}>
					<p>Hi, My name is</p>
					<h1>Ankit</h1>

					<div>
						<p>
							I am a full-stack web developer with 4+ years of experience in technologies like Node, React, and MySQL. 
						</p>
						<p>
							I’ve built and deployed projects in various domains like CRM, Fitness, Surveys, and Podcasts. 
						</p>
						<p>
	I'm a lifelong learner, constantly keeping pace with the latest industry trends. My passion lies in crafting robust and user-friendly web applications that deliver exceptional value. Throughout my career, I've honed my skills in both frontend and backend development through diverse projects. I thrive in collaborative environments that value innovation and teamwork.

						</p>
					</div>
        </Block>
      </SideBarIntro>
		</main>
  );
}
