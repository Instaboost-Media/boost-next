import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import Title from "./Title";
import { montserrat } from "../app/fonts";

const WhyBoost = () => {
	return (
		<div className="mt-36 ">
			<Title>Why InstaBoost?</Title>
			<div className="flex flex-col justify-center items-center gap-6 mt-20 lg:gap-28 lg:flex-row-reverse">
				<Image
					src="/placeholder.webp"
					width={500}
					height={500}
					alt="instaboost logo"
					className="arch-img border-[2px] border-boost-black-1"
				/>
				<div className="flex flex-col justify-center gap-6">
					<SubTitle styles={"lg:text-left"}>Lorem ipsum</SubTitle>
					<p
						className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${montserrat.className} `}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						accusantium maxime quas, voluptates molestias possimus ab magnam
						pariatur! Nihil earum sapiente vel.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20">
				<SubTitle>Our Track Record</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
					accusantium maxime quas, voluptates molestias possimus ab magnam
					pariatur! Nihil earum sapiente vel.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20 ">
				<SubTitle>Our Software</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
					accusantium maxime quas, voluptates molestias possimus ab magnam
					pariatur! Nihil earum sapiente vel.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 mt-20">
				<SubTitle>Our Creative</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
					accusantium maxime quas, voluptates molestias possimus ab magnam
					pariatur! Nihil earum sapiente vel.
				</p>
			</div>
		</div>
	);
};

export default WhyBoost;
