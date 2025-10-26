"use client";

import * as React from "react";
import { NavMain } from "@/components/sidebar/nav-main";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TurkishLira } from "lucide-react";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="mt-2">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="hover:bg-transparent w-max text-primary"
						>
							<Link href="#">
								<TurkishLira className="size-5!" />
								<span className="text-base font-semibold">Finday</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="border-t mt-2 pt-2">
				<NavMain />
			</SidebarContent>
		</Sidebar>
	);
}
