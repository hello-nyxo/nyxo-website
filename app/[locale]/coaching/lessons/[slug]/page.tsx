import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link, permanentRedirect } from "@/lib/i18n/navigation";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  localizedUrl,
  toMetaDescription,
} from "@/lib/seo";
import {
  getLessonBySlug,
  getAllLessonSlugs,
  getLessonSlugsById,
  getLessonAuthors,
  richTextToPlain,
  renderRichText,
  normalizeImageUrl,
  serializeQuestionnaire,
  type ContentfulEntry,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import LessonFooterNav from "@/components/coaching/LessonFooterNav";
import {
  getLessonPosition,
  isIntroduction,
  weekDisplayNumber,
} from "@/lib/coaching/sequence";
import HabitChip from "@/components/HabitChip";
import Questionnaire from "@/components/Questionnaire";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/** Slugs are localised, so each locale only builds its own. */
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const slugs = await getAllLessonSlugs(params.locale);
  return slugs.map((slug) => ({ slug }));
}

function lessonDescription(fields: Record<string, unknown>): string {
  const prose = richTextToPlain(fields.lessonContent);
  if (prose) return toMetaDescription(prose);
  return Array.isArray(fields.keywords)
    ? (fields.keywords as string[]).join(", ")
    : "";
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const lesson = await getLessonBySlug(slug, locale);
  if (!lesson) return {};
  const fields = lesson.fields as Record<string, unknown>;
  const correctSlug = (fields.slug as string) || slug;
  const slugs = await getLessonSlugsById(lesson.sys.id);
  const cover = fields.cover as { fields?: { file?: { url?: string } } } | undefined;
  return generatePageMetadata({
    title: fields.lessonName as string,
    description: lessonDescription(fields),
    path: `/coaching/lessons/${correctSlug}`,
    locale,
    type: "article",
    image: normalizeImageUrl(cover?.fields?.file?.url),
    tags: Array.isArray(fields.keywords) ? (fields.keywords as string[]) : undefined,
    alternatePaths: {
      ...(slugs.en && { en: `/coaching/lessons/${slugs.en}` }),
      ...(slugs.fi && { fi: `/coaching/lessons/${slugs.fi}` }),
    },
  });
}

