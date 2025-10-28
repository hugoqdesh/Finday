import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function Transactions() {
	return (
		<Card>
			<CardHeader className="flex items-center justify-between gap-2 sm:flex-row">
				<CardTitle>Recent Transactions</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Avatar className="h-5 w-5 rounded-none">
							<AvatarFallback className="rounded-none text-xs" />
						</Avatar>
						<p className="font-medium">Rent</p>
					</div>
					<p className="text-red-600 font-medium text-sm">-$19,546.50</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Avatar className="h-5 w-5 rounded-none">
							<AvatarFallback className="rounded-none text-xs" />
						</Avatar>
						<p className="font-medium">Shopping</p>
					</div>
					<p className="text-red-600 font-medium text-sm">-$19,546.50</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Avatar className="h-5 w-5 rounded-none">
							<AvatarFallback className="rounded-none text-xs" />
						</Avatar>
						<p className="font-medium">Shopping</p>
					</div>
					<p className="text-red-600 font-medium text-sm">-$19,546.50</p>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Avatar className="h-5 w-5 rounded-none">
							<AvatarFallback className="rounded-none text-xs" />
						</Avatar>
						<p className="font-medium">Salary</p>
					</div>
					<p className="text-green-600 font-medium text-sm">+$19,546.50</p>
				</div>
			</CardContent>

			<CardFooter className="mt-auto mx-auto">
				<Button
					variant="link"
					size="sm"
					className="text-muted-foreground hover:text-primary transition-colors duration-200 group"
				>
					View all
					<ArrowRight className="group-hover:-rotate-12 transition-transform duration-200" />
				</Button>
			</CardFooter>
		</Card>
	);
}
