import React from "react";
import Image from "next/image";

const BoxVideo = () => {
	return (
		<div className="h-[360px] rounded-[43px] w-[260px] border-[2px] border-boost-black-1 overflow-hidden">
			<Image
				src="/placeholder.webp"
				width={500}
				height={500}
				alt="instaboost logo"
				className="object-cover !h-full"
			/>
		</div>
	);
};

export default BoxVideo;
