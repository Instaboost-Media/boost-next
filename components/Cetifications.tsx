import React from "react";
import Image from "next/image";
import Title from "./Title";
import { montserrat } from "../app/fonts";

const Cetifications = () => {
	return (
		<div className="cetifications-container flex flex-col justify-center items-center p-16 gap-24">
			<Title>Certifications</Title>
			<div
				className={`text-boost-black-1 font-medium text-center flex flex-col justify-center items-center ${montserrat.className}`}>
				<Image
					src="/google.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<p className="mt-6">
					GOOGLE PREMIER PARTNERS <span>2016 - 2023</span>
				</p>
			</div>
			<div
				className={`text-boost-black-1 font-medium text-center flex flex-col justify-center items-center ${montserrat.className}`}>
				<Image
					src="/clutch.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<p className="mt-10">
					TOP AGENCIES IN CALIFORNIA <span>2018 - 2023</span>
				</p>
			</div>
			<div
				className={`text-boost-black-1 font-medium text-center flex flex-col justify-center items-center ${montserrat.className}`}>
				<Image
					src="/meta.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<p className="mt-10">
					GOOGLE PREMIER PARTNERS <span>2016 - 2023</span>
				</p>
			</div>
		</div>
	);
};

export default Cetifications;
