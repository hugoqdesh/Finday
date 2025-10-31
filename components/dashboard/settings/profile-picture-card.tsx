import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfilePictureCard() {
	return (
		<Card className="p-4 flex flex-row items-center justify-between">
			<div className="flex flex-col gap-2">
				<h3 className="font-medium">Profile picture</h3>
				<p className="text-muted-foreground text-sm">
					Click on the image to upload a custom one from your files.
				</p>
			</div>
			<div className="flex items-center gap-4">
				<Avatar className="size-14">
					<AvatarImage alt="Profile picture" src="" />
					<AvatarFallback>PFP</AvatarFallback>
				</Avatar>
			</div>
		</Card>
	);
}
