import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function BudgetsPage() {
	return (
		<main className="px-4">
			<section className="flex items-center justify-end">
				<Button size="icon" variant="outline">
					<Plus />
				</Button>
			</section>

			<section className="grid gap-6 md:grid-cols-2 pt-6">
				<Card className="flex flex-col">
					<CardHeader className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-3">
							<CardTitle>Gaming PC</CardTitle>
						</div>
						<div className="flex items-center gap-2">
							<Button size="sm" variant="outline">
								Add contribution
							</Button>
						</div>
					</CardHeader>
					<CardContent className="flex flex-col gap-3">
						<Progress value={25} />

						<div className="flex justify-between text-center text-sm">
							<div className="flex flex-col w-max">
								<span className="text-muted-foreground">Target</span>
								<span className="font-medium">$1200</span>
							</div>
							<div className="flex flex-col w-full">
								<span className="text-muted-foreground">Contributed</span>
								<span className="font-medium text-green-600">$150</span>
							</div>
							<div className="flex flex-col w-max">
								<span className="text-muted-foreground">Remaining</span>
								<span className="font-medium">$1050</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
