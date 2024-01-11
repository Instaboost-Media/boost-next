// @ts-nocheck
'use client'
import React, { useState } from "react";
import PopupMobile from "./PopupMobile";


const InstaButton = () => {
	const [openPopup, setOpenPopup] = useState(false)

	const handlePopup = () => {
		setOpenPopup((current) => !current)
	}


	return (
		<>
		<PopupMobile handlePopup={handlePopup} openPopup={openPopup}/>
		<button
			onClick={handlePopup}
			
			className="bg-white px-5 p-1 rounded-2xl border-[1px] border-boost-black-2 font text-lg whitespace-nowrap flex justify-center items-center"
			>
				<span className="pt-1">
			Contact Us
			</span>
		</button>
		</>
	);
};

export default InstaButton;
