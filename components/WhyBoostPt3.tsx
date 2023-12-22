import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import { montserrat } from "../app/fonts";

const WhyBoostPt3 = () => {
	return (
		<div className="grid-container max-w-[1100px] mx-auto mt-20 lg:mt-40">
			<div className="mouth flex justify-center">
				<div className="lg:ml-auto w-[280px] lg:w-[450px] lg:h-[450px] rotate-12">
					<Image
						src="/mouth.webp"
						width={500}
						height={500}
						alt="instaboost logo"
						className="object-cover !h-full "
					/>
				</div>
			</div>
			<div className="ear flex justify-center relative mt-14 lg:mt-10">
				<Image
					src="/why-boost.png"
					width={500}
					height={500}
					alt="instaboost logo"
					className="absolute w-64 z-10 -top-28 lg:top-16 lg:-right-56 lg:w-[450px]"
				/>
				<Image
					src="/ear.webp"
					width={500}
					height={500}
					alt="instaboost logo"
					className="object-cover !h-full lg:mr-auto w-[280px] lg:w-[400px] -scale-x-100 -rotate-12"
				/>
			</div>
			<div className="software mt-16 lg:mt-0">
				<div className="flex flex-col justify-center items-center gap-10 lg:items-start ">
					<SubTitle>Our Software</SubTitle>
					<p
						className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] lg:text-left ${montserrat.className} `}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						accusantium maxime quas, voluptates molestias possimus ab magnam
						pariatur! Nihil earum sapiente vel.
					</p>
				</div>
			</div>
			<div className="creative mt-16 lg:mt-0">
				<div className="flex flex-col justify-center items-center gap-10 lg:items-end">
					<SubTitle>Our Creative</SubTitle>
					<p
						className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] lg:text-right ${montserrat.className} `}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						accusantium maxime quas, voluptates molestias possimus ab magnam
						pariatur! Nihil earum sapiente vel.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyBoostPt3;
