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
	const pathname = usePathname();
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu className="space-y-2">
					{links.map((link) => (
						<SidebarMenuItem key={link.title}>
							<SidebarMenuButton
								asChild
								isActive={Boolean(
									link.url !== "#" &&
										(pathname === link.url ||
											pathname?.startsWith(link.url + "/"))
								)}
							>
								<Link href={link.url}>
									{link.icon && <link.icon />}
									<span>{link.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
