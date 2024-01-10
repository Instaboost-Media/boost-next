import React from "react";
import Title from "./Title";

import WhyBoostPt1 from "./WhyBoostPt1";
import WhyBoostPt2 from "./WhyBoostPt2";
import WhyBoostPt3 from "./WhyBoostPt3";

const WhyBoost = () => {
	return (
		<div id="why-boost-section" className="mt-36">
			<Title>Why Boost?</Title>
			<WhyBoostPt1 />
			<WhyBoostPt2 />
			<WhyBoostPt3 />
		</div>
	);
};

export default WhyBoost;
