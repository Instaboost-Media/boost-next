"use client";
import React, { useRef, useEffect, useState } from "react";
import NumberStat from "./NumberStat";
import SubTitle from "./SubTitle";
import { avenir } from "../app/fonts";
import useIsInWindow from "@/hooks/useInWindow";
import  {parseData, parseStats } from "@/data-handlers/whyBoostPt2"
import {whyBoostPt2Section, Stat} from '@/models/whyBoostPt2'

const initialHeadingData: whyBoostPt2Section = {
	heading: '',
	description: '',
  };

const initialStatData: Stat[] = [];

const WhyBoostPt2 = () => {
	const elementRef = useRef<HTMLDivElement>(null);
	const isInWindow = useIsInWindow(elementRef);

	const [headingData, setHeadingData] = useState<whyBoostPt2Section>(initialHeadingData)
	const [statData, setStatData] = useState<Stat[]>(initialStatData)

	useEffect(() => {
		(async () => {
			const res = await fetch('https://boost.instaboostinc.com/wp-json/wp/v2/posts/1');
			const jsonData = await res.json();

			const parsedHeading = parseData(jsonData);
			const parsedStats = parseStats(jsonData);

			setHeadingData(parsedHeading)
			setStatData(parsedStats)
		  })();
		
	}, [])
	
	return (
		<div
			ref={elementRef}
			className="flex flex-col justify-center items-center gap-10 mt-20 lg:mt-36">
			<SubTitle>{headingData.heading}</SubTitle>
			<p
				className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${avenir.className} `}>
				{headingData.description}
			</p>
			{isInWindow ? (
				<div className="flex flex-wrap justify-center gap-6 mt-6">
					{statData.map((stat, index) => <NumberStat  key={index} number={stat.number} text={stat.description}/>)}
				</div>
			) : (
				<div className="h-[165px] w-full"></div>
			)}
		</div>
	);
};

export default WhyBoostPt2;
