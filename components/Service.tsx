"use client";
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import SubTitle from "./SubTitle";
import { montserrat } from "../app/fonts";

type ServiceProps = {
	flipped?: boolean;
};

const Service: FC<ServiceProps> = ({ flipped = false }) => {
	console.log(flipped);
	return (
		<div>
			<div
				className={`flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse ${
					flipped ? "lg:!flex-row" : ""
				}`}>
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
						harum, voluptas nesciunt dolore explicabo possimus sequi
						voluptatibus qui provident veniam architecto dolor veritatis
						recusandae voluptate? Voluptates, maxime. Dolores officiis ut omnis
						modi delectus, doloribus natus repellat rerum ad nihil ipsum?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Service;
