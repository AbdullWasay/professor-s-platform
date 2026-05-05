import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { MessageSquare, BookOpen, TrendingUp, Users, Check, ArrowRight, Sparkles, Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

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
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply within 24h.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

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
            <a href="#contact" className="hover:text-primary-foreground">Contact</a>
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
      <section id="how" className="border-y bg-secondary/40 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-accent">How it works</p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Get started in under a minute.</h2>
            <p className="mt-3 text-muted-foreground">Three steps. No card. No setup calls. Just open the door and walk in.</p>
          </div>

          <ol className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            {[
              { t: "Create your account", d: "Email + username. Two months on us — no card required.", k: "01" },
              { t: "Step inside the rooms", d: "Forum, lounge & DMs unlock the moment you sign in.", k: "02" },
              { t: "Learn, trade, repeat", d: "Follow lectures, copy ideas, ask anything — at your pace.", k: "03" },
            ].map((s) => (
              <li key={s.k} className="relative">
                <div className="relative z-10 mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border bg-background font-display text-sm font-semibold text-accent">
                  {s.k}
                </div>
                <h3 className="text-center font-display text-lg font-semibold">{s.t}</h3>
                <p className="mx-auto mt-2 max-w-xs text-center text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Pricing</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">One plan. Everything included.</h2>
          <p className="mt-3 text-muted-foreground">No tiers, no add-ons, no upsells. If it doesn't pay for itself, you walk.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-elegant md:grid-cols-5">
          <div className="md:col-span-3 border-b p-10 md:border-b-0 md:border-r">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">Membership</span>
              <span className="text-xs text-muted-foreground">Billed monthly</span>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-6xl font-semibold tracking-tight">$30</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">After your 2-month free trial. Cancel any time, no questions.</p>

            <div className="my-8 h-px bg-border" />

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "All live & recorded lectures",
                "Real-time trade ideas",
                "Private DMs with the Professor",
                "Community lounge & forum",
                "Searchable archive forever",
                "Cancel any time",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between bg-secondary/40 p-10 md:col-span-2">
            <div>
              <p className="font-display text-xl font-semibold">Start free for 60 days.</p>
              <p className="mt-2 text-sm text-muted-foreground">Full access from minute one. We'll remind you before the trial ends.</p>
            </div>
            <div className="mt-8 space-y-3">
              <Button asChild size="lg" className="w-full bg-accent-grad text-accent-foreground hover:opacity-90">
                <Link to="/signup">Start free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t bg-secondary/30 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-accent">Contact</p>
            <h2 className="mt-2 font-display text-4xl font-semibold">Talk to our team.</h2>
            <p className="mt-3 text-muted-foreground">
              Questions before joining? Send a message and we will get back within one business day.
            </p>
            <div className="mt-6 space-y-4">
              <Info icon={Mail} title="Email" value="hello@theprofessors.demo" />
              <Info icon={Phone} title="Phone" value="+1 (555) 010-2026" />
              <Info icon={MessageCircle} title="Hours" value="Mon–Fri · 9am–6pm" />
            </div>
          </div>
          <form onSubmit={submitContact} className="rounded-2xl border bg-card p-6 shadow-elegant lg:col-span-3">
            <h3 className="font-display text-2xl font-semibold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We usually respond in less than 24 hours.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="contact-phone">Phone number</Label>
              <Input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 (555) 010-2026"
                required
              />
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-accent-grad text-accent-foreground hover:opacity-90 sm:w-auto">
              Send message <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/70">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Logo className="text-primary-foreground" />
              <p className="mt-4 max-w-sm text-sm text-primary-foreground/60">
                A focused chat community for traders who want to learn, share and grow — without the noise.
              </p>
              <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
                <Button type="submit" className="bg-accent-grad text-accent-foreground hover:opacity-90">Notify me</Button>
              </form>
            </div>

            <FooterCol title="Sections" links={[{ to: "/#features", l: "Features" }, { to: "/#how", l: "How it works" }, { to: "/#pricing", l: "Pricing" }, { to: "/#contact", l: "Contact" }]} />
            <FooterCol title="Legal" links={[{ to: "/terms", l: "Terms" }, { to: "/privacy", l: "Privacy" }]} />
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs md:flex-row md:items-center">
            <p>© 2026 The Professor's. All rights reserved.</p>
            <p className="text-primary-foreground/50">Built for traders, by a trader.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; l: string }[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-sm font-semibold text-primary-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((x) => (
          <li key={x.l}><Link to={x.to} className="text-primary-foreground/60 hover:text-primary-foreground">{x.l}</Link></li>
        ))}
      </ul>
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

function Info({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="text-sm font-medium">{value}</p>
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
