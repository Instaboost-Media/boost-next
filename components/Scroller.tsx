import React from "react";
import { avenir } from "../app/fonts";
import getScrollerText from "@/data-handlers/scroller";

const Scroller = async () => {
	const { text } = await getScrollerText();

	return (
		<div className="h-14 bg-boost-tan-1  border-y-[2px] border-boost-black-2 overflow-hidden flex items-center p-4">
			<p
				className={`slider-bar whitespace-nowrap font-medium text-lg text-boost-black-1 ${avenir.className}`}>
				{text}
			</p>
		</div>
	);
};

export default Scroller;
