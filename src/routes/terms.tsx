import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — The Professor's" }] }),
  component: () => (
    <PublicShell title="Terms & Conditions">
      <div className="space-y-6">
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Important note</p>
          <p className="mt-1">This page is demo-friendly guidance and not legal advice.</p>
        </div>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">Educational use only</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            All lectures, market commentary, and trade ideas shared in The Professor&apos;s are for educational purposes.
            Nothing on the platform should be treated as financial advice or a guaranteed outcome.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">Member responsibility</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Every member is responsible for their own trading decisions, risk management, and account performance.
            Past examples and community discussions do not guarantee future results.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">Billing and cancellation</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Membership starts with a 2-month free trial. After trial, subscription renews at $30/month unless canceled.
            You can cancel from account settings at any time.
          </p>
        </section>
      </div>
    </PublicShell>
  ),
});
