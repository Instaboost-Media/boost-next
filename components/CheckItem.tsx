import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { montserrat } from "../app/fonts";

type CheckItemProps = {
	children: ReactNode;
};

const CheckItem: FC<CheckItemProps> = ({ children }) => {
	return (
		<li className="flex items-center gap-3">
			<div className="bg-[#FBE4E9] w-8 h-8 min-w-8 rounded-full flex justify-center items-center border-[1px] border-boost-black-1">
				<Image
					src="/check-solid.svg"
					width={0}
					height={0}
					alt="instaboost logo"
					className="w-4"
				/>
			</div>
			<p className={` font-normal ${montserrat.className}`}>{children}</p>
		</li>
	);
};

export default CheckItem;
