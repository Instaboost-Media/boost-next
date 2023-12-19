import React from "react";
import Image from "next/image";

const Logo = () => {
	return (
		<Image
			src="/boost-logo.svg"
			width={0}
			height={0}
			alt="instaboost logo"
			className="w-24"
		/>
	);
};

export default Logo;
