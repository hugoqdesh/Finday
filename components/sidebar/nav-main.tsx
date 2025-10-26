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
	BriefcaseBusiness,
	CalendarSync,
	ChartNoAxesCombined,
	Settings,
	Target,
} from "lucide-react";

const links = [
	{
		title: "Overview",
		url: "#",
		icon: ChartNoAxesCombined,
	},
	{
		title: "Budgets",
		url: "#",
		icon: Target,
	},
	{
		title: "Recurring",
		url: "#",
		icon: CalendarSync,
	},
	{
		title: "Transactions",
		url: "#",
		icon: ArrowLeftRight,
	},
	{
		title: "Vault",
		url: "#",
		icon: BriefcaseBusiness,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export function NavMain() {
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu className="space-y-2">
					{links.map((link) => (
						<SidebarMenuItem key={link.title}>
							<SidebarMenuButton className="cursor-pointer">
								{link.icon && <link.icon />}
								<span>{link.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
