import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import InstaButton from "./InstaButton";

const Navbar = () => {
	return (
		<div className="bg-boost-tan-1 flex items-center p-7 border-y-[2px] border-boost-black-2 sticky top-0 z-10">
			<div className="lg:hidden">
				<HamburgerMenu />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Logo />
				</div>
			</div>
			<div className="hidden lg:block w-full">
				<div className="flex justify-around items-center">
					<Logo />
					<DesktopMenu />
					<InstaButton href="/example">Contact Us</InstaButton>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
