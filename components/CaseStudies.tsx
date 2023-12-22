import React from "react";
import BoxVideo from "./BoxVideo";
import Title from "./Title";

const CaseStudies = () => {
	return (
		<div className="bg-boost-tan-1 pt-16 pb-20 px-10 border-y-[2px] border-boost-black-2 ">
			<Title>Case Studies</Title>
			<div className="flex justify-center gap-4 flex-wrap mt-16">
				<BoxVideo />
				<BoxVideo />
				<BoxVideo />
				<BoxVideo />
			</div>
		</div>
	);
};

export default CaseStudies;
