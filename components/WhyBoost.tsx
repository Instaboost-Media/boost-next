import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import Title from "./Title";
import { montserrat } from "../app/fonts";

const WhyBoost = () => {
	return (
		<div className="mt-36 ">
			<Title>Why InstaBoost?</Title>
			<div className="flex flex-col justify-center items-center gap-6 mt-20">
				<Image
					src="/placeholder.webp"
					width={500}
					height={500}
					alt="instaboost logo"
					className="banner-visual border-[2px] border-boost-black-1"
				/>
				<SubTitle>Lorem ipsum</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
					dolor necessitatibus. Ea, sed voluptate?
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20">
				<SubTitle>Our Track Record</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
					dolor necessitatibus. Ea, sed voluptate?
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20 ">
				<SubTitle>Our Track Software</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
					dolor necessitatibus. Ea, sed voluptate?
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20">
				<SubTitle>Our Creative</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
					dolor necessitatibus. Ea, sed voluptate?
				</p>
			</div>
		</div>
	);
};

export default WhyBoost;
