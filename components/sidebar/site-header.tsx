import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { Bell } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-background py-3">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<div className="ml-auto flex items-center gap-4">
					<Button variant="clear" size="icon">
						<Bell />
					</Button>
					<ModeToggle />
					<NavUser />
				</div>
			</div>
		</header>
	);
}
