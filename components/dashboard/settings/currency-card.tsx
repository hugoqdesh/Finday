import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CurrencyCard() {
	return (
		<Card className="p-4">
			<div className="flex items-center gap-2">
				<Select>
					<SelectTrigger id="currency" className="w-80">
						<SelectValue placeholder="Select currency" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="USD">USD • United States Dollar</SelectItem>
						<SelectItem value="EUR">EUR • Euro</SelectItem>
						<SelectItem value="GBP">GBP • British Pound</SelectItem>
						<SelectItem value="CAD">CAD • Canadian Dollar</SelectItem>
						<SelectItem value="AUD">AUD • Australian Dollar</SelectItem>
						<SelectItem value="JPY">JPY • Japanese Yen</SelectItem>
					</SelectContent>
				</Select>
				<Button variant="outline">Save</Button>
			</div>
		</Card>
	);
}
