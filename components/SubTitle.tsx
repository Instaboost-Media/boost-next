import React, { FC, ReactNode } from "react";
import Image from "next/image";

type SubTitleProps = {
	children: ReactNode;
};

const SubTitle: FC<SubTitleProps> = ({ children }) => {
	return (
		<h2 className="text-3xl xs:text-4xl text-boost-black-1 text-center">
			{children}
		</h2>
	);
};

export default SubTitle;
