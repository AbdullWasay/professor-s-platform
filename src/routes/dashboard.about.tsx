import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/about")({
  head: () => ({ meta: [{ title: "About — The Professor's" }] }),
  component: About,
});

function About() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="font-display text-3xl font-semibold">What we do</h1>
          <p className="mt-2 text-muted-foreground">The Professor's is a focused, subscription-based community for traders who want to learn, share, and grow without the noise.</p>
        </header>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold">Our promise</h2>
          <p className="text-foreground/80">One teacher. One community. No 30 contradictory "analysts" in your DMs. Every lecture is recorded, every trade idea archived, every member welcome.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Learn", d: "Weekly lectures from Prof. Marcus Hale on market structure, risk and psychology." },
            { t: "Trade", d: "Live trade ideas with full reasoning — copy at your discretion." },
            { t: "Grow", d: "Talk to traders who actually take their craft seriously." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border bg-card p-5">
              <h3 className="font-display text-lg font-semibold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
