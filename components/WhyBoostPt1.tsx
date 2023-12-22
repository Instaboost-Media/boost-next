import React from "react";
import SubTitle from "./SubTitle";
import Image from "next/image";
import { montserrat } from "../app/fonts";

const WhyBoostPt1 = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
			<Image
				src="/placeholder.svg"
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-img border-[2px] border-boost-black-1"
			/>
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left"}>Lorem ipsum</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] lg:text-left ${montserrat.className} `}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi
					illo in quidem reiciendis non repellat facere, inventore aliquid vel,
					quis laboriosam velit quia repudiandae, sint asperiores? Dolor saepe,
					id voluptates sequi laudantium provident excepturi eaque, quam fugit,
					numquam nam.
				</p>
			</div>
		</div>
	);
};

export default WhyBoostPt1;
