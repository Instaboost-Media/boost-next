import React from "react";
import Title from "@/components/Title";
import { avenir } from "../app/fonts";
import Service from "./Service";

const CreativeServices = () => {
	return (
		<div
			id="services-section"
			className="bg-boost-tan-1 border-y-[2px] border-boost-black-2 py-20 px-10 lg:py-24">
			<div>
				<Title>Creative Services</Title>
				<p
					className={`mx-auto text-center font-normal mt-10 max-w-3xl text-boost-black-1 text-lg ${avenir.className}`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem error ab
					a eius quis sequi porro? <br></br>
					<span className="font-bold">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit!
					</span>
				</p>
			</div>
			<div>
				<Service />
				<Service flipped={true} />
				<Service />
				<Service flipped={true} />
			</div>
		</div>
	);
};

export default CreativeServices;
