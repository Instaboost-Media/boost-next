// @ts-nocheck
'use client'
import React, { useState, useEffect } from "react";
import Popup from "./Popup";


const InstaButton = () => {
	const [openPopup, setOpenPopup] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setOpenPopup(true)
		}, 60000)
	}, [])

	const handlePopup = () => {
		setOpenPopup((current) => !current)
	}


	return (
		<>
		<Popup handlePopup={handlePopup} openPopup={openPopup}/>
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
