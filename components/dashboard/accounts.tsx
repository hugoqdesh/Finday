import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function Accounts() {
	return (
		<Card>
			<CardHeader className="flex items-center justify-between gap-2 sm:flex-row">
				<CardTitle>Accounts</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				<div className="flex items-center justify-between gap-12">
					<div className="flex items-center gap-3">
						<p className="font-medium">Bank 1</p>
					</div>
					<p className="text-muted-foreground text-sm font-medium">$320</p>
				</div>

				<div className="flex items-center justify-between gap-12">
					<div className="flex items-center gap-3">
						<p className="font-medium">Bank 2</p>
					</div>
					<p className="text-muted-foreground text-sm font-medium">$320</p>
				</div>

				<div className="flex items-center justify-between gap-12">
					<div className="flex items-center gap-3">
						<p className="font-medium">Cash</p>
					</div>
					<p className="text-muted-foreground text-sm font-medium">$320</p>
				</div>
			</CardContent>
		</Card>
	);
}
