import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Features() {
	return (
		<section className="flex flex-col gap-6">
			<h3 className="font-medium text-4xl md:text-6xl">Everything you need</h3>
			<p className="text-muted-foreground">
				Everything you need to manage your money in one simple, powerful app
			</p>

			<div className="grid md:grid-cols-3 gap-8">
				<div className="border md:col-span-3">
					<div className="grid md:grid-cols-2">
						<Image
							src="/placeholder.jpg"
							alt="placeholder image"
							width={1920}
							height={1080}
						/>

						<div className="flex flex-col justify-center p-12 gap-3">
							<h3 className="font-semibold text-2xl">Financial overview</h3>
							<p className="text-muted-foreground text-sm">
								Connect your accounts or enter data manually. We support over 12
								000 banks across 33 countries, including US, Canada, UK and
								Europe. Track your expenses and income in real time, and get a
								clearer picture of your financial record and current situation.
							</p>

							<ul className="text-sm hidden 2xl:flex items-center gap-6">
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Revenue
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Income
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Expenses
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border md:col-span-3">
					<div className="grid md:grid-cols-2">
						<div className="flex flex-col justify-center p-12 gap-3">
							<h3 className="font-semibold text-2xl">Categorized Spending</h3>
							<p className="text-muted-foreground text-sm">
								See exactly where your money goes. We automatically sort your
								transactions into categories so you can spot trends and cut back
								where it matters.
							</p>

							<ul className="text-sm hidden 2xl:flex items-center gap-6">
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Auto-categorized transactions
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Custom category creation
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Smart search and filters
								</li>
							</ul>
						</div>

						<Image
							src="/placeholder.jpg"
							alt="placeholder image"
							width={1920}
							height={1080}
						/>
					</div>
				</div>

				<div className="border md:col-span-3">
					<div className="grid md:grid-cols-2">
						<Image
							src="/placeholder.jpg"
							alt="placeholder image"
							width={1920}
							height={1080}
						/>

						<div className="flex flex-col justify-center p-12 gap-3">
							<h3 className="font-semibold text-2xl">Budgets That Work</h3>
							<p className="text-muted-foreground text-sm">
								Set budgets that fit your lifestyle and actually stick to them.
								Monitor your progress, adjust anytime, and get alerts before you
								overspend.
							</p>

							<ul className="text-sm hidden 2xl:flex items-center gap-6">
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Real-time goal saving
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Alerts and progress updates
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border md:col-span-3">
					<div className="grid md:grid-cols-2">
						<div className="flex flex-col justify-center p-12 gap-3">
							<h3 className="font-semibold text-2xl">Seamless export</h3>
							<p className="text-muted-foreground text-sm">
								Whether it’s for a spreadsheet or a report, export any part of
								your financial data in a clear, ready-to-use CSV file. You’re
								always in control.
							</p>

							<ul className="text-sm hidden 2xl:flex items-center gap-6">
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									Export by date or category
								</li>
								<li className="flex items-center gap-1.5">
									<Check size={16} />
									CSV format exports for spreadsheets
								</li>
							</ul>
						</div>

						<Image
							src="/placeholder.jpg"
							alt="placeholder image"
							width={1920}
							height={1080}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
