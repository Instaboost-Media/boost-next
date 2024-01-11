import React, { FC } from "react";
import Image from "next/image";
import MobileMenuItem from "./MobileMenuItem";
import InstaButtonMobile from "./InstaButtonMobile";
import SocialButton from "./SocialButton";
import { MobileMenuProps } from "@/models/navbar";

const MovileMenu: FC<MobileMenuProps> = ({
	menuOpen,
	handleClick,
	navItems,
}) => {
	return (
		<div
			className={`w-[310px] z-30 h-full bg-boost-tan-1 fixed left-[-310px] top-0 transition-all duration-300 border-[2px] border-boost-black-2 ${
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
							className="w-4 pointer-events-none"
						/>
					</button>
				</div>
				<div className="">
				<div className="p-8">
						<InstaButtonMobile/>
					</div>
					<ul className="px-8 flex flex-col">
						{navItems.map(({ text, sectionId }, index) => (
							<MobileMenuItem
								key={index}
								idOfElement={sectionId}
								closeMenu={handleClick}>
								{text}
							</MobileMenuItem>
						))}
					</ul>

				</div>

				<div className="p-8  mt-auto sticky bottom-0 border-t-[2px] border-boost-black-2 bg-boost-tan-1 flex justify-around">
				<SocialButton
								href="https://www.instagram.com/instaboostmedia.inc/"
								imgSrc="/instagram.svg"
							/>
							<SocialButton
								href="https://www.tiktok.com/@instaboostmedia"
								imgSrc="/tiktok-logo.svg"
							/>
							<SocialButton
								href="https://www.linkedin.com/company/instaboost-media"
								imgSrc="/linkedin-in.svg"
							/>
				</div>
			</div>
		</div>
	);
};

export default MovileMenu;
