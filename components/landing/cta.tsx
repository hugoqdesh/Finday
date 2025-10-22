import React from "react";
import { Button } from "../ui/button";
import { Wallet } from "lucide-react";
import { Matrix, wave } from "@/components/ui/matrix";

export default function CTA() {
	return (
		<section className="border p-3 md:p-28 text-center">
			<h2 className="text-3xl md:text-8xl font-medium">
				Finance, the Finday way.
			</h2>
			<div className="flex items-center gap-4 mt-8 justify-center mb-12">
				<Button>
					<Wallet className="-ms-1 opacity-60" size={16} aria-hidden="true" />
					Coming Soon...
				</Button>
			</div>

			<Matrix rows={7} cols={7} frames={wave} fps={20} />
		</section>
	);
}
