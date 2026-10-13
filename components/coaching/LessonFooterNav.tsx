"use client";

import { useEffect } from "react";
import { Link } from "@/lib/i18n/navigation";
import { useProgress } from "@/lib/coaching/useProgress";

interface Target {
  slug: string;
  name: string;
}

interface LessonFooterNavProps {
  current: string;
  prev?: Target;
  next?: Target;
  /** Set when `next` is the first lesson of a new week. */
  nextWeekName?: string;
  labels: {
    previousLesson: string;
    nextLesson: string;
    nextWeek: string;
    markComplete: string;
    completed: string;
  };
}

/**
 * The end of a lesson. Marking complete and moving on is one action, because
 * that is what a learner actually wants to do; the tick is a side effect.
 */
export default function LessonFooterNav({
  current,
  prev,
  next,
  nextWeekName,
  labels,
}: LessonFooterNavProps) {
  const { ready, isComplete, complete, visit } = useProgress();

  useEffect(() => {
    visit(current);
  }, [current, visit]);

  const done = ready && isComplete(current);

  return (
    <nav className="mt-14 border-t border-hairline pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/coaching/lessons/${prev.slug}`}
            className="group max-w-[45%] no-underline"
          >
            <span className="block text-sm text-text-secondary">
              {labels.previousLesson}
            </span>
            <span className="mt-1 block font-semibold text-brand-blue transition-colors group-hover:text-brand-deep">
              {prev.name}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={`/coaching/lessons/${next.slug}`}
            onClick={() => complete(current)}
            className="group max-w-[45%] text-right no-underline"
          >
            <span className="block text-sm text-text-secondary">
              {nextWeekName ? `${labels.nextWeek}: ${nextWeekName}` : labels.nextLesson}
            </span>
            <span className="mt-1 block font-semibold text-brand-blue transition-colors group-hover:text-brand-deep">
              {next.name}
            </span>
          </Link>
        )}
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={() => complete(current)}
          disabled={!ready || done}
          className="inline-flex items-center rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white disabled:cursor-default disabled:border-hairline disabled:bg-transparent disabled:text-text-secondary active:scale-[0.98]"
        >
          {done ? `✓ ${labels.completed}` : labels.markComplete}
        </button>
      </div>
    </nav>
  );
}
