import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="grid md:grid-cols-2 gap-8 md:gap-0">
			<div className="flex flex-col justify-center gap-8">
				<h1 className="text-6xl">
					<span className="font-semibold">Finance</span> that doesn’t{" "}
					<span className="font-semibold">Suck</span>
				</h1>
				<p className="text-balance text-lg">
					Track expenses, manage budgets, and build your wealth with our
					powerful financial management platform.
				</p>

				<div className="flex gap-4 max-w-lg w-full">
					<Link href="/dashboard">
						<Button size="lg">
							<Wallet
								className="-ms-1 opacity-60"
								size={16}
								aria-hidden="true"
							/>
							Coming Soon
						</Button>
					</Link>
				</div>
			</div>

			<div className="border p-3 bg-background">
				<Image
					src="/placeholder.jpg"
					alt="placholder image"
					width={1920}
					height={1080}
				/>
			</div>
		</section>
	);
}
