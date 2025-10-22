export default function Footer() {
	return (
		<footer className="py-16">
			<span className="text-muted-foreground block text-center text-sm">
				© {new Date().getFullYear()} Finday, All rights reserved
			</span>
		</footer>
	);
}
