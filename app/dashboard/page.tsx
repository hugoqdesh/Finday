import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
	return (
		<SidebarProvider>
			<AppSidebar variant="sidebar" />
			<SidebarInset>
				<SiteHeader />
			</SidebarInset>
		</SidebarProvider>
	);
}
