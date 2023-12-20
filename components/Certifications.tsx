import React from "react";
import Image from "next/image";
import Title from "./Title";
import { montserrat } from "../app/fonts";

const Cetifications = () => {
	return (
		<>
			<Title>Certifications</Title>
			<div className=" flex flex-wrap justify-center items-center gap-24 mt-28 xl:gap-48">
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
						GOOGLE PREMIER PARTNERS <br></br>
						<span>2016 - 2023</span>
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
						TOP AGENCIES IN CALIFORNIA <br></br>
						<span>2018 - 2023</span>
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
						GOOGLE PREMIER PARTNERS <br></br>
						<span>2016 - 2023</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Cetifications;
