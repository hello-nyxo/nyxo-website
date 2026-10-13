import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { getAllPosts } from "@/lib/markdown";
import {
  getLessons,
  getHabits,
  getQuestionnaires,
  getAuthors,
  getMetalessons,
  normalizeImageUrl,
} from "@/lib/contentful";
import { getProgramme, isIntroduction, weekDisplayNumber } from "@/lib/coaching/sequence";
import { getAllProgrammaticSlugs } from "@/lib/programmatic/loader";
import {
  generatePageMetadata,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";
import ContinueButton from "@/components/coaching/ContinueButton";
import LessonCard from "@/components/LessonCard";
import HabitChip from "@/components/HabitChip";
import { formatDate } from "@/lib/utils";

const PERIOD_ORDER = ["MORNING", "AFTERNOON", "EVENING"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "INDEX" });
  const [lessons, habits] = await Promise.all([getLessons(locale), getHabits(locale)]);
  return generatePageMetadata({
    title: t("META_TITLE"),
    absoluteTitle: true,
    description: t("META_DESCRIPTION", {
      lessons: lessons.length,
      habits: habits.length,
    }),
    path: "/",
    locale,
    image: "/images/cover.png",
  });
}

/** Shared primary-button look, so both CTAs on the page read as one action. */
const primaryCta =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-semibold text-brand-deep no-underline transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("INDEX");
  const tCoaching = await getTranslations("COACHING");
  const tRoot = await getTranslations();

  const [programme, lessons, habits, questionnaires, authors, topics] =
    await Promise.all([
      getProgramme(locale),
      getLessons(locale),
      getHabits(locale),
      getQuestionnaires(locale),
      getAuthors(),
      getMetalessons(locale),
    ]);
  const posts = getAllPosts(locale).slice(0, 3);
  const guideCount = getAllProgrammaticSlugs().length;
  const coachingWeeks = programme.weeks.filter((w) => !isIntroduction(w));

  const weekLabel = (w: (typeof programme.weeks)[number]) =>
    isIntroduction(w) ? w.name : tRoot("WEEK_NUMBER", { order: weekDisplayNumber(w) });

  const periodLabels: Record<string, string> = {
    MORNING: tRoot("MORNING"),
    AFTERNOON: tRoot("AFTERNOON"),
    EVENING: tRoot("EVENING"),
  };
  const habitGroups = PERIOD_ORDER.map((period) => ({
    period,
    label: periodLabels[period],
    habits: habits.filter((h) => String(h.fields.period) === period).slice(0, 5),
  })).filter((group) => group.habits.length > 0);

  const people = authors
    .map((a) => {
      const f = a.fields as Record<string, unknown>;
      const avatar = f.avatar as { fields?: { file?: { url?: string } } } | undefined;
      return {
        id: a.sys.id,
        name: String(f.name ?? ""),
        photo: normalizeImageUrl(avatar?.fields?.file?.url),
      };
    })
    .filter((p) => p.photo);

  const lifestyleWeek = programme.weeks[programme.weeks.length - 1];
  const startWeek = programme.weeks.find((w) => !isIntroduction(w));
  const topic = topics[0];
  const [featured, ...morePosts] = posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteJsonLd(t("HERO_SUBTITLE"))),
        }}
      />

      {/* Hero: copy left, the night sky right. The moon photo is the programme's
          own "Falling Asleep" cover, so the visual is the product's, not stock. */}
      <section className="relative overflow-hidden night-sky night-sky-glow grain">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-6">
            <h1
              className="rise font-serif text-[clamp(2.5rem,4.4vw,4.25rem)] leading-[1.05] font-semibold text-white"
              style={{ "--rise-index": 0 } as React.CSSProperties}
            >
              {t("HERO_TITLE")}
            </h1>
            <p
              className="rise mt-6 max-w-[46ch] text-lg leading-relaxed text-white/80"
              style={{ "--rise-index": 1 } as React.CSSProperties}
            >
              {t("HERO_SUBTITLE")}
            </p>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
              style={{ "--rise-index": 2 } as React.CSSProperties}
            >
              {programme.steps.length > 0 && (
                <ContinueButton
                  sequence={programme.steps.map((s) => ({ slug: s.slug, name: s.name }))}
                  labels={{
                    start: tCoaching("START_PROGRAM"),
                    continue: tCoaching("CONTINUE_PROGRAM"),
                  }}
                  className={primaryCta}
                />
              )}
              <Link
                href="/coaching#lessons"
                className="inline-flex items-center gap-2 font-semibold text-white no-underline underline-offset-4 hover:text-white hover:underline"
              >
                {t("CTA_BROWSE")}
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image
                src="/images/hero-moon.jpg"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-[42%] overflow-hidden rounded-3xl shadow-[0_24px_60px_-20px_rgba(15,10,42,0.8)] ring-4 ring-[#1a0a4a] sm:block lg:-left-10">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/hero-morning.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who wrote it: the credibility the hero deliberately leaves out. */}
      {people.length > 0 && (
        <section className="border-b border-hairline bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex items-center gap-5">
              <ul className="flex -space-x-3" aria-hidden="true">
                {people.slice(0, 6).map((p) => (
                  <li
                    key={p.id}
                    className="relative size-11 overflow-hidden rounded-full ring-2 ring-white"
                  >
                    <Image src={p.photo!} alt="" fill className="object-cover" sizes="44px" />
                  </li>
                ))}
              </ul>
              <p className="max-w-[52ch] text-sm leading-relaxed text-text-secondary sm:text-base">
                {t("AUTHORS_LINE")}
              </p>
            </div>
            <Link
              href="/coaching/authors"
              className="shrink-0 text-sm font-semibold text-brand-blue no-underline hover:text-brand-deep"
            >
              {t("MEET_AUTHORS")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {/* What's inside: five real counts from the CMS, five cells, no filler. */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <h2 className="max-w-[20ch] font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-5xl">
          {t("INSIDE_HEADING")}
        </h2>
        <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {/* Weeks: the anchor tile, image-led. 4 cols x 2 rows. */}
          <Link
            href="/coaching#weeks"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-bg-dark p-7 no-underline md:col-span-4 md:row-span-2 md:p-9"
          >
            {startWeek?.coverUrl && (
              <Image
                src={startWeek.coverUrl}
                alt=""
                fill
                className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-[#0f0a2a] via-[#0f0a2a]/60 to-transparent" />
            <div className="relative">
              <h3 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                {t("STAT_WEEKS", { count: coachingWeeks.length })}
              </h3>
              <p className="mt-3 max-w-[48ch] leading-relaxed text-white/85">
                {t("STAT_WEEKS_TEXT")}
              </p>
            </div>
          </Link>

          {/* Lessons: tinted. 2 cols. */}
          <Link
            href="/coaching#lessons"
            className="group flex flex-col justify-between rounded-3xl bg-brand-blue/[0.07] p-7 no-underline transition-colors hover:bg-brand-blue/[0.11] md:col-span-2"
          >
            <h3 className="font-serif text-3xl font-semibold text-brand-deep">
              {t("STAT_LESSONS", { count: lessons.length })}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-text-secondary">
              {t("STAT_LESSONS_TEXT")}
            </p>
          </Link>

          {/* Habits: deep brand fill. 2 cols. */}
          <Link
            href="/coaching#habits"
            className="group flex flex-col justify-between rounded-3xl bg-brand-deep p-7 no-underline transition-colors hover:bg-[#241063] md:col-span-2"
          >
            <h3 className="font-serif text-3xl font-semibold text-white">
              {t("STAT_HABITS", { count: habits.length })}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              {t("STAT_HABITS_TEXT")}
            </p>
          </Link>

          {/* Questionnaires: plain. 3 cols. */}
          <Link
            href="/coaching/questionnaires"
            className="group rounded-3xl border border-hairline bg-white p-7 no-underline transition-colors hover:border-brand-blue/30 md:col-span-3"
          >
            <h3 className="font-serif text-3xl font-semibold text-brand-deep">
              {t("STAT_QUIZZES", { count: questionnaires.length })}
            </h3>
            <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-text-secondary">
              {t("STAT_QUIZZES_TEXT")}
            </p>
          </Link>

          {/* Guides: image on the right half. 3 cols. */}
          <Link
            href="/sleep"
            className="group grid grid-cols-5 overflow-hidden rounded-3xl bg-bg-cream no-underline md:col-span-3"
          >
            <div className="col-span-3 p-7">
              <h3 className="font-serif text-3xl font-semibold text-brand-deep">
                {t("STAT_GUIDES", { count: guideCount })}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {t("STAT_GUIDES_TEXT")}
              </p>
            </div>
            <div className="relative col-span-2 min-h-40 overflow-hidden">
              {lifestyleWeek?.coverUrl && (
                <Image
                  src={lifestyleWeek.coverUrl}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              )}
            </div>
          </Link>
        </div>
      </section>

      {/* The one centered moment: the programme's promise, paced word by word. */}
      <section className="scrub bg-bg-cream px-4 py-28 sm:px-6 md:py-40 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-deep sm:text-3xl">
            {t("COURSE_HEADING")}
          </h2>
          <p className="mt-8 font-serif text-2xl leading-snug text-brand-deep sm:text-[2.1rem] sm:leading-[1.35]">
            {t("COURSE_TEXT")
              .split(" ")
              .map((word, i, all) => (
                <span
                  key={i}
                  className="scrub-word"
                  style={{ "--w": i / all.length } as React.CSSProperties}
                >
                  {word}{" "}
                </span>
              ))}
          </p>
        </div>
      </section>

      {/* The path: every week in order, intro included. Five steps, one row. */}
      {programme.weeks.length > 0 && (
        <section id="weeks" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-5xl">
              {t("PATH_HEADING")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">{t("PATH_TEXT")}</p>
          </div>
          <ol className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {programme.weeks.map((week) => (
              <li key={week.slug} className="w-[72vw] shrink-0 snap-start sm:w-[40vw] lg:w-auto">
                <Link href={`/coaching/weeks/${week.slug}`} className="group block no-underline">
                  <div className="settle relative aspect-[4/5] overflow-hidden rounded-3xl bg-bg-cream">
                    {week.coverUrl && (
                      <Image
                        src={week.coverUrl}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 18vw"
                      />
                    )}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-brand-blue">
                    {isIntroduction(week) ? tCoaching("START_HERE") : weekLabel(week)}
                  </p>
                  <h3 className="mt-1 font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                    {week.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {tCoaching("LESSON_COUNT", { count: week.lessons.length })}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Lessons: breadth is the message, so browse sideways. */}
      {lessons.length > 0 && (
        <section className="bg-bg-cream py-24 md:py-32">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-8 gap-y-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-5xl">
                {tCoaching("LESSONS")}
              </h2>
              {topic && (
                <p className="mt-4 text-lg text-text-secondary">
                  {t("TOPIC_LEAD")}:{" "}
                  <Link
                    href={`/coaching/topics/${String(topic.fields.slug)}`}
                    className="font-semibold text-brand-blue"
                  >
                    {String(topic.fields.title)}
                  </Link>
                </p>
              )}
            </div>
            <Link
              href="/coaching#lessons"
              className="shrink-0 text-sm font-semibold text-brand-blue no-underline hover:text-brand-deep"
            >
              {tRoot("ALL_LESSONS")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <ul className="mx-auto mt-12 flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
            {programme.steps.slice(0, 10).map((step) => {
              const lesson = lessons.find((l) => l.fields.slug === step.slug);
              return lesson ? (
                <li key={step.slug} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
                  <LessonCard lesson={lesson} />
                </li>
              ) : null;
            })}
          </ul>
        </section>
      )}

      {/* Habits: three columns for the three times of day. */}
      {habitGroups.length > 0 && (
        <section id="habits" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-5xl">
                {tCoaching("HABITS")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {t("STAT_HABITS_TEXT")}
              </p>
            </div>
            <Link
              href="/coaching#habits"
              className="shrink-0 text-sm font-semibold text-brand-blue no-underline hover:text-brand-deep"
            >
              {tRoot("ALL_HABITS")} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {habitGroups.map((group) => (
              <div key={group.period} className="border-t-2 border-brand-deep pt-5">
                <h3 className="font-sans text-base font-semibold text-brand-deep">{group.label}</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.habits.map((habit) => (
                    <li key={habit.sys.id}>
                      <HabitChip habit={habit} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Writing: one feature, two supporting. */}
      {featured && (
        <section className="bg-bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-5xl">
                {tRoot("CHECKOUT_BLOG")}
              </h2>
              <Link
                href="/blog"
                className="shrink-0 text-sm font-semibold text-brand-blue no-underline hover:text-brand-deep"
              >
                {tRoot("MORE_FROM_BLOG")} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <Link href={`/blog/${featured.slug}`} className="group block no-underline lg:col-span-7">
                {featured.thumbnailBlog && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                    <Image
                      src={featured.thumbnailBlog}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                )}
                <h3 className="mt-6 font-serif text-2xl leading-snug font-semibold text-brand-deep transition-colors group-hover:text-brand-blue sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-[60ch] leading-relaxed text-text-secondary">{featured.excerpt}</p>
                <p className="mt-4 text-sm text-text-secondary">
                  {featured.author}, <time dateTime={featured.date}>{formatDate(featured.date, locale)}</time>
                </p>
              </Link>
              <ul className="grid content-start gap-8 lg:col-span-5">
                {morePosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group grid grid-cols-5 gap-5 no-underline">
                      {post.thumbnailBlog && (
                        <div className="relative col-span-2 aspect-square overflow-hidden rounded-2xl">
                          <Image
                            src={post.thumbnailBlog}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 40vw, 16vw"
                          />
                        </div>
                      )}
                      <div className="col-span-3">
                        <h3 className="font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Action: the same single primary action as the hero. */}
      <section className="relative overflow-hidden night-sky night-sky-glow grain">
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 md:py-36 lg:px-8">
          <h2 className="font-serif text-4xl leading-tight font-semibold text-white sm:text-6xl">
            {t("FINAL_TITLE")}
          </h2>
          <p className="mx-auto mt-5 max-w-[50ch] text-lg leading-relaxed text-white/80">
            {t("FINAL_TEXT")}
          </p>
          {programme.steps.length > 0 && (
            <div className="mt-10 flex justify-center">
              <ContinueButton
                sequence={programme.steps.map((s) => ({ slug: s.slug, name: s.name }))}
                labels={{
                  start: tCoaching("START_PROGRAM"),
                  continue: tCoaching("CONTINUE_PROGRAM"),
                }}
                className={primaryCta}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
