import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<Link href="/dashboard">
				<Button>Dashboard</Button>
			</Link>
		</main>
	);
}
