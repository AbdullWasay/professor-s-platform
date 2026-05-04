import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { loungeMessages, members, type LoungeMessage } from "@/lib/mock-data";
import { Avatar } from "@/components/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const Route = createFileRoute("/dashboard/lounge")({
  head: () => ({ meta: [{ title: "Community Lounge — The Professor's" }] }),
  component: Lounge,
});

function Lounge() {
  const [msgs, setMsgs] = useState<LoungeMessage[]>(loungeMessages);
  const [draft, setDraft] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    if (!draft.trim()) return;
    setMsgs((m) => [...m, { id: crypto.randomUUID(), author: members[0], text: draft, time: "now" }]);
    setDraft("");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b bg-card px-6 py-4">
        <div className="text-xs text-muted-foreground"># community-lounge</div>
        <h1 className="font-display text-xl font-semibold">Community Lounge</h1>
        <p className="text-sm text-muted-foreground">Casual chat between members. Be kind, no shilling.</p>
      </div>

      <div ref={ref} className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6">
        {msgs.map((m) => (
          <div key={m.id} className="flex gap-3">
            <Avatar author={m.author} size="sm" />
            <div>
              <div className="flex items-baseline gap-2 text-xs">
                <span className="font-medium">{m.author.name}</span>
                <span className="text-muted-foreground">{m.time}</span>
              </div>
              <p className="text-sm text-foreground/85">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t bg-card p-3">
        <div className="flex gap-2">
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Message #community-lounge"
          />
          <Button onClick={send} className="bg-accent-grad text-accent-foreground"><Send className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
