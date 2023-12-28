import React, { FC } from "react";
import Image from "next/image";
import CheckItem from "./CheckItem";

type BundleProps = {
	title: string;
	price: number;
	icon: string;
};

const Bundle: FC<BundleProps> = ({ title, price, icon }) => {
	return (
		<div className="rounded-t-[180px] border-[2px] border-boost-black-1 max-w-[380px] mt-16">
			<div className="rounded-t-[180px] bg-boost-tan-1 flex justify-center flex-col items-center p-10 gap-6 relative">
				<div className="bg-white w-20 h-20 rounded-full flex justify-center items-center border-[2px] border-boost-black-1 absolute -top-10">
					<Image
						src={icon}
						width={0}
						height={0}
						alt="instaboost logo"
						className="w-10"
					/>
				</div>
				<h3
					className={`text-4xl leading-[36px] xs:text-[56px] xs:leading-[46px] font-semibold text-boost-black-1 text-center mt-8 `}>
					{title}
				</h3>
				<p className="text-4xl leading-[36px] text-boost-black-1 xs:text-5xl text-center">
					${price} <span className="text-xl xs:text-2xl">/month</span>
				</p>
			</div>
			<div className="p-10 border-t-[2px] border-boost-black-1 bg-white">
				<ul className="flex flex-col gap-4">
					<CheckItem>Lorem ipsum dolor sit.</CheckItem>
					<CheckItem>
						Lorem, ipsum dolor sit amet consectetur adipisicing.
					</CheckItem>
					<CheckItem>Lorem ipsum dolor sit amet.</CheckItem>
					<CheckItem>Lorem ipsum dolor sit amet consectetur.</CheckItem>
					<CheckItem>Lorem ipsum dolor sit.</CheckItem>
				</ul>
			</div>
		</div>
	);
};

export default Bundle;
