import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function BankConnectionsCard() {
	return (
		<Card className="p-4">
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<div className="font-medium">Accounts</div>
					<div className="text-muted-foreground text-sm">
						Manage bank accounts, update or connect new ones.
					</div>
				</div>
				<Button variant="outline">Add account</Button>
			</div>
			<Separator />
			<div className="flex items-center justify-between">
				<div className="font-medium">Chase • **** 1234</div>
				<Button variant="ghost">Disconnect</Button>
			</div>
		</Card>
	);
}
