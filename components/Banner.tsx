import React from "react";
import { montserrat } from "../app/fonts";

const Banner = () => {
	return (
		<div className="banner-container h-auto lg:h-[765px] flex justify-center items-center py-16">
			<div className="flex flex-col justify-center items-center text-center gap-12 lg:gap-6 lg:flex-row w-[300px] lg:w-auto lg:max-w-[1400px]">
				<div className="flex-1 lg:mb-auto lg:pt-10">
					<h1 className="text-7xl text-boost-black-1 tracking-tight lg:text-right xl:text-[110px] font-thin">
						Ready To Scale?
					</h1>
				</div>
				<div className="flex-1 flex justify-center">
					<video
						id="bannerVideo"
						className="banner-visual border-[2px] border-boost-black-1"
						autoPlay
						loop
						muted
						playsInline
						src="https://shopify-gifs.s3.us-west-2.amazonaws.com/ad-creative/UC+Website+Gallery+Video_Update+(1).mp4"
						poster="//uppercasebrands.com/cdn/shop/files/home_banner_1_0_00_00_00_500x.png?v=1678183381"></video>
				</div>
				<div className="flex-1">
					<p
						className={`${montserrat.className} font-normal text-lg lg:text-left lg:text-2xl text-boost-black-1`}>
						We&apos;re a technology-backed e-commerce agency offering bold
						solutions for brands ready to 10x their growth.
					</p>
					<h1 className="font-border hidden lg:block text-7xl mt-10 tracking-tight lg:text-left xl:text-[110px] ">
						Ready To Scale?
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Banner;
