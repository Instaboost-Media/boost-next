import type { Metadata } from "next";
import { nexa } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Boost Brands",
	description: "We’re a marketing agency offering bold solutions for brands ready to 10x their growth.",
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	openGraph: {
		title: 'Boost Brands',
		description: 'We’re a marketing agency offering bold solutions for brands ready to 10x their growth',
		url: '/',
		siteName: 'Boost Brands',
		images: [
		  {
			url: '/og.png', // Must be an absolute URL
			width: 600,
			height: 210,
			alt: 'Boost Brands',
		  },
		],
		locale: 'en_US',
		type: 'website',
	  },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={nexa.className}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
