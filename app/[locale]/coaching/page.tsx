import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import {
  getWeeks,
  getLessons,
  getHabits,
  getQuestionnaires,
} from "@/lib/contentful";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    path: "/coaching",
    locale,
    image: "/images/coaching-cover.jpeg",
  });
}

function periodColor(period: unknown) {
  if (period === "MORNING") return "bg-accent-warm/15 text-accent-warm";
  if (period === "AFTERNOON") return "bg-accent-noon/15 text-accent-noon";
  return "bg-accent-dusk/15 text-accent-dusk";
}

export default async function CoachingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("COACHING");

  const [weeks, lessons, habits, questionnaires] = await Promise.all([
    getWeeks(locale),
    getLessons(locale),
    getHabits(locale),
    getQuestionnaires(locale),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative night-sky night-sky-glow grain overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.1] mb-5"
            style={{ animation: "fade-in-up 0.6s ease-out both" }}
          >
            {t("TITLE")}
          </h1>
          <p
            className="text-xl text-white/60 max-w-2xl"
            style={{ animation: "fade-in-up 0.6s ease-out 150ms both" }}
          >
            {t("SUBTITLE")}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
      </section>

      {/* Introduction + How It Works */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimateOnScroll>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            {t("INTRODUCTION")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-deep mb-4">
            {t("HOW_IT_WORKS")}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {t("HOW_IT_WORKS_TEXT")}
          </p>
        </AnimateOnScroll>
      </section>

      {/* Coaching Weeks */}
      {weeks.length > 0 && (
        <section
          id="weeks"
          className="bg-bg-cream py-20 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-3">
                {t("WEEKS")}
              </h2>
              <p className="text-text-secondary mb-10">
                {t("WEEKS_TEXT")}
              </p>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {weeks.map((week, i) => {
                const fields = week.fields as Record<string, unknown>;
                const coverPhoto = fields.coverPhoto as
                  | { fields: { file: { url: string } } }
                  | undefined;
                const coverUrl = coverPhoto?.fields?.file?.url;

                return (
                  <AnimateOnScroll key={week.sys.id} delay={i * 80}>
                    <Link
                      href={`/coaching/weeks/${fields.slug as string}`}
                      className="group block no-underline h-full"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
                        {coverUrl && (
                          <div className="relative aspect-4/3 overflow-hidden">
                            <Image
                              src={
                                coverUrl.startsWith("//")
                                  ? `https:${coverUrl}`
                                  : coverUrl
                              }
                              alt={fields.weekName as string}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <span className="text-xs font-semibold text-brand-blue">
                            Week {fields.order as number}
                          </span>
                          <h3 className="text-lg font-semibold font-sans text-text-primary mt-1 group-hover:text-brand-blue transition-colors">
                            {fields.weekName as string}
                          </h3>
                          <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                            {fields.intro as string}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lessons */}
      {lessons.length > 0 && (
        <section
          id="lessons"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20"
        >
          <AnimateOnScroll>
            <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-3">
              {t("LESSONS")}
            </h2>
            <p className="text-text-secondary mb-10">{t("LESSONS_TEXT")}</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lessons.map((lesson, i) => {
              const fields = lesson.fields as Record<string, unknown>;
              const cover = fields.cover as
                | { fields: { file: { url: string } } }
                | undefined;
              const coverUrl = cover?.fields?.file?.url;

              return (
                <AnimateOnScroll key={lesson.sys.id} delay={i * 60}>
                  <Link
                    href={`/coaching/lessons/${fields.slug as string}`}
                    className="group block no-underline h-full"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
                      {coverUrl && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={
                              coverUrl.startsWith("//")
                                ? `https:${coverUrl}`
                                : coverUrl
                            }
                            alt={fields.lessonName as string}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base font-semibold font-sans text-text-primary line-clamp-2 group-hover:text-brand-blue transition-colors">
                          {fields.lessonName as string}
                        </h3>
                        {Array.isArray(fields.keywords) && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {(fields.keywords as string[])
                              .slice(0, 3)
                              .map((kw: string) => (
                                <span
                                  key={kw}
                                  className="text-xs text-brand-blue bg-brand-blue/8 px-2 py-0.5 rounded-full"
                                >
                                  {kw}
                                </span>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      )}

      {/* Habits */}
      {habits.length > 0 && (
        <section
          id="habits"
          className="bg-bg-cream py-20 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-3">
                {t("HABITS")}
              </h2>
              <p className="text-text-secondary mb-10">{t("HABITS_TEXT")}</p>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {habits.map((habit, i) => {
                const fields = habit.fields as Record<string, unknown>;

                return (
                  <AnimateOnScroll key={habit.sys.id} delay={i * 50}>
                    <Link
                      href={`/coaching/habits/${fields.slug as string}`}
                      className="group block no-underline"
                    >
                      <div className="bg-white rounded-2xl p-6 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                        <span
                          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${periodColor(fields.period)}`}
                        >
                          {fields.period as string}
                        </span>
                        <h3 className="text-base font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors">
                          {fields.title as string}
                        </h3>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Questionnaires */}
      {questionnaires.length > 0 && (
        <section
          id="questionnaires"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20"
        >
          <AnimateOnScroll>
            <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-3">
              {t("QUESTIONNAIRES")}
            </h2>
            <p className="text-text-secondary mb-10">
              {t("QUESTIONNAIRES_TEXT")}
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {questionnaires.map((q, i) => {
              const fields = q.fields as Record<string, unknown>;
              const questionCount = Array.isArray(fields.questions)
                ? fields.questions.length
                : 0;

              return (
                <AnimateOnScroll key={q.sys.id} delay={i * 80}>
                  <Link
                    href={`/coaching/questionnaires/${fields.slug as string}`}
                    className="group block no-underline"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-base font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors mb-2">
                        {fields.title as string}
                      </h3>
                      {questionCount > 0 && (
                        <p className="text-sm text-text-secondary">
                          {questionCount} questions
                        </p>
                      )}
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      )}

      {/* Fallback if no Contentful data */}
      {weeks.length === 0 &&
        lessons.length === 0 &&
        habits.length === 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="bg-white rounded-3xl p-12 border border-hairline">
              <h3 className="text-xl font-semibold text-brand-deep mb-3">
                {t("SLEEP_COACHING")}
              </h3>
              <p className="text-text-secondary">{t("DESCRIPTION")}</p>
            </div>
          </section>
        )}
    </>
  );
}
