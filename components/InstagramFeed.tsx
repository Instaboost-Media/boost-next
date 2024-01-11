import React from "react";
import InstagramItem from "./InstagramItem";

const data = {
	posts: [
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-0.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-1.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-2.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-3.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-4.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-5.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-6.jpg",
		},
		{
			img: "https://boost.instaboostinc.com/wp-content/uploads/2024/01/post-7.jpg",
		},
	],
};

const InstagramFeed = () => {
	return (
		<div className="grid grid-rows-2 grid-cols-4 bg-boost-tan-1">
			{data.posts.map((post, index) => (
				<InstagramItem key={index} imgSrc={post.img} />
			))}
		</div>
	);
};

export default InstagramFeed;
