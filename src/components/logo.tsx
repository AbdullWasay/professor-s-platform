import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-grad text-accent-foreground shadow-glow">
        <GraduationCap className="h-4 w-4" />
      </span>
      <span>The Professor's</span>
    </Link>
  );
}
