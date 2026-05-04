import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — The Professor's" }] }),
  component: Login,
});

function Login() {
  const { signup, user } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: user?.email ?? "", password: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      // demo: create on the fly
      signup({ email: form.email || "demo@professors.app", username: "demo_trader", trialStart: Date.now() });
    }
    nav({ to: "/dashboard" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/40 p-6">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-elegant">
        <Logo />
        <h1 className="mt-6 font-display text-2xl font-semibold">Welcome back</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label>Password</Label>
            <Input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full bg-accent-grad text-accent-foreground hover:opacity-90">Sign in</Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here? <Link to="/signup" className="font-medium text-accent hover:underline">Start free trial</Link>
        </p>
      </div>
    </div>
  );
}
