"use client";
import React, { FC, ReactNode } from "react";
import { montserrat } from "../app/fonts";
import Link from "next/link";

type FooterItemProps = {
	href: string;
	children: ReactNode;
};

const FooterItem: FC<FooterItemProps> = ({ children, href }) => {
	return (
		<Link
			className={`whitespace-nowrap font-normal ${montserrat.className}`}
			href={href}>
			{children}
		</Link>
	);
};

export default FooterItem;
