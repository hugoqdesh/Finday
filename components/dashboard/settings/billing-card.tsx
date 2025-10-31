import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function BillingCard() {
	return (
		<Card className="p-4">
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<div className="font-medium">Current plan</div>
					<div className="text-muted-foreground text-sm">Free • 0/month</div>
				</div>
				<Button variant="outline">Upgrade</Button>
			</div>
		</Card>
	);
}
