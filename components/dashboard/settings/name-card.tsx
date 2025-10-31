import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function NameCard() {
	return (
		<Card className="p-4">
			<div className="flex flex-col gap-2">
				<h3 className="font-medium">Name</h3>
				<p className="text-muted-foreground text-sm">
					This is your visible name within Finday. For example, the name of your
					company.
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Input
					id="name"
					placeholder="Your name"
					defaultValue=""
					className="max-w-xs"
				/>
				<Button variant="outline">Save</Button>
			</div>
		</Card>
	);
}
