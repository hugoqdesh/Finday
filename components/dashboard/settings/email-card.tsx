import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function EmailCard() {
	return (
		<Card className="p-4">
			<div className="flex flex-col gap-2">
				<h3 className="font-medium">Email</h3>
				<p className="text-muted-foreground text-sm">
					This is the email address that will be used to receive emails from
					Finday.
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Input
					id="email"
					type="email"
					placeholder="you@example.com"
					defaultValue=""
					className="max-w-xs"
				/>
				<Button variant="outline">Save</Button>
			</div>
		</Card>
	);
}
