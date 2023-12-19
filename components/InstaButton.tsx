import React, { FC, ReactNode } from "react";
import Link from "next/link";

type InstaButtonProps = {
	href: string;
	children: ReactNode;
};

const InstaButton: FC<InstaButtonProps> = ({ children, href }) => {
	return (
		<Link
			className="bg-white px-5 p-1 rounded-2xl border-[1px] border-boost-black-1 font text-lg whitespace-nowrap"
			href={href}>
			{children}
		</Link>
	);
};

export default InstaButton;
