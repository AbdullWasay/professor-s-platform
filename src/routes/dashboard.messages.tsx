import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { conversations, type Conversation, type DM } from "@/lib/mock-data";
import { Avatar } from "@/components/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/dashboard/messages")({
  head: () => ({ meta: [{ title: "Messages — The Professor's" }] }),
  component: Messages,
});

function Messages() {
  const [convos, setConvos] = useState<Conversation[]>(conversations);
  const [activeId, setActiveId] = useState<string | null>(convos[0]?.id ?? null);
  const [draft, setDraft] = useState("");
  const active = convos.find((c) => c.id === activeId) ?? null;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [active?.messages.length, activeId]);

  const send = () => {
    if (!draft.trim() || !active) return;
    const msg: DM = { id: crypto.randomUUID(), from: "me", text: draft, time: "now" };
    setConvos((cs) => cs.map((c) => (c.id === active.id ? { ...c, messages: [...c.messages, msg], preview: draft } : c)));
    setDraft("");
  };

  return (
    <div className="flex min-h-0 flex-1">
      {/* list */}
      <aside className={`${active ? "hidden md:flex" : "flex"} w-full flex-col border-r bg-card md:w-80`}>
        <div className="border-b px-5 py-4">
          <h1 className="font-display text-xl font-semibold">Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {convos.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`flex w-full items-center gap-3 border-b px-5 py-3 text-left transition hover:bg-secondary/60 ${
                activeId === c.id ? "bg-secondary" : ""
              }`}
            >
              <Avatar author={c.with} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium">{c.with.name}</p>
                  {c.unread > 0 && <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-accent-foreground">{c.unread}</span>}
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.preview}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* thread */}
      <section className={`${active ? "flex" : "hidden md:flex"} min-w-0 flex-1 flex-col`}>
        {active ? (
          <>
            <header className="flex items-center gap-3 border-b bg-card px-5 py-3">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setActiveId(null)}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Avatar author={active.with} size="sm" />
              <div>
                <p className="text-sm font-medium">{active.with.name}</p>
                <p className="text-xs text-muted-foreground">{active.with.role}</p>
              </div>
            </header>

            <div ref={ref} className="flex-1 space-y-3 overflow-y-auto bg-secondary/30 px-4 py-6 sm:px-6">
              {active.messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    m.from === "me" ? "bg-accent-grad text-accent-foreground" : "bg-card border"
                  }`}>
                    <p>{m.text}</p>
                    <p className={`mt-1 text-[10px] ${m.from === "me" ? "text-accent-foreground/70" : "text-muted-foreground"}`}>{m.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t bg-card p-3">
              <div className="flex gap-2">
                <Input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder={`Message ${active.with.name}…`} />
                <Button onClick={send} className="bg-accent-grad text-accent-foreground"><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">Select a conversation</div>
        )}
      </section>
    </div>
  );
}
