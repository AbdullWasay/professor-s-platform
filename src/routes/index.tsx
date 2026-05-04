import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { MessageSquare, BookOpen, TrendingUp, Users, Check, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Professor's — Subscription Chat Community for Traders" },
      { name: "description", content: "Join lectures, copy trade ideas, and learn alongside a focused community. Start with 2 months free." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo className="text-primary-foreground" />
          <nav className="hidden items-center gap-8 text-sm text-primary-foreground/80 md:flex">
            <a href="#features" className="hover:text-primary-foreground">Features</a>
            <a href="#how" className="hover:text-primary-foreground">How it works</a>
            <a href="#pricing" className="hover:text-primary-foreground">Pricing</a>
            <Link to="/contact" className="hover:text-primary-foreground">Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild className="bg-accent-grad text-accent-foreground hover:opacity-90">
              <Link to="/signup">Start free</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-32 pt-36 text-primary-foreground">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Now accepting founding members
              </div>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
                Trade smarter, together.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
                A private chat community where Prof. Marcus shares live lectures, trade ideas, and answers your questions — no noise, no hype, just signal.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-accent-grad text-accent-foreground hover:opacity-90">
                  <Link to="/signup">Start 2-month free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                  <a href="#features">See what's inside</a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-primary-foreground/60">No credit card required · Cancel anytime</p>
            </div>

            {/* Mock chat preview */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-elegant backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between text-xs text-primary-foreground/60">
                  <span># main-forum</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 248 online</span>
                </div>
                <div className="space-y-3">
                  <ChatBubble name="Prof. Marcus" role="Teacher" text="📈 EUR/USD long setup just posted in the forum — entry, SL & TPs in the pinned post." />
                  <ChatBubble name="Sarah" text="In at 1.0822, thanks Prof!" />
                  <ChatBubble name="Lina" text="What's your reasoning on the 4H?" />
                  <ChatBubble name="Prof. Marcus" role="Teacher" text="Bullish RSI div + reclaim of weekly demand. I'll record a walkthrough tonight." />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-accent-grad px-4 py-3 text-sm font-medium text-accent-foreground shadow-glow sm:block">
                +112 pips this week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium text-accent">What's inside</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">Everything you need to grow as a trader.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={BookOpen} title="Live lectures" text="Weekly deep-dives into market structure, risk and psychology. All recorded and searchable." />
          <Feature icon={TrendingUp} title="Trade ideas" text="Setups posted in real time with entries, stops & targets. Copy at your discretion." />
          <Feature icon={MessageSquare} title="Private chat" text="DM the Professor or any member. Build your network, share your journal." />
          <Feature icon={Users} title="Community lounge" text="Casual chat with serious traders — no shilling, no spam." />
          <Feature icon={Sparkles} title="Searchable history" text="Every lecture, every trade, every reply — kept forever for you to revisit." />
          <Feature icon={Check} title="Curated, not crowded" text="One teacher, one community. No 30 'analysts' contradicting each other." />
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center font-display text-4xl font-semibold">Get started in under a minute</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {["Sign up free", "Join the forums", "Trade & learn"].map((s, i) => (
              <div key={s} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent-grad text-sm font-semibold text-accent-foreground">{i + 1}</div>
                <h3 className="font-display text-lg font-semibold">{s}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {i === 0 && "Email + username. 2 months on us — no card required."}
                  {i === 1 && "Jump into the main forum and community lounge instantly."}
                  {i === 2 && "Follow lectures, copy ideas, and ask questions any time."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-semibold">Simple pricing</h2>
        <p className="mt-2 text-muted-foreground">Start free. Stay if it pays for itself ten times over.</p>
        <div className="mt-10 inline-flex flex-col items-center rounded-3xl border bg-card p-10 shadow-elegant">
          <p className="text-sm font-medium text-accent">Membership</p>
          <p className="mt-2 font-display text-6xl font-semibold">$30<span className="text-lg text-muted-foreground">/month</span></p>
          <p className="mt-1 text-sm text-muted-foreground">After your 2-month free trial</p>
          <ul className="mt-6 space-y-2 text-left text-sm">
            {["Full access to all lectures", "Live trade ideas", "Private DMs with the Professor", "Cancel any time"].map((f) => (
              <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {f}</li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 w-full bg-accent-grad text-accent-foreground hover:opacity-90">
            <Link to="/signup">Start free trial</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t bg-primary py-10 text-primary-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
          <Logo className="text-primary-foreground" />
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary-foreground">About</Link>
            <Link to="/terms" className="hover:text-primary-foreground">Terms</Link>
            <Link to="/privacy" className="hover:text-primary-foreground">Privacy</Link>
            <Link to="/contact" className="hover:text-primary-foreground">Contact</Link>
          </div>
          <p>© 2026 The Professor's</p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function ChatBubble({ name, role, text }: { name: string; role?: string; text: string }) {
  const isTeacher = role === "Teacher";
  return (
    <div className="flex gap-3">
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${isTeacher ? "bg-accent-grad text-accent-foreground" : "bg-white/10"}`}>
        {name[0]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium">{name}</span>
          {isTeacher && <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-medium text-accent">TEACHER</span>}
        </div>
        <p className="text-sm text-primary-foreground/80">{text}</p>
      </div>
    </div>
  );
}
