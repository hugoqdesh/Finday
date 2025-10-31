import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CountryCard() {
	return (
		<Card className="p-4">
			<div className="flex flex-col gap-2">
				<h3 className="font-medium">Country</h3>
				<p className="text-muted-foreground text-sm">
					This is your country of origin.
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Select>
					<SelectTrigger id="country" className="w-80">
						<SelectValue placeholder="Select country" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="US">United States</SelectItem>
						<SelectItem value="GB">United Kingdom</SelectItem>
						<SelectItem value="CA">Canada</SelectItem>
						<SelectItem value="AU">Australia</SelectItem>
						<SelectItem value="DE">Germany</SelectItem>
						<SelectItem value="FR">France</SelectItem>
					</SelectContent>
				</Select>
				<Button variant="outline">Save</Button>
			</div>
		</Card>
	);
}
