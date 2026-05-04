import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Start your free trial — The Professor's" }] }),
  component: Signup,
});

function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", username: "", password: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.username || !form.password) return;
    signup({ ...form, trialStart: Date.now() });
    toast.success("Welcome! Your 2-month trial is active.");
    nav({ to: "/dashboard" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-hero p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <Logo className="text-primary-foreground" />
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight">"This is the room I wish I'd had ten years ago."</h2>
          <p className="mt-4 text-primary-foreground/70">— Prof. Marcus Hale, Founder</p>
        </div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden"><Logo /></div>
          <h1 className="font-display text-3xl font-semibold">Start your free trial</h1>
          <p className="mt-2 text-sm text-muted-foreground">2 months free. No credit card required.</p>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@example.com" />
            <Field label="Username" value={form.username} onChange={(v) => setForm({ ...form, username: v })} placeholder="trader42" />
            <Field label="Password" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} placeholder="••••••••" />
            <Button type="submit" className="w-full bg-accent-grad text-accent-foreground hover:opacity-90" size="lg">Start Free Trial</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already a member? <Link to="/login" className="font-medium text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, ...rest }: any) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
    </div>
  );
}
