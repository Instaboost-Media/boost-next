import React from "react";
import Title from "@/components/Title";
import { avenir } from "../app/fonts";
import Service from "./Service";

const services = [
	{
	  title: "Motion Design: Moving Your Brand Forward",
	  description: "In a world in constant motion, our creative team takes the lead. We analyze data, devise strategies, and breathe life into captivating interactions, ensuring our brands move forward dynamically.",
	  flipped: false,
	},
	{
	  title: "Video Editing: Crafting Stories that Resonate",
	  description: "From editing footage to color correction and special effects, our experienced team shapes raw content into brand new stories with impactful messages. Responding to diverse videography needs, we harmonize footage with elements like ambiance creation and sound/music editing, drawing from an extensive licensed creative pool.",
	flipped: true,
	},
	{
	  title: "Graphic Design: Turning Ideas into Visual Solutions",
	  description: "Our creative talents bring practical and effective design solutions to the table. Grounded in critical thinking and immersive strategies, we value the imagery that creates stories and connections. Using typefaces, colors, imagery, and other graphic elements, our designers craft narratives that perfectly align with your brand.",
	  flipped: false,
	},
	{
	  title: "UI/UX Design: Crafting Seamless User Journeys",
	  description: "Applying data-driven decision-making and design thinking methodologies, our team aims to solve vital problems with innovative solutions. Rooted in human-centered design, we create engaging user journeys without compromising brand charm.",
	  flipped: true,
	},
	{
	  title: "Digital Illustration: Transforming Dreams into Visual Realities",
	  description: "By creating visual storytelling through digital imagery, we support our brands in actualizing their dreams. Our creatives use brush strokes and lines to craft narratives that make the audience part of the story.",
	  flipped: false,
	},
	{
	  title: "Landing Page Design: Guiding Your Audience's Journey",
	  description: "Always attuned to our clients' marketing journey, our seasoned team crafts landing pages that immediately capture the audience's eye with stunning visuals. Delivering relevant content and optimized data-driven insights, we ensure a seamless and engaging experience for your audience.",
	  flipped: true,
	},
	{
	  title: "Sound Design: Elevating Your Brand's Acoustic Identity",
	  description: "Recognizing the vital role of music and audio, our sound designers focus on social media trends, implementing cutting-edge audio strategies. With a keen eye on platforms like Instagram Reels and TikTok, we ensure your creative stands out, making it harder for competitors to replicate your success.",
	  flipped: false,
	}
  ];
  

const CreativeServices = () => {
	return (
		<div
			id="services-section"
			className="bg-boost-tan-1 border-y-[2px] border-boost-black-2 py-20 px-10 lg:py-24">
			<div>
				<Title>Creative Services</Title>
				<p
					className={`mx-auto text-center font-normal mt-10 max-w-3xl text-boost-black-1 text-lg ${avenir.className}`}>
					<span className="font-bold">Elevate Your Brand with Boost Brands Creative Services.</span> <br></br>
					
					At Boost Brands, we understand that exceptional creative assets are the heartbeat of successful social advertising campaigns. That's why our commitment to delivering high-quality creative and landing pages are ingrained in every advertising plan.
					
				</p>
			</div>
			<div>
				{services.map(({title, description, flipped}, index) => <Service key={index} title={title} description={description} flipped={flipped} />)}
			</div>
		</div>
	);
};

export default CreativeServices;
