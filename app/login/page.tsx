import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="relative hidden lg:block">
				<Image
					src="/placeholder2.jpg"
					alt="Image"
					width={1920}
					height={1080}
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale p-1"
				/>
			</div>

			<div className="flex flex-col p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-md">
						<LoginForm />
					</div>
				</div>

				<p className="text-muted-foreground text-xs text-center font-mono">
					By signing in you agree to our{" "}
					<Link href="/" className="underline">
						Terms of service
					</Link>{" "}
					&{" "}
					<Link href="/" className="underline">
						Privacy policy
					</Link>
				</p>
			</div>
		</div>
	);
}
