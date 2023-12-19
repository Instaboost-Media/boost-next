import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<div className="bg-boost-tan-1 flex relative items-center p-7 border-t-[1px] border-b-[1px] border-boost-black-1">
			<HamburgerMenu />

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<Logo />
			</div>
		</div>
	);
};

export default Navbar;
