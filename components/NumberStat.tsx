"use client";
import React from "react";
import AnimatedNumber from "./AnimatedNumber";
import { montserrat } from "../app/fonts";

interface HeroStatProps {
	text: string;
	number: number;
	plus?: boolean;
}

const HeroStat: React.FC<HeroStatProps> = ({ text, number, plus = false }) => {
	return (
		<div className="flex min-w-[205px] flex-col items-center justify-start text-classmate-green-1 sm:min-w-0 text-boost-black-1">
			{/* Animated number with optional plus sign */}
			<div
				data-number={number}
				id="number"
				className={`flex text-5xl font-semibold ${montserrat.className}`}>
				<AnimatedNumber n={number} />
				{`${plus ? "+" : ""}`}
			</div>
			{/* Display the text */}
			<p
				className={`max-w-[225px] text-center font-classmate-italic text-lg font-normal mt-6 ${montserrat.className}`}>
				{text}
			</p>
		</div>
	);
};

export default HeroStat;
