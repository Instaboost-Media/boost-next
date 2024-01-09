import React from "react";
import Logo from "../components/Logo";
import Image from "next/image";
import SocialButton from "./SocialButton";
import FooterMenuItem from "./FooterMenuItem";
import { avenir } from "../app/fonts";

const Footer = () => {
	return (
		<div className="bg-boost-tan-1 border-b-[2px] border-boost-black-2 pb-16">
			<div className="border-b-[2px] border-boost-black-2 w-full flex justify-center">
				<div className="p-8 bg-boost-tan-1 translate-y-10">
					<Logo />
				</div>
			</div>
			<div className="pt-20 lg:hidden">
				<div className="flex flex-col items-center gap-6">
					<p className={`font-normal ${avenir.className}`}>Follow Us</p>
					<div className="flex gap-6">
						<SocialButton href="/example" imgSrc="/instagram.svg" />
						<SocialButton href="/example" imgSrc="/facebook.svg" />
						<SocialButton href="/example" imgSrc="/linkedin-in.svg" />
					</div>
				</div>
			</div>
			<div className="flex mt-16 lg:mt-20">
				<div className="grow flex flex-col justify-center items-center gap-10">
					<Image
						src="/google.svg"
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-24"
					/>
					<div className="flex flex-col gap-5 items-center">
						<FooterMenuItem idOfElement={"certifications-section"}>
							Certifications
						</FooterMenuItem>
						<FooterMenuItem idOfElement={"why-boost-section"}>
							Why Boost
						</FooterMenuItem>
						<FooterMenuItem idOfElement={"case-studies-section"}>
							Case Studies
						</FooterMenuItem>
					</div>
				</div>
				<div className="grow hidden lg:flex flex-col justify-between max-w-[800px]">
					<div className="flex flex-col items-center gap-6">
						<p className={`font-normal ${avenir.className}`}>Follow Us</p>
						<div className="flex gap-6">
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
					<p className={`font-normal text-center ${avenir.className}`}>
						Copyright © 2023 InstaBoost Media. All Rights Reserved. Designed by
						InstaBoost Media.
					</p>
				</div>
				<div className="grow flex flex-col justify-center items-center gap-10">
					<Image
						src="/meta.svg"
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-24"
					/>
					<div className="flex flex-col gap-5 items-center">
						<FooterMenuItem idOfElement={"bundles-section"}>
							Bundles
						</FooterMenuItem>
						<FooterMenuItem idOfElement={"industries-section"}>
							Industries
						</FooterMenuItem>
						<FooterMenuItem idOfElement={"platform-section"}>
							Platforms
						</FooterMenuItem>
						<FooterMenuItem idOfElement={"services-section"}>
							Services
						</FooterMenuItem>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-16 px-10 lg:hidden">
				<p className={`font-normal text-center ${avenir.className}`}>
					Copyright © 2023 InstaBoost Media. All Rights Reserved. Designed by
					InstaBoost Media.
				</p>
			</div>
		</div>
	);
};

export default Footer;
