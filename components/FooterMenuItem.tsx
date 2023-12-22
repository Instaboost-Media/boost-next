"use client";
import React, { FC, ReactNode } from "react";
import { montserrat } from "../app/fonts";
import Link from "next/link";

type FooterItemProps = {
	idOfElement: string;
	children: ReactNode;
};

const FooterItem: FC<FooterItemProps> = ({ children, idOfElement }) => {
	// Function to handle the scroll when the button is clicked
	const scrollToElement = () => {
		// Get the element by its ID
		const element = document.getElementById(idOfElement);

		// Check if the element is not null before attempting to scroll
		if (element) {
			const offset = -150; // Set the desired offset value
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const scrollTo = elementPosition + offset;

			window.scrollTo({
				top: scrollTo,
				behavior: "smooth",
			});
		}
	};

	return (
		<button
			onClick={scrollToElement}
			type="button"
			className={`whitespace-nowrap font-normal ${montserrat.className}`}>
			{children}
		</button>
	);
};

export default FooterItem;
