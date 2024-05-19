'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import SideBarIntro from "@/components/pages/sidebar-intro.pages";
import Block from "@/components/micro/block/block";
import LogoFindAnkit from "@/components/sections/logo/m.findankit";
import { useEffect, useMemo, useState } from "react";
import { useRandomPositions } from "@/hooks/get-random-positions.hook";

const gte = (a: number, ref: number) => typeof(ref) === 'number' ? a >= ref : false;
const lte = (b: number, ref: number) => typeof(ref) === 'number' ? b <= ref : false;
const btwn = (max: number, min: number, ref: number) => gte(max, ref) && lte(min, ref);


export default function Home() {

	const {freeSpaces, randomSpaces} = useRandomPositions([{text: 'ankit'}, {text: 'node'}], [
    [3, 13, 2, 9],
    [1, 13, 1, 2],
    [5, 6, 10, 11],
  ]);

  return (
    <main className="fluid">
      <SideBarIntro label="INTRO">
        <Block rowStart={3} rowEnd={13} colStart={2} colEnd={9}>
          <div className={styles.info}>
            <p>Hi, My name is</p>
            <h1 className={styles.name}>Ankit</h1>

            <div>
              <p>
                <span className={styles.mid}>I am a full-stack web developer.</span>
              </p>
              <p>
                I’ve built and deployed projects in various domains like CRM,
                Fitness, Surveys, and Podcasts.
              </p>
              <p>
                I'm a lifelong learner, constantly keeping pace with the latest
                industry trends. My passion lies in crafting robust and
                user-friendly web applications that deliver exceptional value.
                Throughout my career, I've honed my skills in both frontend and
                backend development through diverse projects. I thrive in
                collaborative environments that value innovation and teamwork.
              </p>
            </div>
          </div>
        </Block>
				{
					randomSpaces?.map(el => {
						
						return <>
							<Block rowStart={el.rowLine} colStart={el.colLine}>
								{el.info?.text}
							</Block>
						</>
					})
				}
      </SideBarIntro>
    </main>
  );
}