export default async function LessonPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const lesson = await getLessonBySlug(slug, locale);

  if (!lesson) notFound();

  // If the URL slug is from another locale, redirect to the correct one
  const fields0 = lesson.fields as Record<string, unknown>;
  const correctSlug = fields0.slug as string;
  if (correctSlug && correctSlug !== slug) {
    permanentRedirect({ href: `/coaching/lessons/${correctSlug}`, locale });
  }

  const fields = lesson.fields as Record<string, unknown>;
  const cover = fields.cover as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);
  const contentHtml = renderRichText(fields.lessonContent);
  const additionalHtml = renderRichText(fields.additionalInformation);
  /** Unresolved links come back without `fields`, so they cannot be rendered. */
  const habits = ((fields.habit as ContentfulEntry[]) || []).filter(
    (habit) => habit?.fields
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quizData = serializeQuestionnaire(fields.questionnaire as any);

  // Where this lesson sits in the programme, so the reader is a path and not
  // a dead end. Undefined only if the lesson belongs to no week.
  const position = await getLessonPosition(slug, locale);
  const weekLabel = position
    ? isIntroduction(position.week)
      ? position.week.name
      : t("WEEK_NUMBER", { order: weekDisplayNumber(position.week) })
    : undefined;

  const authors = getLessonAuthors(fields);
  const jsonLd = generateArticleJsonLd({
    title: fields.lessonName as string,
    description: lessonDescription(fields),
    url: localizedUrl(locale, `/coaching/lessons/${correctSlug}`),
    image: coverUrl,
    author: authors[0]?.name,
    authorSlug: authors[0]?.slug,
    locale,
    type: "LearningResource",
  });

  return (
    <article className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("LESSONS"), href: "/coaching#lessons" },
          ]}
          current={fields.lessonName as string}
        />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        {position && weekLabel && (
          <div className="mb-5">
            <p className="text-sm font-semibold text-brand-blue">
              <Link
                href={`/coaching/weeks/${position.week.slug}`}
                className="no-underline hover:text-brand-deep"
              >
                {weekLabel}
              </Link>
              <span className="mx-2 text-hairline" aria-hidden="true">
                /
              </span>
              <span className="font-medium text-text-secondary">
                {tCoaching("LESSON_PROGRESS", {
                  index: position.lesson.indexInWeek,
                  total: position.week.lessons.length,
                })}
              </span>
            </p>
            <div
              className="mt-3 h-1 w-full overflow-hidden rounded-full bg-hairline"
              role="progressbar"
              aria-valuenow={position.lesson.indexInWeek}
              aria-valuemin={0}
              aria-valuemax={position.week.lessons.length}
              aria-label={weekLabel}
            >
              <div
                className="h-full rounded-full bg-brand-blue"
                style={{
                  width: `${(position.lesson.indexInWeek / position.week.lessons.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
        {Array.isArray(fields.keywords) && (
          <div className="mb-4 flex flex-wrap gap-2">
            {(fields.keywords as string[]).map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-brand-blue/8 px-3 py-1 text-xs font-medium text-brand-blue"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
        <h1 className="mb-4 font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl lg:text-5xl">
          {fields.lessonName as string}
        </h1>
        {authors.length > 0 && (
          <p className="text-sm text-text-secondary">
            {t("LESSON_BY")}:{" "}
            {authors.map((author, i) => (
              <span key={author.slug}>
                {i > 0 && ", "}
                <Link
                  href={`/coaching/authors/${author.slug}`}
                  className="font-medium text-brand-blue hover:underline"
                >
                  {author.name}
                </Link>
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Cover Image: the heading above already names the lesson */}
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

      {/* Content */}
      {contentHtml && (
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-text-secondary
              prose-headings:text-brand-deep prose-headings:font-serif
              prose-a:text-brand-blue
              prose-img:rounded-xl prose-img:shadow-card
              prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      )}

      {/* Habits: one-line labels, so chips rather than cards */}
      {habits.length > 0 && (
        <section className="mx-auto max-w-4xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("HABITS_TO_TRY")}
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {habits.map((habit) => (
              <HabitChip key={habit.sys.id} habit={habit} />
            ))}
          </div>
        </section>
      )}

      {/* Questionnaire */}
      {quizData && quizData.questions.length > 0 && (
        <section className="mx-auto max-w-3xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("TEST_YOUR_KNOWLEDGE")}
          </h2>
          <Questionnaire
            title={quizData.title}
            description={quizData.description}
            questions={quizData.questions}
            results={quizData.results}
          />
        </section>
      )}

      {/* Additional Information */}
      {additionalHtml && (
        <section className="mx-auto max-w-3xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("ADDITIONAL_READING")}
          </h2>
          <div
            className="prose prose-lg max-w-none text-text-secondary prose-headings:text-brand-deep prose-headings:font-serif prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: additionalHtml }}
          />
        </section>
      )}

      {/* The path onward. Without this the lesson is a dead end. */}
      {position && (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LessonFooterNav
            current={slug}
            prev={position.prev}
            next={position.next}
            nextWeekName={
              position.nextWeek
                ? isIntroduction(position.nextWeek)
                  ? position.nextWeek.name
                  : t("WEEK_NUMBER", {
                      order: weekDisplayNumber(position.nextWeek),
                    })
                : undefined
            }
            labels={{
              previousLesson: tCoaching("PREVIOUS_LESSON"),
              nextLesson: tCoaching("NEXT_LESSON"),
              nextWeek: tCoaching("NEXT_WEEK"),
              markComplete: tCoaching("MARK_COMPLETE"),
              completed: tCoaching("COMPLETED"),
            }}
          />
        </div>
      )}
    </article>
  );
}
