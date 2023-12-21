import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Scroller from "@/components/Scroller";

import React from "react";
import WhyBoost from "@/components/WhyBoost";
import Certifications from "@/components/Certifications";
import CaseStudies from "@/components/CaseStudies";
import BuildYourBundle from "@/components/BuildYourBundle";
import Industries from "@/components/Industries";
import Platforms from "@/components/Platforms";
import CreativeServices from "@/components/CreativeServices";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<Banner />
			<Scroller />
			<div className="cetifications-container">
				<div className=" p-16 pb-28 lg:p-20 lg:pb-28">
					<Certifications />
					<WhyBoost />
				</div>
			</div>
			<CaseStudies />
			<BuildYourBundle />
			<Industries />
			<Platforms />
			<CreativeServices />
			<Footer />
		</div>
	);
}
