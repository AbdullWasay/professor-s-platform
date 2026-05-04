import type { Author } from "@/lib/mock-data";

export function Avatar({ author, size = "md" }: { author: Author; size?: "sm" | "md" | "lg" }) {
  const sz = size === "sm" ? "h-7 w-7 text-[10px]" : size === "lg" ? "h-12 w-12 text-base" : "h-9 w-9 text-xs";
  const teacher = author.role === "Teacher";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${sz} ${
        teacher ? "bg-accent-grad text-accent-foreground shadow-glow" : "bg-primary/10 text-primary"
      }`}
    >
      {author.avatar}
    </div>
  );
}
