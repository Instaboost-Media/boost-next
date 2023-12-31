import React, { FC } from "react";
import Image from "next/image";

type SocialButtonProps = {
	href: string;
	imgSrc: string;
};

const SocialButton: FC<SocialButtonProps> = ({ href, imgSrc }) => {
	return (
		<a target="_blank" className="flex items-center justify-center" href={href}>
			<Image
				src={imgSrc}
				width={500}
				height={500}
				alt="instaboost logo"
				className="w-8 h-8"
			/>
		</a>
	);
};

export default SocialButton;
