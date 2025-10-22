import React from "react";
import { Button } from "../ui/button";

export default function CTA() {
	return (
		<section className="border p-3 md:p-28 text-center">
			<h2 className="text-3xl md:text-8xl font-medium">
				Finance, the Finday way.
			</h2>

			<div className="flex items-center gap-4 mt-8 justify-center">
				<Button>Coming Soon...</Button>
			</div>
		</section>
	);
}
