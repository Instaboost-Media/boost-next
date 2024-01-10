"use client";
import React from "react";
import AnimatedNumber from "./AnimatedNumber";
import { avenir } from "../app/fonts";

interface NumberStatProps {
	number: number;
	numberText?: string;
	text: string;
}

const NumberStat: React.FC<NumberStatProps> = ({ number, numberText, text}) => {
	return (
		<div className="flex min-w-[205px] flex-col items-center justify-start sm:min-w-0 text-boost-black-1grow w-1/4 px-5" >
			{/* Animated number with optional plus sign */}
			<div
				data-number={number}
				id="number"
				className={`flex text-5xl font-semibold ${avenir.className}`}>
				<AnimatedNumber n={number} />
				<p className="text-3xl flex items-center ml-1">{numberText}</p>
			</div>
			{/* Display the text */}
			<p
				className={`max-w-[225px] text-center font-classmate-italic text-lg font-normal mt-6 ${avenir.className}`}>
				{text}
			</p>
		</div>
	);
};

export default NumberStat;
