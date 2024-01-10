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
			<div className="flex justify-center flex-wrap gap-8 mt-10">
				<Bundle title="Mini Boost" price={4999} icon={"/chart-solid-1.svg"} bullets={[
					"Weekly Strategy Calls: Personalized sessions with dedicated account managers",
					"Comprehensive Setup: Pixel tracking, ensuring precise performance monitoring",
					"Dynamic Landing Pages: Tailored to captivate your audience and drive engagement",
					"Creative Brilliance: Expertly crafted visuals and copy for impactful campaigns",
					"Multi-Platform Presence: Target your audience across multiple platforms",
					"Great for brands starting on 1 - 2 platforms"
				]}/>
				<Bundle title="Surge Boost" price={7999} icon={"/chart-solid-2.svg"} bullets={[
					"All Mini Boost Features",
					"Advanced Creatives: Elevated design and copywriting for a stronger brand presence",
					"Expanded Platform Reach: Increase your brand's visibility on additional platforms",
					"Data-Driven Insights: In-depth analytics for informed decision-making",
					"Enhanced Strategy: Fine-tuning to maximize your e-commerce growth",
					"Great for brands wanting to branch out on 2-3 platforms"
				]}/>
				<Bundle title="Max Boost" price={7999} icon={"/chart-solid-3.svg"} bullets={[
					"All Surge Boost Features",
					"Exclusive Industry Insights: Specialized strategies for Food & Beverage or Skincare & Beauty",
					"Elite Account Management: Priority support and strategic guidance",
					"Tailored Solutions: Customized services for unique brand requirements",
					"Unlimited Potential: Scale your brand limitlessly with our premium package on 3+ platforms"
				]}/>
			</div>
		</div>
	);
};

export default BuildYourBundle;
