import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, TrendingUp, MessageSquare, Users, Sparkles, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/about")({
  head: () => ({ meta: [{ title: "About — The Professor's" }] }),
  component: About,
});

function About() {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-hero text-primary-foreground">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> About The Professor's
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            One teacher. One community. <span className="text-accent">Zero noise.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            We built The Professor's for traders who are tired of Discord chaos and 30 contradictory "analysts" in their DMs. Just lectures, ideas, and people who actually take this craft seriously.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md">
            {[
              { k: "1.2k", v: "Members" },
              { k: "180+", v: "Lectures" },
              { k: "94%", v: "Renew rate" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="font-display text-2xl font-semibold">{s.k}</p>
                <p className="text-xs text-primary-foreground/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-12">
        {/* Mission */}
        <section className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-accent">Our promise</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">A room worth showing up to.</h2>
          </div>
          <p className="text-foreground/80 md:col-span-3 md:text-lg">
            Every lecture is recorded. Every trade idea is archived. Every member is welcome. No paid shills, no fake gurus, no "100% win rate" nonsense — just a working trader sharing how he actually does it, and a community pushing each other to get better.
          </p>
        </section>

        {/* Pillars */}
        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: BookOpen, t: "Learn", d: "Weekly deep-dives on market structure, risk and psychology." },
              { i: TrendingUp, t: "Trade", d: "Live ideas with full reasoning — copy at your discretion." },
              { i: MessageSquare, t: "Ask", d: "DM the Professor or any member, any time." },
              { i: Users, t: "Grow", d: "Talk to traders who are serious about their craft." },
            ].map((b) => (
              <div key={b.t} className="group rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <b.i className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="grid gap-0 md:grid-cols-5">
            <div className="bg-hero p-8 text-primary-foreground md:col-span-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-grad font-display text-2xl font-semibold text-accent-foreground">
                M
              </div>
              <p className="mt-4 font-display text-xl font-semibold">Prof. Marcus Hale</p>
              <p className="text-sm text-primary-foreground/60">Teacher · 14 years trading FX & indices</p>
            </div>
            <div className="p-8 md:col-span-3">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                I started this because I was tired of seeing good people lose money to bad teachers. The Professor's is the room I wish existed when I was learning — small enough to know everyone, serious enough to actually grow.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border bg-secondary/40 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold">Questions about the community?</h3>
            <p className="text-sm text-muted-foreground">We read every message. Usually reply within a day.</p>
          </div>
          <Button asChild className="bg-accent-grad text-accent-foreground hover:opacity-90">
            <Link to="/dashboard/contact">Contact us <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
