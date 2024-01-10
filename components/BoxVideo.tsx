import React, { FC, ReactNode } from "react";
import Image from "next/image";

type BoxVideoProps = {
	src: string
	styleOverride: string
}

const BoxVideo: FC<BoxVideoProps> = ({src, styleOverride}) => {
	return (
		<div className="h-[360px] rounded-[43px] w-[260px] border-[2px] border-boost-black-1 overflow-hidden relative">
			<video
				id="bannerVideo"
				className={`object-cover absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styleOverride}`}
				autoPlay
				loop
				muted
				playsInline
				src={src}
				poster="">
			</video>
		</div>
	);
};

export default BoxVideo;
