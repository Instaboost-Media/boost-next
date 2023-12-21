import React from "react";
import BarTitle from "./BarTitle";
import Image from "next/image";

const Industries = () => {
	return (
		<div className="industries-container text-boost-black-1">
			<BarTitle>Industries</BarTitle>
			<div className="flex justify-center flex-col lg:flex-row gap-20 py-20 xl:gap-48">
				<div className="flex justify-end flex-col gap-20 lg:flex-col-reverse">
					<div className="flex justify-center flex-col items-center gap-20 lg:flex-col-reverse">
						<Image
							src="/placeholder.webp"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-square border-[2px] border-boost-black-1"
						/>
						<h3 className="text-4xl xl:text-5xl">Food & Beverage</h3>
					</div>
					<div className="flex justify-center flex-col items-center gap-20 lg:flex-col-reverse">
						<Image
							src="/placeholder.webp"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-upsidedown border-[2px] border-boost-black-1"
						/>
						<h3 className="text-4xl xl:text-5xl">Skincare & Beauty</h3>
					</div>
				</div>
				<div className="flex justify-center flex-col gap-20 lg:gap-28 lg:flex-col-reverse xl:gap-24">
					<div className="flex justify-center flex-col items-center gap-20 lg:gap-16 lg:flex-col-reverse">
						<Image
							src="/placeholder.webp"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-tilt border-[2px] border-boost-black-1"
						/>
						<h3 className="text-4xl xl:text-5xl">Fashion & Apparel</h3>
					</div>
					<div className="flex justify-center flex-col items-center gap-20 lg:gap-16 lg:flex-col-reverse">
						<Image
							src="/placeholder.webp"
							width={500}
							height={500}
							alt="instaboost logo"
							className="arch-img-square border-[2px] border-boost-black-1"
						/>
						<h3 className="text-4xl xl:text-5xl">Jewelry & Accessories</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Industries;