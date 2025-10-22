import CTA from "@/components/landing/cta";
import Demo from "@/components/landing/demo";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";

export default function Home() {
	return (
		<>
			<Header />

			<main className="flex flex-col items-center justify-center gap-56 pt-36 px-6 md:px-28">
				<Hero />

				<Features />

				<Demo />

				<Pricing />

				<CTA />
			</main>

			{/* <Footer /> */}
		</>
	);
}
