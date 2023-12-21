import React from "react";
import BarTitle from "./BarTitle";
import Image from "next/image";

const Platforms = () => {
	return (
		<div className="industries-container text-boost-black-1">
			<BarTitle>Platforms</BarTitle>
			<div className="flex justify-center flex-wrap p-20 gap-16 max-w-[1000px] mx-auto">
				<Image
					src="/google.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<Image
					src="/meta.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<Image
					src="/shopify.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<Image
					src="/tiktok.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<Image
					src="/instagram-text.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
				<Image
					src="/youtube.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-56"
				/>
			</div>
		</div>
	);
};

export default Platforms;
