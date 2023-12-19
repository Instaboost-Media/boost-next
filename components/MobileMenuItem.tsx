"use client";
import React, { FC, ReactNode } from "react";
import { montserrat } from "../app/fonts";
import Link from "next/link";

type MobileMenuItemProps = {
	href: string;
	children: ReactNode;
};

const MobileMenuItem: FC<MobileMenuItemProps> = ({ children, href }) => {
	return (
		<Link
			className={`w-full p-6 pl-0 text-lg ${montserrat.className}`}
			href={href}>
			{children}
		</Link>
	);
};

export default MobileMenuItem;
