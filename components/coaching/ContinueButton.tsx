"use client";

import { Link } from "@/lib/i18n/navigation";
import { useProgress } from "@/lib/coaching/useProgress";

interface ContinueButtonProps {
  /** Ordered lesson slugs for the scope this button covers (week or programme). */
  sequence: { slug: string; name: string }[];
  labels: { start: string; continue: string };
  className?: string;
}

/**
 * Renders "Start" on the server and on first paint, then upgrades to "Continue"
 * once localStorage has been read. It never reads storage during render, which
 * would desync from the server HTML and break hydration.
 */
export default function ContinueButton({
  sequence,
  labels,
  className,
}: ContinueButtonProps) {
  const { ready, completed } = useProgress();

  if (sequence.length === 0) return null;

  const firstUnfinished = ready
    ? sequence.find((step) => !completed.includes(step.slug))
    : undefined;

  // Everything done: send them back to the last lesson rather than nowhere.
  const target = firstUnfinished ?? (ready ? sequence[sequence.length - 1] : sequence[0]);
  const resuming = ready && completed.length > 0;

  return (
    <Link
      href={`/coaching/lessons/${target.slug}`}
      className={
        className ??
        "inline-flex items-center rounded-full bg-brand-blue px-8 py-4 font-semibold text-white no-underline transition-colors hover:bg-brand-deep active:scale-[0.98]"
      }
    >
      {resuming ? labels.continue : labels.start} &rarr;
    </Link>
  );
}
