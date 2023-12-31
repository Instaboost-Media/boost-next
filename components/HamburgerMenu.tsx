"use client";
import React, { useState, FC } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { HamburgerMenuProps } from "@/models/navbar";

const HamburgerMenu: FC<HamburgerMenuProps> = ({ navItems }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = () => {
		setMenuOpen((current) => !current);
	};

	return (
		<>
			<button
				onClick={handleClick}
				className="flex justify-center items-center">
				<Image
					src="/hamburger-solid.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-5"
				/>
			</button>
			<MobileMenu
				menuOpen={menuOpen}
				handleClick={handleClick}
				navItems={navItems}
			/>
		</>
	);
};

export default HamburgerMenu;
