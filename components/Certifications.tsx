import React from "react";
import Image from "next/image";
import Title from "./Title";
import { avenir } from "../app/fonts";

const Cetifications = () => {
	return (
		<div id="certifications-section">
			<div className="mb-20 mx-auto flex justify-center"><p
					className={`italic text-center font-normal text-lg text-boost-black-1 max-w-[450px] lg:max-w-[600px] ${avenir.className} `}>
					Founded by ex-Facebookers and ex-Googlers, we have helped more than 100+ direct to consumer e-commerce brands scale.
				</p></div>
			<Title>Certifications</Title>
			<div className=" flex flex-wrap justify-center items-center gap-24 mt-28 xl:gap-48">
				<div
					className={`text-boost-black-1 font-medium text-center text-lg flex flex-col justify-center items-center ${avenir.className}`}>
					<Image
						src="/google.svg"
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-56"
					/>
					<p className="mt-6">
						GOOGLE PREMIER PARTNERS <br></br>
						<span>2016 - 2024</span>
					</p>
				</div>
				<div
					className={`text-boost-black-1 font-medium text-center text-lg flex flex-col justify-center items-center ${avenir.className}`}>
					<Image
						src="/clutch.svg"
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-56"
					/>
					<p className="mt-10">
						TOP AGENCIES IN CALIFORNIA <br></br>
						<span>2018 - 2024</span>
					</p>
				</div>
				<div
					className={`text-boost-black-1 font-medium text-center text-lg flex flex-col justify-center items-center ${avenir.className}`}>
					<Image
						src="/meta.svg"
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-56"
					/>
					<p className="mt-10">
						GOOGLE PREMIER PARTNERS <br></br>
						<span>2016 - 2024</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cetifications;
