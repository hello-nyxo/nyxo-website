"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { useProgress } from "@/lib/coaching/useProgress";

export interface WeekPathStep {
  slug: string;
  /** "Introduction", or "Week 2". Resolved server-side; it depends on CMS data. */
  label: string;
  name: string;
  intro: string;
  duration: number;
  lessonSlugs: string[];
}

interface WeekPathProps {
  steps: WeekPathStep[];
}

/**
 * The programme as a walkable path. Each step shows what it is and how far
 * through it you are, so the page answers "where do I start" and "where was I"
 * instead of presenting five equal choices.
 */
export default function WeekPath({ steps }: WeekPathProps) {
  const { ready, completed } = useProgress();
  const t = useTranslations("COACHING");

  return (
    <ol className="divide-y divide-hairline border-y border-hairline">
      {steps.map((step, i) => {
        const total = step.lessonSlugs.length;
        const done = ready
          ? step.lessonSlugs.filter((s) => completed.includes(s)).length
          : 0;
        const finished = ready && total > 0 && done === total;

        return (
          <li key={step.slug}>
            <Link
              href={`/coaching/weeks/${step.slug}`}
              className="group flex gap-5 py-7 no-underline"
            >
              <span
                aria-hidden="true"
                className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                  finished
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-hairline text-text-secondary group-hover:border-brand-blue/40"
                }`}
              >
                {finished ? "✓" : i + 1}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-brand-blue">
                  {step.label}
                </span>
                <span className="mt-1 block font-serif text-xl font-semibold text-brand-deep transition-colors group-hover:text-brand-blue sm:text-2xl">
                  {step.name}
                </span>
                {step.intro && (
                  <span className="mt-2 block leading-relaxed text-text-secondary">
                    {step.intro}
                  </span>
                )}

                <span className="mt-3 block text-sm text-text-secondary">
                  {t("LESSON_COUNT", { count: total })}
                  {step.duration > 0 && (
                    <>
                      <span className="mx-2 text-hairline" aria-hidden="true">
                        /
                      </span>
                      {t("DAY_COUNT", { count: step.duration })}
                    </>
                  )}
                  {ready && done > 0 && (
                    <>
                      <span className="mx-2 text-hairline" aria-hidden="true">
                        /
                      </span>
                      <span className="font-semibold text-brand-blue">
                        {t("PROGRESS_SUMMARY", { done, total })}
                      </span>
                    </>
                  )}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
