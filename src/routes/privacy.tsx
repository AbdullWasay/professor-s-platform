import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — The Professor's" }] }),
  component: () => (
    <PublicShell title="Privacy Policy">
      <div className="space-y-6">
        <div className="rounded-xl border bg-secondary/40 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Our privacy approach</p>
          <p className="mt-1">We keep data collection minimal and focused only on running the community.</p>
        </div>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">What we collect</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We collect the basic information needed to provide your account and community access, such as email,
            username, and messages sent inside the platform.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">How we use it</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your information is used to operate your account, deliver community features, and support communication.
            We do not sell personal data.
          </p>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold">Your control</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            You can request account and data deletion at any time by contacting
            <span className="font-medium text-foreground"> hello@theprofessors.demo</span>.
          </p>
        </section>
      </div>
    </PublicShell>
  ),
});
