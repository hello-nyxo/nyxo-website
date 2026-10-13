import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata, generateCourseJsonLd } from "@/lib/seo";
import {
  getLessons,
  getHabits,
  getQuestionnaires,
  getMetalessons,
} from "@/lib/contentful";
import {
  getProgramme,
  isIntroduction,
  weekDisplayNumber,
} from "@/lib/coaching/sequence";
import LessonCard from "@/components/LessonCard";
import HabitChip from "@/components/HabitChip";
import WeekPath from "@/components/coaching/WeekPath";
import ContinueButton from "@/components/coaching/ContinueButton";

const PERIOD_ORDER = ["MORNING", "AFTERNOON", "EVENING"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("META_DESCRIPTION"),
    path: "/coaching",
    locale,
    image: "/images/coaching-cover.jpeg",
  });
}

export default async function CoachingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("COACHING");
  const tRoot = await getTranslations();

  const [programme, lessons, habits, questionnaires, topics] = await Promise.all([
    getProgramme(locale),
    getLessons(locale),
    getHabits(locale),
    getQuestionnaires(locale),
    getMetalessons(locale),
  ]);

  const periodLabels: Record<string, string> = {
    MORNING: tRoot("MORNING"),
    AFTERNOON: tRoot("AFTERNOON"),
    EVENING: tRoot("EVENING"),
  };

  /**
   * Every habit has to land somewhere on the index, so anything without a
   * recognised period falls into EVENING. That mirrors how the habit detail
   * page labels the same field.
   */
  const habitGroups = PERIOD_ORDER.map((period) => ({
    period,
    label: periodLabels[period],
    habits: habits.filter((habit) => {
      const value = String(habit.fields.period);
      return period === "EVENING"
        ? value !== "MORNING" && value !== "AFTERNOON"
        : value === period;
    }),
  })).filter((group) => group.habits.length > 0);

  const courseJsonLd = generateCourseJsonLd({
    name: t("TITLE"),
    description: t("DESCRIPTION"),
    locale,
    sections: programme.weeks.map((w) => ({
      slug: w.slug,
      name: w.name,
      description: w.intro,
      lessonCount: w.lessons.length,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Hero */}
      <section className="relative night-sky night-sky-glow grain overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
          <h1 className="font-serif text-4xl leading-[1.1] font-semibold text-white sm:text-5xl lg:text-6xl">
            {t("TITLE")}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-white/60">
            {t("SUBTITLE")}
          </p>
          {programme.steps.length > 0 && (
            <div className="mt-9">
              <ContinueButton
                sequence={programme.steps.map((s) => ({
                  slug: s.slug,
                  name: s.name,
                }))}
                labels={{
                  start: t("START_PROGRAM"),
                  continue: t("CONTINUE_PROGRAM"),
                }}
                className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-brand-deep no-underline transition-all hover:bg-white/90 hover:shadow-glow active:scale-[0.98]"
              />
            </div>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-bg-primary to-transparent" />
      </section>

      {/* The page's own statement: the one centered moment here */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mx-auto max-w-[60ch] text-lg leading-relaxed text-text-secondary">
          {t("INTRODUCTION")}
        </p>
      </section>

      {/* How it works: heading sits beside its prose, not above it */}
      <section className="bg-bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 sm:px-6 md:grid-cols-12 md:gap-8 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-deep md:col-span-4 sm:text-4xl">
            {t("HOW_IT_WORKS")}
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary md:col-span-7 md:col-start-6">
            {t("HOW_IT_WORKS_TEXT")}
          </p>
        </div>
      </section>

      {/* The programme itself: an ordered path, which is the point of the page */}
      {programme.weeks.length > 0 && (
        <section
          id="weeks"
          className="mx-auto max-w-3xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mb-10 max-w-xl">
            <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
              {t("WEEKS")}
            </h2>
            <p className="mt-3 text-text-secondary">{t("WEEKS_TEXT")}</p>
          </div>
          <WeekPath
            steps={programme.weeks.map((w) => ({
              slug: w.slug,
              label: isIntroduction(w)
                ? w.name
                : tRoot("WEEK_NUMBER", { order: weekDisplayNumber(w) }),
              name: w.name,
              intro: w.intro,
              duration: w.duration,
              lessonSlugs: w.lessons.map((l) => l.slug),
            }))}
          />
        </section>
      )}

      {/* Topics: lessons gathered around the questions people search for. */}
      {topics.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {t("TOPICS")}
          </h2>
          <p className="mt-3 text-text-secondary">{t("TOPICS_TEXT")}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <li key={topic.sys.id}>
                <Link
                  href={`/coaching/topics/${String(topic.fields.slug)}`}
                  className="inline-flex rounded-full border border-hairline bg-white px-5 py-2.5 font-medium text-text-primary no-underline transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                >
                  {String(topic.fields.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Lessons: this is the canonical index the homepage links into, so the
          full set is browsable as a grid rather than a one-way scroller. */}
      {lessons.length > 0 && (
        <section id="lessons" className="scroll-mt-20 bg-bg-cream py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
                {t("LESSONS")}
              </h2>
              <p className="mt-3 text-text-secondary">{t("LESSONS_TEXT")}</p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {lessons.map((lesson) => (
                <li key={lesson.sys.id}>
                  <LessonCard lesson={lesson} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Habits: one-line labels grouped by time of day, so chips not cards */}
      {habitGroups.length > 0 && (
        <section
          id="habits"
          className="mx-auto max-w-5xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mb-10 max-w-xl">
            <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
              {t("HABITS")}
            </h2>
            <p className="mt-3 text-text-secondary">{t("HABITS_TEXT")}</p>
          </div>
          <div className="space-y-8">
            {habitGroups.map((group) => (
              <div key={group.period} className="grid gap-4 md:grid-cols-12">
                <h3 className="font-sans text-sm font-semibold text-brand-deep md:col-span-3 md:pt-2">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2.5 md:col-span-9">
                  {group.habits.map((habit) => (
                    <HabitChip key={habit.sys.id} habit={habit} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Questionnaires: a short index, so plain rows rather than cards */}
      {questionnaires.length > 0 && (
        <section id="questionnaires" className="scroll-mt-20 bg-bg-cream py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
                {t("QUESTIONNAIRES")}
              </h2>
              <p className="mt-3 text-text-secondary">
                {t("QUESTIONNAIRES_TEXT")}
              </p>
            </div>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {questionnaires.map((q) => {
                const fields = q.fields;
                const questionCount = Array.isArray(fields.questions)
                  ? fields.questions.length
                  : 0;

                return (
                  <li key={q.sys.id}>
                    <Link
                      href={`/coaching/questionnaires/${String(fields.slug)}`}
                      className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 no-underline"
                    >
                      <h3 className="font-serif text-xl font-semibold text-brand-deep transition-colors group-hover:text-brand-blue">
                        {String(fields.title)}
                      </h3>
                      {questionCount > 0 && (
                        <span className="shrink-0 text-sm text-text-secondary">
                          {t("QUESTION_COUNT", { count: questionCount })}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Fallback if no Contentful data */}
      {programme.weeks.length === 0 &&
        lessons.length === 0 &&
        habits.length === 0 && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-hairline bg-white p-12">
            <h3 className="font-serif text-xl font-semibold text-brand-deep">
              {t("SLEEP_COACHING")}
            </h3>
            <p className="mt-3 text-text-secondary">{t("DESCRIPTION")}</p>
          </div>
        </section>
      )}
    </>
  );
}
