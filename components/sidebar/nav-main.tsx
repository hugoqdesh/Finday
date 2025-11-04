"use client";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	ArrowLeftRight,
	CalendarSync,
	ChartNoAxesCombined,
	Settings,
	Target,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		title: "Overview",
		url: "/dashboard",
		icon: ChartNoAxesCombined,
	},
	{
		title: "Budgets",
		url: "/dashboard/budgets",
		icon: Target,
	},
	{
		title: "Recurring",
		url: "/dashboard/recurring",
		icon: CalendarSync,
	},
	{
		title: "Transactions",
		url: "/dashboard/transactions",
		icon: ArrowLeftRight,
	},
	{
		title: "Settings",
		url: "/dashboard/settings",
		icon: Settings,
	},
];

export function NavMain() {
	const pathname = usePathname();
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu className="space-y-2">
					{links.map((link) => {
						const isActive =
							link.url !== "#" &&
							(pathname === link.url ||
								(pathname?.startsWith(link.url + "/") &&
									link.url !== "/dashboard"));

						return (
							<SidebarMenuItem key={link.title}>
								<SidebarMenuButton asChild isActive={isActive}>
									<Link href={link.url}>
										{link.icon && <link.icon />}
										<span>{link.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
