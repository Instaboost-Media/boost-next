import React from "react";
import Image from "next/image";

const Logo = () => {
	return (
		<Image
			src="/boost-brands-logo.png"
			width={500}
			height={500}
			alt="instaboost logo"
			className="w-44 flex"
		/>
	);
};

export default Logo;
