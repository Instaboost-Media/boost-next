import React, { FC, ReactNode } from "react";
import Image from "next/image";

type TitleProps = {
	children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
	return (
		<div className="flex items-center justify-center gap-3">
			<Image
				src="/star-solid.svg"
				width={0}
				height={0}
				alt="instaboost logo"
				className="w-8"
			/>
			<h2 className="text-3xl xs:text-[44px] text-boost-black-1 text-center font-semibold">
				{children}
			</h2>
			<Image
				src="/star-solid.svg"
				width={0}
				height={0}
				alt="instaboost logo"
				className="w-8"
			/>
		</div>
	);
};

export default Title;
