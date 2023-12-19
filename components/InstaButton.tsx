import React, { FC, ReactNode } from "react";
import Link from "next/link";

type InstaButtonProps = {
	href: string;
	children: ReactNode;
};

const InstaButton: FC<InstaButtonProps> = ({ children, href }) => {
	return (
		<Link
			className="bg-white px-5 p-2 rounded-2xl border-[1px] border-black font text-lg"
			href={href}>
			{children}
		</Link>
	);
};

export default InstaButton;
