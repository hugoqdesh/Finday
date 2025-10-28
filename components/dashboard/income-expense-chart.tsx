"use client";

import { Bar, BarChart, XAxis, Cell } from "recharts";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ type: "Income", amount: 342 },
	{ type: "Expense", amount: 876 },
];

const chartConfig = {
	amount: {
		label: "Amount",
		color: "#FFFFFF",
	},
} satisfies ChartConfig;

export function IncomeExpenseChart() {
	const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

	return (
		<Card>
			<CardHeader className="flex items-center justify-between gap-2 sm:flex-row">
				<CardTitle>Income vs Expenses</CardTitle>
				<CardDescription>October 2025</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						onMouseLeave={() => setActiveIndex(null)}
					>
						<rect
							x="0"
							y="0"
							width="100%"
							height="85%"
							fill="url(#highlighted-pattern-dots)"
						/>
						<XAxis
							dataKey="type"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="amount" radius={0} fill="var(--color-amount)">
							{chartData.map((_, index) => (
								<Cell
									className="duration-200"
									key={`cell-${index}`}
									fillOpacity={
										activeIndex === null ? 1 : activeIndex === index ? 1 : 0.3
									}
									stroke={activeIndex === index ? "var(--color-amount)" : ""}
									onMouseEnter={() => setActiveIndex(index)}
								/>
							))}
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
