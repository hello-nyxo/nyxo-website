import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { generatePageMetadata, toMetaDescription } from "@/lib/seo";
import {
  getWeekBySlug,
  getAllWeekSlugs,
  renderRichText,
  normalizeImageUrl,
} from "@/lib/contentful";
import {
  getProgramme,
  getWeekNeighbours,
  isIntroduction,
  weekDisplayNumber,
  countCoachingWeeks,
  type ProgrammeWeek,
} from "@/lib/coaching/sequence";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "@/lib/i18n/navigation";
import LessonList from "@/components/coaching/LessonList";
import ContinueButton from "@/components/coaching/ContinueButton";
import HabitChip from "@/components/HabitChip";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllWeekSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const week = await getWeekBySlug(slug, locale);
  if (!week) return {};
  const fields = week.fields as Record<string, unknown>;
  return generatePageMetadata({
    title: fields.weekName as string,
    description: toMetaDescription((fields.intro as string) || ""),
    path: `/coaching/weeks/${slug}`,
    locale,
  });
}

export default async function WeekPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const week = await getWeekBySlug(slug, locale);

  if (!week) notFound();

  const fields = week.fields as Record<string, unknown>;
  const coverPhoto = fields.coverPhoto as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(coverPhoto?.fields?.file?.url);
  const descriptionHtml = renderRichText(fields.weekDescription);

  // The sequence module owns ordering, labelling and the derived habit set.
  const programme = await getProgramme(locale);
  const step = programme.weeks.find((w) => w.slug === slug);
  const { prev, next } = await getWeekNeighbours(slug, locale);
  const totalWeeks = countCoachingWeeks(programme);

  const label = (w: ProgrammeWeek) =>
    isIntroduction(w)
      ? w.name
      : t("WEEK_NUMBER", { order: weekDisplayNumber(w) });

  const lessons = step?.lessons ?? [];

  return (
    <article className="pb-20">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("WEEKS"), href: "/coaching#weeks" },
          ]}
          current={fields.weekName as string}
        />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        {step && (
          <span className="text-sm font-semibold text-brand-blue">
            {isIntroduction(step)
              ? step.name
              : tCoaching("WEEK_PROGRESS", {
                  index: weekDisplayNumber(step),
                  total: totalWeeks,
                })}
          </span>
        )}
        <h1 className="mt-1 mb-4 font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl lg:text-5xl">
          {fields.weekName as string}
        </h1>
        <p className="text-xl leading-relaxed text-text-secondary">
          {fields.intro as string}
        </p>
        {step && (
          <p className="mt-4 text-sm text-text-secondary">
            {tCoaching("LESSON_COUNT", { count: step.lessons.length })}
            {step.duration > 0 && (
              <>
                <span className="mx-2 text-hairline" aria-hidden="true">
                  /
                </span>
                {tCoaching("DAY_COUNT", { count: step.duration })}
              </>
            )}
          </p>
        )}
        {lessons.length > 0 && (
          <div className="mt-8">
            <ContinueButton
              sequence={lessons.map((l) => ({ slug: l.slug, name: l.name }))}
              labels={{
                start: tCoaching("START_WEEK"),
                continue: tCoaching("CONTINUE_WEEK"),
              }}
            />
          </div>
        )}
      </header>

      {/* Cover Image: the heading above already names the week */}
      {coverUrl && (
        <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline">
            <Image
              src={coverUrl}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Description */}
      {descriptionHtml && (
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("ABOUT_THIS_WEEK")}
          </h2>
          <div
            className="prose prose-lg max-w-none text-text-secondary
              prose-headings:text-brand-deep prose-headings:font-serif
              prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>
      )}

      {/* Lessons: an ordered path through the week, not a pick-any grid */}
      {lessons.length > 0 && (
        <section className="mx-auto max-w-3xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("LESSONS_FOR_THIS_WEEK")}
          </h2>
          <LessonList lessons={lessons} />
        </section>
      )}

      {/* Habits this week introduces, gathered from its lessons. */}
      {step && step.habits.length > 0 && (
        <section className="mx-auto max-w-3xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("HABITS_TO_TRY")}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {step.habits.map((habit) => (
              <HabitChip
                key={habit.slug}
                habit={{
                  sys: { id: habit.slug },
                  fields: { slug: habit.slug, title: habit.title },
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Week pager */}
      {(prev || next) && (
        <nav className="mx-auto max-w-3xl border-t border-hairline px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            {prev ? (
              <Link
                href={`/coaching/weeks/${prev.slug}`}
                className="group max-w-[45%] no-underline"
              >
                <span className="block text-sm text-text-secondary">
                  {tCoaching("PREVIOUS_WEEK")}
                </span>
                <span className="mt-1 block font-semibold text-brand-blue transition-colors group-hover:text-brand-deep">
                  {label(prev)}: {prev.name}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/coaching/weeks/${next.slug}`}
                className="group max-w-[45%] text-right no-underline"
              >
                <span className="block text-sm text-text-secondary">
                  {tCoaching("NEXT_WEEK")}
                </span>
                <span className="mt-1 block font-semibold text-brand-blue transition-colors group-hover:text-brand-deep">
                  {label(next)}: {next.name}
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </article>
  );
}
