import React from "react";
import InstagramItem from "./InstagramItem";

const data = {
	posts: [
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
		{
			img: "placeholder.svg",
		},
	],
};

const InstagramFeed = () => {
	return (
		<div className="grid grid-rows-2 grid-cols-4">
			{data.posts.map((post, index) => (
				<InstagramItem key={index} imgSrc={post.img} />
			))}
		</div>
	);
};

export default InstagramFeed;
