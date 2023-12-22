"use client";
import React from "react";
import BoxVideo from "./BoxVideo";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CaseStudies = () => {
	return (
		<div
			id="case-studies-section"
			className="bg-boost-tan-1 pt-16 pb-20 px-10 border-y-[2px] border-boost-black-2 ">
			<Title>Case Studies</Title>
			<div className="max-w-[400px] mt-16 mx-auto md:hidden">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={1}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}>
					<SwiperSlide className="!flex !justify-center">
						<BoxVideo />
					</SwiperSlide>
					<SwiperSlide className="!flex !justify-center">
						<BoxVideo />
					</SwiperSlide>
					<SwiperSlide className="!flex !justify-center">
						<BoxVideo />
					</SwiperSlide>
					<SwiperSlide className="!flex !justify-center">
						<BoxVideo />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="justify-center gap-4 flex-wrap mt-16 hidden md:flex max-w-[600px] xl:max-w-none mx-auto">
				{" "}
				<BoxVideo />
				<BoxVideo />
				<BoxVideo />
				<BoxVideo />
			</div>
		</div>
	);
};

export default CaseStudies;
