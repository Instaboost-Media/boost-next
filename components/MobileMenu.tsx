"use client";
import React, { FC } from "react";
import Image from "next/image";
import MobileMenuItem from "./MobileMenuItem";
import InstaButton from "./InstaButton";
import SocialButton from "./SocialButton";

type MobileMenuProps = {
	menuOpen: boolean;
	handleClick: () => void;
};

const MovileMenu: FC<MobileMenuProps> = ({ menuOpen, handleClick }) => {
	return (
		<div
			className={`w-[310px] h-full bg-boost-tan-1 fixed left-[-310px] top-0 z-10 transition-all duration-300 border-[2px] border-boost-black-1 ${
				menuOpen ? "!left-0" : ""
			}`}>
			<div className="flex flex-col h-full overflow-y-auto">
				<div className="p-8">
					<button onClick={handleClick}>
						<Image
							src="/xmark-solid.svg"
							width={0}
							height={0}
							alt="instaboost logo"
							className="w-4"
						/>
					</button>
				</div>
				<div className="">
					<ul className="px-8 flex flex-col">
						<MobileMenuItem href={"/example"}>Home</MobileMenuItem>
						<MobileMenuItem href={"/example"}>About</MobileMenuItem>
						<MobileMenuItem href={"/example"}>Creative</MobileMenuItem>
						<MobileMenuItem href={"/example"}>Case Studies</MobileMenuItem>
						<MobileMenuItem href={"/example"}>Services</MobileMenuItem>
						<MobileMenuItem href={"/example"}>Blog</MobileMenuItem>
						<MobileMenuItem href={"/example"}>Tech</MobileMenuItem>
					</ul>
					<div className="p-8">
						<InstaButton href="/example">Contact Us</InstaButton>
					</div>
				</div>

				<div className="p-8  mt-auto sticky bottom-0 border-t-[2px] border-boost-black-1 bg-boost-tan-1 flex justify-around">
					<SocialButton href="/example" imgSrc="/instagram.svg" />
					<SocialButton href="/example" imgSrc="/facebook.svg" />
					<SocialButton href="/example" imgSrc="/linkedin-in.svg" />
				</div>
			</div>
		</div>
	);
};

export default MovileMenu;
