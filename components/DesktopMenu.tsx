import React from "react";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = () => {
	return (
		<ul className="flex justify-around w-full max-w-[1100px] px-10 gap-6">
			<DesktopMenuItem idOfElement={"certifications-section"}>
				Certifications
			</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"why-boost-section"}>
				Why Boost
			</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"case-studies-section"}>
				Case Studies
			</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"bundles-section"}>Bundles</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"industries-section"}>
				Industries
			</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"platform-section"}>
				Platforms
			</DesktopMenuItem>
			<DesktopMenuItem idOfElement={"services-section"}>
				Services
			</DesktopMenuItem>
		</ul>
	);
};

export default DesktopMenu;
