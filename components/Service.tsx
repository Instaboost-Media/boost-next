import React from "react";
import Image from "next/image";
import SubTitle from "./SubTitle";
import { montserrat } from "../app/fonts";

const Service = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse">
				<Image
					src="/placeholder.webp"
					width={500}
					height={500}
					alt="instaboost logo"
					className="arch-creative-img-square border-[2px] border-boost-black-1"
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
		</div>
	);
};

export default Service;
