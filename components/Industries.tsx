import React from "react";
import BarTitle from "./BarTitle";
import Image from "next/image";

const Industries = () => {
	return (
		<div
			id="industries-section"
			className="industries-container text-boost-black-1">
			<BarTitle>Industries</BarTitle>
			<div className="flex justify-center flex-col px-10 lg:flex-row gap-20 py-20 lg:py-24 xl:gap-48 text-center">
				<div className="flex justify-end flex-col gap-20 lg:flex-col-reverse">
					<div className="flex justify-center flex-col items-center gap-20 lg:flex-col-reverse">
						<Image
							src="/placeholder.svg"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-square border-[2px] border-boost-black-1"
						/>
						<h3 className="text-3xl xl:text-4xl font-semibold">
							Food & Beverage
						</h3>
					</div>
					<div className="flex justify-center flex-col items-center gap-20 lg:flex-col-reverse">
						<Image
							src="/placeholder.svg"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-upsidedown border-[2px] border-boost-black-1"
						/>
						<h3 className="text-3xl xl:text-4xl font-semibold">
							Skincare & Beauty
						</h3>
					</div>
				</div>
				<div className="flex justify-center flex-col gap-20 lg:gap-28 lg:flex-col-reverse xl:gap-24">
					<div className="flex justify-center flex-col items-center gap-20 lg:gap-16 lg:flex-col-reverse">
						<Image
							src="/placeholder.svg"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-tilt border-[2px] border-boost-black-1"
						/>
						<h3 className="text-3xl xl:text-4xl font-semibold">
							Fashion & Apparel
						</h3>
					</div>
					<div className="flex justify-center flex-col items-center gap-20 lg:gap-16 lg:flex-col-reverse">
						<Image
							src="/placeholder.svg"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-square border-[2px] border-boost-black-1"
						/>
						<h3 className="text-3xl xl:text-4xl font-semibold">
							Jewelry & Accessories
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industries;
