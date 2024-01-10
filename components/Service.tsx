"use client";
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import SubTitle from "./SubTitle";
import { avenir } from "../app/fonts";

type ServiceProps = {
	title: string,
	description: string,
	flipped?: boolean;
};

const Service: FC<ServiceProps> = ({ title, description, flipped = false }) => {
	return (
		<div
			className={`flex flex-col justify-center items-center gap-10 mt-20 lg:gap-28 lg:flex-row-reverse ${
				flipped ? "lg:!flex-row" : ""
			}`}>
			<Image
				src="/placeholder.svg"
				width={500}
				height={500}
				alt="instaboost logo"
				className="arch-creative-img-square border-[2px] border-boost-black-1"
			/>
			<div className="flex flex-col justify-center gap-10">
				<SubTitle styles={"lg:text-left max-w-[450px] lg:max-w-[650px]"}>{title}</SubTitle>
				<p
					className={` text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[650px] lg:text-left ${avenir.className} `}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Service;
