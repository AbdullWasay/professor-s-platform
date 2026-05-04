import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/contact")({
  head: () => ({ meta: [{ title: "Contact — The Professor's" }] }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply within 24h.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="flex-1 overflow-y-auto px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-3xl font-semibold">Contact us</h1>
        <p className="mt-1 text-muted-foreground">We typically respond within one business day.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Info icon={Mail} title="Email" value="hello@theprofessors.demo" />
          <Info icon={Phone} title="Phone" value="+1 (555) 010-2026" />
          <Info icon={MessageCircle} title="Live chat" value="Mon–Fri · 9am–6pm" />
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border bg-card p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          </div>
          <div className="space-y-1.5"><Label>Message</Label><Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
          <Button type="submit" className="bg-accent-grad text-accent-foreground">Send message</Button>
        </form>
      </div>
    </div>
  );
}

function Info({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"><Icon className="h-4 w-4" /></div>
      <p className="text-xs text-muted-foreground">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
