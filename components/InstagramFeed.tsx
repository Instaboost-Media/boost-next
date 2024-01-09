import React from "react";
import InstagramItem from "./InstagramItem";

const data = {
	posts: [
		{
			img: "/post-1.jpg",
		},
		{
			img: "/post-2.jpg",
		},
		{
			img: "/post-3.jpg",
		},
		{
			img: "/post-4.jpg",
		},
		{
			img: "/post-5.jpg",
		},
		{
			img: "/post-6.jpg",
		},
		{
			img: "/post-7.jpg",
		},
		{
			img: "/post-8.jpg",
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
