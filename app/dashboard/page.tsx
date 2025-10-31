import Accounts from "@/components/dashboard/accounts";
import { DashboardAreaChart } from "@/components/dashboard/balance-chart";
import Spending from "@/components/dashboard/spending";
import Transactions from "@/components/dashboard/recent-transactions";
import { IncomeExpenseChart } from "@/components/dashboard/income-expense-chart";

export default function DashboardPage() {
	return (
		<main className="px-4">
			<section>
				<DashboardAreaChart />
			</section>

			<section className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-8">
				<IncomeExpenseChart />
				<Spending />
				<Transactions />
				<Accounts />
			</section>
		</main>
	);
}
