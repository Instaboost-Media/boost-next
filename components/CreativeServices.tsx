import React from "react";
import Title from "@/components/Title";
import { avenir } from "../app/fonts";
import Service from "./Service";

const services = [
	{
	  title: "Motion Design: Moving Your Brand Forward",
	  description: "In a world in constant motion, our creative team takes the lead. We analyze data, devise strategies, and breathe life into captivating interactions, ensuring our brands move forward dynamically.",
	 	src: "http://boost.instaboostinc.com/wp-content/uploads/2024/01/motion.mp4", 
		isVideo: true,
	  flipped: false,
	},
	{
	  title: "Video Editing: Crafting Stories that Resonate",
	  description: "From editing footage to color correction and special effects, our experienced team shapes raw content into brand new stories with impactful messages. Responding to diverse videography needs, we harmonize footage with elements like ambiance creation and sound/music editing, drawing from an extensive licensed creative pool.",
	src: "http://boost.instaboostinc.com/wp-content/uploads/2024/01/video-editing.mp4",
	isVideo: true,  
	flipped: true,
	},
	{
	  title: "Graphic Design: Turning Ideas into Visual Solutions",
	  description: "Our creative talents bring practical and effective design solutions to the table. Grounded in critical thinking and immersive strategies, we value the imagery that creates stories and connections. Using typefaces, colors, imagery, and other graphic elements, our designers craft narratives that perfectly align with your brand.",
	 src: "http://boost.instaboostinc.com/wp-content/uploads/2024/01/4f432d9234988a5f33b26e0ba06bc6fe.gif", 
	 isVideo: false, 
	 flipped: false,
	},
	{
		title: "UI/UX Design: Crafting Seamless User Journeys",
		description: "Utilizing data-driven decision-making and human-centered design, our team crafts engaging user journeys, captivating landing pages, and cutting-edge audio strategies. Delivering relevant content and optimized insights, we guarantee a seamless and standout experience, making it difficult for competitors to replicate your success.",
		src: "http://boost.instaboostinc.com/wp-content/uploads/2024/01/typing.gif", 
		isVideo: false, 
		flipped: true,
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
					
					At Boost Brands, we understand that exceptional creative assets are the heartbeat of successful social advertising campaigns. That&apos;s why our commitment to delivering high-quality creative and landing pages are ingrained in every advertising plan.
					
				</p>
			</div>
			<div>
				{services.map(({title, description, src, isVideo, flipped}, index) => <Service key={index} title={title} description={description} src={src} isVideo={isVideo} flipped={flipped} />)}
			</div>
		</div>
	);
};

export default CreativeServices;
