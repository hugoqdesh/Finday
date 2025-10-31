import React from "react";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export default function Spending() {
	return (
		<Card>
			<CardHeader className="flex items-center justify-between gap-2 sm:flex-row">
				<CardTitle>Spending</CardTitle>

				<CardDescription>October 2025</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				<div className="grid grid-cols-2 items-center">
					<div className="flex items-center gap-3">
						<Avatar className="h-3 w-3 rounded-none">
							<AvatarFallback className="rounded-none bg-pink-600" />
						</Avatar>
						<p className="font-medium">Rent</p>
					</div>

					<div className="flex items-center gap-3">
						<Progress value={35} />
						<p className="text-muted-foreground text-sm">35%</p>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center">
					<div className="flex items-center gap-3">
						<Avatar className="h-3 w-3 rounded-none">
							<AvatarFallback className="rounded-none bg-purple-600" />
						</Avatar>
						<p className="font-medium">Meals</p>
					</div>

					<div className="flex items-center gap-3">
						<Progress value={30} />
						<p className="text-muted-foreground text-sm">30%</p>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center">
					<div className="flex items-center gap-3">
						<Avatar className="h-3 w-3 rounded-none">
							<AvatarFallback className="rounded-none bg-red-600" />
						</Avatar>
						<p className="font-medium">Software</p>
					</div>

					<div className="flex items-center gap-3">
						<Progress value={25} />
						<p className="text-muted-foreground text-sm">25%</p>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center">
					<div className="flex items-center gap-3">
						<Avatar className="h-3 w-3 rounded-none">
							<AvatarFallback className="rounded-none bg-green-600" />
						</Avatar>
						<p className="font-medium">Travel</p>
					</div>

					<div className="flex items-center gap-3">
						<Progress value={20} />
						<p className="text-muted-foreground text-sm">20%</p>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center">
					<div className="flex items-center gap-3">
						<Avatar className="h-3 w-3 rounded-none">
							<AvatarFallback className="rounded-none bg-orange-600" />
						</Avatar>
						<p className="font-medium">Other</p>
					</div>

					<div className="flex items-center gap-3">
						<Progress value={10} />
						<p className="text-muted-foreground text-sm">10%</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
