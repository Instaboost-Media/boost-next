import React from "react";
import Title from "./Title";
import Bundle from "./Bundle";
import { avenir } from "../app/fonts";

const BuildYourBundle = () => {
	return (
		<div
			id="bundles-section"
			className="bundles-container py-20 px-10 lg:py-24">
			<div className="flex flex-col items-center justify-center gap-10">
				<Title>Build Your Bundle</Title>
				<p
					className={`font-normal text-center text-boost-black-1 max-w-[650px] text-lg ${avenir.className}`}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusamus
					ea accusantium commodi, sit eaque nobis minus, quia dolorum temporibus
					harum, ad porro deleniti amet!
				</p>
			</div>

			<div className="flex justify-center flex-wrap items-center gap-8 mt-10">
				<Bundle title="Bronze" price={75} icon={"/chart-solid-1.svg"} />
				<Bundle title="Gold" price={150} icon={"/chart-solid-3.svg"} />
				<Bundle title="Silver" price={100} icon={"/chart-solid-2.svg"} />
			</div>
		</div>
	);
};

export default BuildYourBundle;
