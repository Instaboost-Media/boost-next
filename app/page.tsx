import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Scroller from "@/components/Scroller";
import Cetifications from "@/components/Cetifications";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<Banner />
			<Scroller />
			<Cetifications />
		</div>
	);
}
