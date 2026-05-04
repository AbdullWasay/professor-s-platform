import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardSidebar, TrialBanner } from "@/components/dashboard-sidebar";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Lock } from "lucide-react";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const { user, trialExpired } = useAuth();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted && !user) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-center">
        <div>
          <h1 className="font-display text-2xl font-semibold">Sign in to continue</h1>
          <p className="mt-2 text-muted-foreground">You need an account to access the community.</p>
          <Button asChild className="mt-6 bg-accent-grad text-accent-foreground"><Link to="/signup">Start free trial</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-secondary/30">
      {/* desktop sidebar */}
      <div className="hidden w-72 shrink-0 lg:block">
        <DashboardSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* mobile header */}
        <header className="flex items-center justify-between border-b bg-card px-4 py-3 lg:hidden">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <DashboardSidebar />
            </SheetContent>
          </Sheet>
        </header>

        <TrialBanner />

        <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className={trialExpired ? "pointer-events-none flex-1 select-none overflow-hidden blur-sm" : "flex min-h-0 flex-1 flex-col"}>
            <Outlet />
          </div>
          {trialExpired && <Paywall />}
        </main>
      </div>
    </div>
  );
}

function Paywall() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/70 p-6 backdrop-blur-sm">
      <div className="max-w-md rounded-2xl border bg-card p-8 text-center shadow-elegant">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Lock className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-semibold">Your free trial has ended</h2>
        <p className="mt-2 text-sm text-muted-foreground">Upgrade to keep your seat at the table — lectures, trade ideas & full chat access.</p>
        <Button asChild size="lg" className="mt-6 w-full bg-accent-grad text-accent-foreground">
          <Link to="/dashboard/subscription">Upgrade for $30/mo</Link>
        </Button>
      </div>
    </div>
  );
}
