import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "./contact";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — The Professor's" }] }),
  component: () => (
    <PublicShell title="Privacy Policy">
      <p><em>Demo content.</em></p>
      <p className="mt-4">We collect the minimum data required to operate the service: your email, username, and chat messages. We never sell your data. You can request deletion of your account at any time by contacting hello@theprofessors.demo.</p>
    </PublicShell>
  ),
});
