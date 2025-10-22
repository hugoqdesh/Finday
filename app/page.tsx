import GradientBlinds from "@/components/landing/background";
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
			<div className="relative w-full min-h-screen overflow-hidden">
				<div className="hidden md:block absolute inset-0">
					<GradientBlinds
						gradientColors={["#FFFFFF", "#000000"]}
						angle={20}
						noise={0.5}
						blindCount={16}
						blindMinWidth={60}
						spotlightRadius={0.5}
						spotlightSoftness={1}
						spotlightOpacity={1}
						mouseDampening={0.15}
						distortAmount={0}
						shineDirection="left"
						mixBlendMode="lighten"
					/>
				</div>

				<div className="relative z-10 px-6 md:px-28 pointer-events-none">
					<div className="pointer-events-auto">
						<Header />
					</div>

					<div className="flex items-center justify-center min-h-screen md:-mt-20 pointer-events-none">
						<Hero />
					</div>
				</div>
			</div>
			<main className="flex flex-col items-center justify-center gap-56 pt-36 px-6 md:px-28">
				<Features />

				<Demo />

				<Pricing />

				<CTA />
			</main>

			<Footer />
		</>
	);
}
