import Image from "next/image";
import React from "react";

export default function Demo() {
	return (
		<section className="flex flex-col gap-12 md:gap-32">
			<Image
				src="/placeholder.jpg"
				alt="placeholder image"
				width={1920}
				height={1080}
			/>

			<h3 className="text-center font-medium text-2xl md:text-6xl">
				Finance doesn’t have to be full of headaches. Finday helps you to
				streamline your process, reduce manual work and bundles everything up
				neatly for you
			</h3>
		</section>
	);
}
