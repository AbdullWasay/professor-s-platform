import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { forumPosts, members, teacher, type Post, type Comment } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/avatar";
import { Pin, MessageSquare, BookOpen, TrendingUp, Send, Search } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Main Forum — The Professor's" }] }),
  component: Forum,
});

function Forum() {
  const [posts, setPosts] = useState<Post[]>(forumPosts);
  const [query, setQuery] = useState("");

  const addComment = (postId: string, text: string) => {
    if (!text.trim()) return;
    setPosts((p) =>
      p.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: crypto.randomUUID(), author: members[0], text, time: "now" }],
            }
          : post
      )
    );
  };

  const filtered = posts.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-card px-6 py-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span># main-forum</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-success" /> 248 online</span>
          </div>
          <h1 className="font-display text-xl font-semibold">Main Forum</h1>
        </div>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search lectures & ideas…" className="pl-9" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-5">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} onComment={(t) => addComment(post.id, t)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PostCard({ post, onComment }: { post: Post; onComment: (t: string) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const meta = {
    lecture: { icon: BookOpen, label: "Lecture", color: "bg-accent/10 text-accent" },
    trade: { icon: TrendingUp, label: "Trade Idea", color: "bg-success/10 text-success" },
    discussion: { icon: MessageSquare, label: "Discussion", color: "bg-muted text-muted-foreground" },
  }[post.type];

  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm transition hover:shadow-elegant">
      <div className="flex items-center justify-between border-b px-5 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-medium ${meta.color}`}>
            <meta.icon className="h-3 w-3" /> {meta.label}
          </span>
          {post.pinned && (
            <span className="inline-flex items-center gap-1 text-muted-foreground"><Pin className="h-3 w-3" /> Pinned</span>
          )}
        </div>
        <span className="text-muted-foreground">{post.time}</span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <Avatar author={post.author} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">{post.author.name}</span>
              {post.author.role === "Teacher" && (
                <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">TEACHER</span>
              )}
            </div>
            <h2 className="mt-1 font-display text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground/80">{post.content}</p>
          </div>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent"
        >
          <MessageSquare className="h-3.5 w-3.5" /> {post.comments.length} {post.comments.length === 1 ? "reply" : "replies"}
        </button>

        {open && (
          <div className="mt-4 space-y-3 border-t pt-4">
            {post.comments.map((c) => <CommentRow key={c.id} c={c} />)}
            <div className="flex gap-2 pt-1">
              <Input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Write a reply…"
                onKeyDown={(e) => {
                  if (e.key === "Enter") { onComment(draft); setDraft(""); }
                }}
              />
              <Button onClick={() => { onComment(draft); setDraft(""); }} size="icon" className="bg-accent-grad text-accent-foreground">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function CommentRow({ c }: { c: Comment }) {
  return (
    <div className="flex gap-3">
      <Avatar author={c.author} size="sm" />
      <div className="min-w-0 flex-1 rounded-lg bg-secondary/60 px-3 py-2">
        <div className="flex items-baseline gap-2 text-xs">
          <span className="font-medium text-foreground">{c.author.name}</span>
          {c.author.role === "Teacher" && <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">TEACHER</span>}
          <span className="text-muted-foreground">{c.time}</span>
        </div>
        <p className="mt-0.5 text-sm text-foreground/80">{c.text}</p>
      </div>
    </div>
  );
}
