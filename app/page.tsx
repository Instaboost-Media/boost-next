import React from "react";
import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Scroller from "@/components/Scroller";

import WhyBoost from "@/components/WhyBoost";
import Certifications from "@/components/Certifications";
import CaseStudies from "@/components/CaseStudies";
import BuildYourBundle from "@/components/BuildYourBundle";
import Industries from "@/components/Industries";
import Platforms from "@/components/Platforms";
import CreativeServices from "@/components/CreativeServices";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
	title: "Boost Brands",
	description: "We’re a marketing agency offering bold solutions for brands ready to 10x their growth.",
};

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<Banner />
			<Scroller />
			<div className="cetifications-container">
				<div className="px-10 py-20 lg:pt-28 lg:pb-36">
					<Certifications />
					<WhyBoost />
				</div>
			</div>
			<CaseStudies />
			<BuildYourBundle />
			<Industries />
			<Platforms />
			<CreativeServices />
			<InstagramFeed />
			<Footer />
		</div>
	);
}
