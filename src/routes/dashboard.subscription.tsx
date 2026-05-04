import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/subscription")({
  head: () => ({ meta: [{ title: "Subscription — The Professor's" }] }),
  component: Subscription,
});

function Subscription() {
  const { trialDaysLeft, trialExpired, subscribed, subscribe, expireTrialDemo } = useAuth();

  const status = subscribed ? "Member · Active" : trialExpired ? "Trial Expired" : `Free Trial · ${trialDaysLeft} days left`;
  const statusColor = subscribed ? "text-success" : trialExpired ? "text-destructive" : "text-accent";

  return (
    <div className="flex-1 overflow-y-auto px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-semibold">Subscription</h1>
        <p className="mt-1 text-muted-foreground">Manage your membership.</p>

        <div className="mt-8 rounded-2xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Current plan</p>
          <p className={`mt-1 font-display text-2xl font-semibold ${statusColor}`}>{status}</p>
          {!subscribed && !trialExpired && (
            <p className="mt-2 text-sm text-muted-foreground">After your trial, membership is just $30/month.</p>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">Free Trial</p>
            <p className="mt-1 font-display text-3xl font-semibold">$0</p>
            <p className="text-xs text-muted-foreground">2 months · No card required</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Full forum access", "All lectures", "Trade ideas", "Community lounge"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-card p-6 shadow-elegant">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-grad px-2.5 py-1 text-[10px] font-semibold text-accent-foreground">
              <Sparkles className="h-3 w-3" /> RECOMMENDED
            </span>
            <p className="text-sm text-muted-foreground">Membership</p>
            <p className="mt-1 font-display text-3xl font-semibold">$30<span className="text-base text-muted-foreground">/mo</span></p>
            <p className="text-xs text-muted-foreground">Cancel any time</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Everything in trial", "Priority DMs to the Professor", "Trade journals review", "Founding member badge"].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {f}</li>
              ))}
            </ul>
            <Button
              size="lg"
              className="mt-6 w-full bg-accent-grad text-accent-foreground hover:opacity-90"
              disabled={subscribed}
              onClick={() => { subscribe(); toast.success("Welcome aboard! Your membership is active."); }}
            >
              {subscribed ? "Active" : "Upgrade to Member"}
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-dashed bg-secondary/40 p-4 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Demo controls</p>
          <p className="mt-1">This is a demo — payments are simulated. Use this to preview the trial-expired paywall:</p>
          <Button variant="outline" size="sm" className="mt-3" onClick={() => { expireTrialDemo(); toast("Trial expired — paywall enabled."); }}>
            Simulate trial expiry
          </Button>
        </div>
      </div>
    </div>
  );
}
