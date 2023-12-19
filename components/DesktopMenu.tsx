import React from "react";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = () => {
	return (
		<ul className="flex justify-around w-full max-w-[1100px] px-10 gap-6">
			<DesktopMenuItem href={"/example"}>Home</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>About</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>Creative</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>Case Studies</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>Services</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>Blog</DesktopMenuItem>
			<DesktopMenuItem href={"/example"}>Tech</DesktopMenuItem>
		</ul>
	);
};

export default DesktopMenu;
