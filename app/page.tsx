import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Scroller from "@/components/Scroller";

import CertsAndWhyBoost from "@/components/CertsAndWhyBoost";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<Banner />
			<Scroller />
			<CertsAndWhyBoost />
		</div>
	);
}
