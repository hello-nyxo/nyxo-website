"use client";

import { Link } from "@/lib/i18n/navigation";
import { useProgress } from "@/lib/coaching/useProgress";

interface LessonListProps {
  lessons: { slug: string; name: string; indexInWeek: number }[];
}

/**
 * An ordered, numbered list rather than a grid of cards: a grid invites you to
 * pick any one, a numbered list says these run in order.
 */
export default function LessonList({ lessons }: LessonListProps) {
  const { ready, isComplete } = useProgress();

  return (
    <ol className="divide-y divide-hairline border-y border-hairline">
      {lessons.map((lesson) => {
        const done = ready && isComplete(lesson.slug);
        return (
          <li key={lesson.slug}>
            <Link
              href={`/coaching/lessons/${lesson.slug}`}
              className="group flex items-center gap-4 py-4 no-underline"
            >
              <span
                aria-hidden="true"
                className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  done
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-hairline text-text-secondary group-hover:border-brand-blue/40"
                }`}
              >
                {done ? "✓" : lesson.indexInWeek}
              </span>
              <span className="font-medium text-text-primary transition-colors group-hover:text-brand-blue">
                {lesson.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
