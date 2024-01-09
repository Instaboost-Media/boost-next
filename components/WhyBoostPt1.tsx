import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import { avenir } from "../app/fonts";
import getWhyBoostPt1 from "@/data-handlers/whyBoostPt1";

const WhyBoostPt1 = async () => {
	const { heading, description, imageLink } = await getWhyBoostPt1();

	return (
		<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
			<Image
				src={imageLink}
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-img border-[2px] border-boost-black-1"
			/>
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left"}>{heading}</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${avenir.className} `}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default WhyBoostPt1;
