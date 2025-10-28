import Accounts from "@/components/dashboard/accounts";
import { DashboardAreaChart } from "@/components/dashboard/balance-chart";
import Spending from "@/components/dashboard/spending";
import Transactions from "@/components/dashboard/recent-transactions";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";
import { IncomeExpenseChart } from "@/components/dashboard/income-expense-chart";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
	return (
		<SidebarProvider>
			<AppSidebar variant="sidebar" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<div className="px-4 lg:px-6">
								<DashboardAreaChart />
							</div>

							<div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-8 px-4 lg:px-6">
								<IncomeExpenseChart />
								<Spending />
								<Transactions />
								<Accounts />
							</div>
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
