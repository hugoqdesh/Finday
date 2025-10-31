import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DeleteAccountCard() {
	return (
		<Card className="p-4 border-destructive flex flex-row items-center justify-between">
			<p className="text-muted-foreground text-sm">
				This action is irreversible. Please export any necessary data before
				continuing.
			</p>
			<Button variant="destructive">Delete account</Button>
		</Card>
	);
}
