import React, { FC, ReactNode } from "react";
import Link from "next/link";

type InstaButtonProps = {
	href: string;
	children: ReactNode;
};

const InstaButton: FC<InstaButtonProps> = ({ children, href }) => {
	return (
		<Link
			className="bg-white px-5 p-1 rounded-2xl border-[1px] border-boost-black-2 font text-lg whitespace-nowrap flex justify-center items-center"
			href={href}>
				<span className="pt-1">
			{children}
			</span>
		</Link>
	);
};

export default InstaButton;
