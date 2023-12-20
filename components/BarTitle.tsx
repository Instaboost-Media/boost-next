import React, { FC, ReactNode } from "react";
import Title from "./Title";

type BarTitleProps = {
	children: ReactNode;
};

const BarTitle: FC<BarTitleProps> = ({ children }) => {
	return (
		<div className="bg-boost-tan-1 border-y-[2px] border-boost-black-2 overflow-hidden flex items-center p-4 justify-center">
			<Title>{children}</Title>
		</div>
	);
};

export default BarTitle;
