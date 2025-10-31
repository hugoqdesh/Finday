import { BankConnectionsCard } from "@/components/dashboard/settings/bank-connections-card";
import { BillingCard } from "@/components/dashboard/settings/billing-card";
import { CountryCard } from "@/components/dashboard/settings/country-card";
import { CurrencyCard } from "@/components/dashboard/settings/currency-card";
import { DeleteAccountCard } from "@/components/dashboard/settings/delete-account-card";
import { EmailCard } from "@/components/dashboard/settings/email-card";
import { NameCard } from "@/components/dashboard/settings/name-card";
import { ProfilePictureCard } from "@/components/dashboard/settings/profile-picture-card";

export default function SettingsPage() {
	return (
		<main className="flex flex-col gap-12 max-w-7xl mx-auto w-full px-4">
			<section className="flex flex-col gap-4">
				<h2 className="text-lg font-medium">General</h2>
				<ProfilePictureCard />
				<NameCard />
				<EmailCard />
				<CountryCard />
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-lg font-medium">Currency</h2>
				<CurrencyCard />
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-lg font-medium">Billing</h2>
				<BillingCard />
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-lg font-medium">Bank connections</h2>
				<BankConnectionsCard />
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-lg font-medium">Delete account</h2>
				<DeleteAccountCard />
			</section>
		</main>
	);
}
