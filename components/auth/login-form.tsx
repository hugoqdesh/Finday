"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Github } from "../ui/svgs/github";
import { authClient } from "@/lib/auth-client";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	const signInGoogle = async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/dashboard",
		});
	};

	const signInGithub = async () => {
		await authClient.signIn.social({
			provider: "github",
			callbackURL: "/dashboard",
		});
	};

	return (
		<form className={cn("flex flex-col gap-6", className)} {...props}>
			<FieldGroup className="gap-4">
				<div className="flex flex-col items-center gap-1 text-center">
					<h1 className="text-lg font-serif font-bold mb-4">
						Welcome to Finday
					</h1>
					<p className="text-muted-foreground text-sm text-balance">
						New here or coming back? Choose how you want to continue
					</p>
				</div>
				<Field>
					<Button type="button" onClick={signInGoogle}>
						Continue with Google
					</Button>
				</Field>
				<Field>
					<Button type="button" onClick={signInGithub}>
						<Github />
						Continue with GitHub
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
