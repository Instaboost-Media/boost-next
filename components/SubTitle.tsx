import React, { FC, ReactNode } from "react";
import Image from "next/image";

type SubTitleProps = {
	children: ReactNode;
	styles?: string;
};

const SubTitle: FC<SubTitleProps> = ({ children, styles }) => {
	return (
		<h2
			className={`text-3xl font-semibold xs:text-4xl text-boost-black-1 text-center lg:text-4xl ${styles}`}>
			{children}
		</h2>
	);
};

export default SubTitle;
