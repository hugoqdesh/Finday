import React from "react";
import { Button } from "../ui/button";
import { Check, Wallet } from "lucide-react";

export default function Pricing() {
	return (
		<section>
			<div className="grid grid-cols-2 gap-8 mb-8">
				<div className="p-6 border flex flex-col">
					<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 font-mono text-center">
						Pay Monthly
					</h3>
					<div className="text-center mb-6">
						<span className="block text-3xl font-bold">$5</span>
						<span className="text-sm text-muted-foreground">per month</span>
					</div>

					<div className="space-y-1 text-center mb-6">
						<div className="text-xs text-muted-foreground">billed monthly</div>
						<div className="text-xs text-muted-foreground">total $60/year</div>
					</div>

					<Button variant="outline">
						{/* Choose Monthly */}
						<Wallet className="-ms-1 opacity-60" size={16} aria-hidden="true" />
						Coming Soon...
					</Button>
				</div>

				<div className="p-6 border flex flex-col">
					<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 font-mono text-center">
						Pay Annualy
					</h3>
					<div className="text-center mb-6">
						<span className="block text-3xl font-bold">$49</span>
						<span className="text-sm text-muted-foreground">per year</span>
					</div>

					<div className="space-y-1 text-center mb-6">
						<div className="text-xs text-muted-foreground">billed annually</div>
						<div className="text-xs text-green-600">save $11/year</div>
					</div>

					<Button variant="outline">
						{/* Choose Annual */}
						<Wallet className="-ms-1 opacity-60" size={16} aria-hidden="true" />
						Coming Soon...
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
					Benefits
				</h4>

				<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 space-y-6 text-sm">
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>12,000+ bank connections</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Automatic transactions</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Expense categorys</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Income categorys</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Real-time spending insights</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Custom budgets</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Mobile &amp; desktop access</span>
					</li>
					<li className="flex items-center gap-1.5">
						<Check size={16} />
						<span>Export your data</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
