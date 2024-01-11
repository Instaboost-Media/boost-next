import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import { avenir } from "../app/fonts";
import getWhyBoostPt1 from "@/data-handlers/whyBoostPt1";

const WhyBoostPt1 = async () => {
	const { heading, description, imageLink } = await getWhyBoostPt1();

	return (
		<div>

		
		<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
			<Image
				priority
				src={imageLink}
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-creative-img-square border-[2px] border-boost-black-1"
			/>
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left"}>{heading}</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${avenir.className} `}>
					{description}
				</p>
			</div>
		</div>
		<div className="flex flex-col-reverse justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
			
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left"}>E-Commerce Experts</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${avenir.className} `}>
					Based in Orange County, CA, we specialize in e-commerce and DTC brands, we house experienced buyers, creatives, and developers. Certified to work with platform partners, we focus on real conversions, real numbers, and tangible results. Clients achieve 7-11x ROAS in their first year with us!
				</p>
			</div>
			<Image
				src="https://boost.instaboostinc.com/wp-content/uploads/2024/01/beach.png"
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-img border-[2px] border-boost-black-1"
			/>
		</div>
		<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
			<Image
				src="https://boost.instaboostinc.com/wp-content/uploads/2024/01/desk.png"
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-img border-[2px] border-boost-black-1"
			/>
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left"}>Full-Stack Excellence</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${avenir.className} `}>
					As a full-funnel digital agency, we cover everything from landing pages to media buying, reporting, strategy, creatives, and copywriting. Your one-stop shop for expert solutions that consistently deliver excellence.
				</p>
			</div>
		</div>
		</div>
	);
};

export default WhyBoostPt1;
