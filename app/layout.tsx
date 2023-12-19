import type { Metadata } from "next";
import { playfair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={playfair.className}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
