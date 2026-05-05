import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { Hash, Coffee, MessageCircle, CreditCard, Mail, LogOut, GraduationCap, Info } from "lucide-react";
import { Logo } from "@/components/logo";
import { useAuth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const items = [
  { to: "/dashboard", label: "Main Forum", icon: Hash },
  { to: "/dashboard/lounge", label: "Community Lounge", icon: Coffee },
  { to: "/dashboard/messages", label: "Messages", icon: MessageCircle, badge: 1 },
  { to: "/dashboard/subscription", label: "Subscription", icon: CreditCard },
  { to: "/dashboard/contact", label: "Contact", icon: Mail },
  { to: "/dashboard/about", label: "About", icon: Info },
] as const;

export function DashboardSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { user, logout, trialDaysLeft, trialExpired, subscribed } = useAuth();
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="flex h-full w-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="border-b border-sidebar-border p-5">
        <Logo className="text-sidebar-foreground" />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {items.map((it) => {
          const active = path === it.to || (it.to !== "/dashboard" && path.startsWith(it.to));
          const exact = it.to === "/dashboard" ? path === "/dashboard" : active;
          return (
            <Link
              key={it.to}
              to={it.to}
              onClick={onNavigate}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                exact
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              }`}
            >
              <it.icon className="h-4 w-4" />
              <span className="flex-1">{it.label}</span>
              {"badge" in it && it.badge ? (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-accent-foreground">
                  {it.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        {subscribed ? (
          <Badge className="mb-3 w-full justify-center bg-success text-success-foreground hover:bg-success">Member · Active</Badge>
        ) : trialExpired ? (
          <Link to="/dashboard/subscription" className="mb-3 block">
            <Badge className="w-full justify-center bg-destructive text-destructive-foreground">Trial expired · Upgrade</Badge>
          </Link>
        ) : (
          <Badge variant="secondary" className="mb-3 w-full justify-center bg-accent/20 text-accent">
            Trial active · {trialDaysLeft}d left
          </Badge>
        )}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-grad text-sm font-semibold text-accent-foreground">
            {user?.username?.[0]?.toUpperCase() ?? "U"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user?.username ?? "Guest"}</p>
            <p className="truncate text-xs text-sidebar-foreground/60">{user?.email ?? ""}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={logout} className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
}

export function TrialBanner() {
  const { trialDaysLeft, trialExpired, subscribed } = useAuth();
  if (subscribed || trialExpired) return null;
  return (
    <div className="flex items-center justify-between gap-3 border-b bg-accent/10 px-6 py-2 text-sm text-foreground">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-accent" />
        <span><strong>{trialDaysLeft} days</strong> left in your free trial.</span>
      </div>
      <Link to="/dashboard/subscription" className="text-sm font-medium text-accent hover:underline">Upgrade →</Link>
    </div>
  );
}
