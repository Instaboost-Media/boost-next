"use client";
import React, { FC, ReactNode, useRef } from "react";
import { montserrat } from "../app/fonts";

type MobileMenuItemProps = {
	idOfElement: string;
	children: ReactNode;
	closeMenu: () => void;
};

const MobileMenuItem: FC<MobileMenuItemProps> = ({
	children,
	idOfElement,
	closeMenu,
}) => {
	const handleClick = () => {
		closeMenu();
		scrollToElement();
	};

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
			type="button"
			onClick={handleClick}
			className={`w-full p-6 pl-0 text-lg font-normal text-left ${montserrat.className}`}>
			{children}
		</button>
	);
};

export default MobileMenuItem;
