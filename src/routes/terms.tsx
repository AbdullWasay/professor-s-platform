import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — The Professor's" }] }),
  component: () => (
    <PublicShell title="Terms & Conditions">
      <p><em>Demo content — not legal advice.</em></p>
      <p className="mt-4">By using The Professor's you agree that all content shared, including trade ideas and lectures, is for educational purposes only and does not constitute financial advice. You are responsible for your own trading decisions.</p>
      <p className="mt-4">Subscriptions renew monthly at $30/month after the 2-month free trial. You may cancel any time from your account settings.</p>
    </PublicShell>
  ),
});
