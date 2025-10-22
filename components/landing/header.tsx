import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { TurkishLira } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<header className="flex items-center justify-between mt-3 max-w-7xl mx-auto px-6 md:px-0">
			<Link href="/" className="flex items-center gap-1">
				<TurkishLira />
				<span className="text-lg font-medium">Finday</span>
			</Link>

			<div className="flex items-center gap-3">
				<nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground w-max">
					<Link
						href="/"
						className="hover:text-primary transition-colors duration-200"
					>
						Features
					</Link>
					<Link
						href="/"
						className="hover:text-primary transition-colors duration-200"
					>
						Pricing
					</Link>
					<Link
						href="/"
						className="hover:text-primary transition-colors duration-200"
					>
						Updates
					</Link>
				</nav>

				<div className="flex items-center gap-3">
					<ModeToggle />
					<Button>
						{/* Open Account */}
						Coming Soon...
					</Button>
				</div>
			</div>
		</header>
	);
}
