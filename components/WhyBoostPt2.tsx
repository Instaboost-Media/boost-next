"use client";
import React, { useRef } from "react";
import NumberStat from "./NumberStat";
import SubTitle from "./SubTitle";
import { avenir } from "../app/fonts";
import useIsInWindow from "@/hooks/useInWindow";

const WhyBoostPt2 = () => {
	const elementRef = useRef<HTMLDivElement>(null);
	const isInWindow = useIsInWindow(elementRef);

	return (
		<div
			ref={elementRef}
			className="flex flex-col justify-center items-center gap-10 mt-20 lg:mt-36">
			<SubTitle>Our Track Record</SubTitle>
			<p
				className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${avenir.className} `}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
				accusantium maxime quas.
			</p>
			{isInWindow ? (
				<div className="flex flex-wrap justify-center gap-6 mt-6">
					<NumberStat
						text="Experts In Their Field And Growing"
						number={25}
						plus={true}
					/>
					<NumberStat text="And We're Not Done Yet" number={7} />
					<NumberStat text="Proud Partners To 18 Global Brands" number={18} />
					<NumberStat
						text="Year-Over-Year Increase And Continuing To Grow"
						number={52}
						plus={true}
					/>
				</div>
			) : (
				// Placeholder when component is not in the viewport
				<div className="h-[165px] w-full"></div>
			)}
		</div>
	);
};

export default WhyBoostPt2;
