'use client'
import React from "react";
import { avenir } from "../app/fonts";
import Image from "next/image";

const logos = 
[
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-1.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-2.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-3.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-4.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-5.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-6.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-7.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-8.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-9.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-10.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-11.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-12.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-13.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-14.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-15.png"
},
{
	src:"https://boost.instaboostinc.com/wp-content/uploads/2024/01/logo-16.png"
}
]

const Scroller = () => {
	return (
		<div className="h-14 bg-boost-tan-1  border-y-[2px] border-boost-black-2 overflow-hidden flex items-center p-4">
			<div className="slider-bar flex gap-10">
			{logos.map(({src}, index) => <Image
						key={index}
							src={src}
							width={500}
							height={500}
							alt="company"
							className="h-6 w-full"
						/>)}
						{logos.map(({src}, index) => <Image
						key={index}
							src={src}
							width={500}
							height={500}
							alt="company"
							className="h-6 w-full"
						/>)}
						{logos.map(({src}, index) => <Image
						key={index}
							src={src}
							width={500}
							height={500}
							alt="company"
							className="h-6 w-full"
						/>)}
						{logos.map(({src}, index) => <Image
						key={index}
							src={src}
							width={500}
							height={500}
							alt="company"
							className="h-6 w-full"
						/>)}
						{logos.map(({src}, index) => <Image
						key={index}
							src={src}
							width={500}
							height={500}
							alt="company"
							className="h-6 w-full"
						/>)}
						</div>
			{/* <p
				className={`slider-bar whitespace-nowrap font-medium text-lg text-boost-black-1 ${avenir.className}`}>
				{text}
			</p> */}
		</div>
	);
};

export default Scroller;
