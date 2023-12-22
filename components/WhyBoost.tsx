import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import Title from "./Title";
import { montserrat } from "../app/fonts";
import NumberStat from "./NumberStat";

const WhyBoost = () => {
	return (
		<div className="mt-36 ">
			<Title>Why InstaBoost?</Title>
			<div className="flex flex-col justify-center items-center gap-10 mt-24 lg:gap-28 lg:flex-row-reverse">
				<Image
					src="/placeholder.webp"
					width={500}
					height={500}
					alt="instaboost logo"
					className="arch-img border-[2px] border-boost-black-1"
				/>
				<div className="flex flex-col justify-center gap-10">
					<SubTitle styles={"lg:text-left"}>Lorem ipsum</SubTitle>
					<p
						className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${montserrat.className} `}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						accusantium maxime quas, voluptates molestias possimus ab magnam
						pariatur! Nihil earum sapiente vel.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:mt-40">
				<SubTitle>Our Track Record</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[750px] ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
					accusantium maxime quas.
				</p>
				<div className="flex flex-wrap justify-center gap-6 mt-6">
					<NumberStat
						text="Experts In Their Field And Growing"
						number={25}
						plus={true}
					/>
					<NumberStat text="And We're Not Done Yet" number={7} />
					<NumberStat text="Proud Partners To 18 Global Brands" number={18} />
					<NumberStat
						text="Year-Over-Year Increase And Continuing To Grow"
						number={52}
						plus={true}
					/>
				</div>
			</div>
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
		</div>
	);
};

export default WhyBoost;
