import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export function PublicShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Logo />
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-3xl font-semibold">{title}</h1>
        <div className="prose prose-slate mt-6 max-w-none text-foreground/85">{children}</div>
      </main>
    </div>
  );
}
