import React, { FC } from "react";
import Image from "next/image";

type InstagramItemProps = {
	imgSrc: string;
};

const InstagramItem: FC<InstagramItemProps> = ({ imgSrc }) => {
	return (
		<div className="border-[1px] border-boost-black-2 relative">
			<div className="bg-black absolute w-full h-full bg-opacity-75 opacity-0 hover:opacity-100 transition-all flex justify-center items-center cursor-pointer">
				<Image
					src="instagram-white.svg"
					width={500}
					height={500}
					alt="instaboost logo"
					className="object-cover w-6"
				/>
			</div>
			<Image
				src={imgSrc}
				width={500}
				height={500}
				alt="instaboost logo"
				className="object-cover !h-full"
			/>
		</div>
	);
};

export default InstagramItem;
