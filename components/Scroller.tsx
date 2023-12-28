import React from "react";
import { avenir } from "../app/fonts";

const Scroller = () => {
	return (
		<div className="h-14 bg-boost-tan-1  border-y-[2px] border-boost-black-2 overflow-hidden flex items-center p-4">
			<p
				className={`slider-bar whitespace-nowrap font-medium text-lg text-boost-black-1 ${avenir.className}`}>
				Growth strategy & technology for e-commerce companies. Growth strategy &
				technology for e-commerce companies. Growth strategy & technology for
				e-commerce companies. Growth strategy & technology for e-commerce
				companies. Growth strategy & technology for e-commerce companies. Growth
				strategy & technology for e-commerce companies. Growth strategy &
				technology for e-commerce companies. Growth strategy & technology for
				e-commerce companies. Growth strategy & technology for e-commerce
				companies. Growth strategy & technology for e-commerce companies.
			</p>
		</div>
	);
};

export default Scroller;
