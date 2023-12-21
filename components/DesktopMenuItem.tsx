import React, { FC, ReactNode } from "react";
import { montserrat } from "../app/fonts";
import Link from "next/link";

type DesktopMenuItemProps = {
	href: string;
	children: ReactNode;
};

const DesktopMenuItem: FC<DesktopMenuItemProps> = ({ children, href }) => {
	return (
		<Link
			className={`whitespace-nowrap font-normal ${montserrat.className}`}
			href={href}>
			{children}
		</Link>
	);
};

export default DesktopMenuItem;
