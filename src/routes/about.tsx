import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — The Professor's" }] }),
  component: () => (
    <PublicShell title="About The Professor's">
      <p>The Professor's is a private, subscription-based chat community for traders who value signal over noise. One teacher, one community — built for serious learners.</p>
      <p className="mt-4">Founded by Prof. Marcus Hale, the community brings together lectures, trade ideas and conversation in a single, focused space.</p>
    </PublicShell>
  ),
});
