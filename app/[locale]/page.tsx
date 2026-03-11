import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { getAllPosts } from "@/lib/markdown";
import { getWeeks, getLessons, getHabits } from "@/lib/contentful";
import {
  generatePageMetadata,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BlogPostCard from "@/components/BlogPostCard";
import NewsletterForm from "@/components/NewsletterForm";
import WeekCard from "@/components/WeekCard";
import LessonCard from "@/components/LessonCard";
import HabitCard from "@/components/HabitCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "INDEX" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("INTRODUCTION"),
    path: "/",
    locale,
    image: "/images/cover.png",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("INDEX");
  const tCoaching = await getTranslations("COACHING");
  const tBlog = await getTranslations();
  const posts = getAllPosts(locale).slice(0, 3);
  const [weeks, lessons, habits] = await Promise.all([
    getWeeks(locale),
    getLessons(locale),
    getHabits(locale),
  ]);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteJsonLd()),
        }}
      />

      {/* Hero Section */}
      <section className="relative night-sky night-sky-glow grain overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.1] mb-6"
          >
            {t("TITLE")}
          </h1>
          <p
            className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {t("INTRODUCTION")}
          </p>
          <div>
            <Link
              href="/coaching"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-deep font-semibold rounded-full no-underline hover:shadow-glow hover:bg-white/90 transition-all"
            >
              {tCoaching("SLEEP_COACHING")} &rarr;
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
      </section>

      {/* Course Overview */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep mb-5">
              {t("COURSE_HEADING")}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {t("COURSE_TEXT")}
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* How the course works — 3 pillars */}
      <section className="bg-bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { num: "01", heading: t("WEEKS_HEADING"), text: t("WEEKS_TEXT") },
              { num: "02", heading: t("LESSONS_HEADING"), text: t("LESSONS_TEXT") },
              { num: "03", heading: t("HABITS_HEADING"), text: t("HABITS_TEXT") },
            ].map((pillar, i) => (
              <AnimateOnScroll key={pillar.num} delay={i * 120}>
                <div className="text-center">
                  <span className="text-5xl font-serif font-semibold text-brand-blue/15 block mb-3">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-brand-deep mb-3">
                    {pillar.heading}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Weeks */}
      {weeks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep mb-4">
                {tCoaching("WEEKS")}
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {tCoaching("WEEKS_TEXT")}
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {weeks.slice(0, 4).map((week, i) => (
              <WeekCard
                key={week.sys.id}
                week={week}
                index={i}
                weekLabel={tBlog("WEEK_NUMBER", { order: Number(week.fields.order) })}
              />
            ))}
          </div>
        </section>
      )}

      {/* Lessons Preview */}
      {lessons.length > 0 && (
        <section className="bg-bg-cream py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep mb-4">
                  {tCoaching("LESSONS")}
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  {tCoaching("LESSONS_TEXT")}
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {lessons.slice(0, 6).map((lesson, i) => (
                <LessonCard key={lesson.sys.id} lesson={lesson} index={i} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/coaching#lessons"
                className="inline-flex items-center px-7 py-3.5 border border-brand-blue text-brand-blue font-semibold rounded-full no-underline hover:bg-brand-blue hover:text-white transition-all"
              >
                {tCoaching("LESSONS_TEXT")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Habits Preview */}
      {habits.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep mb-4">
                {tCoaching("HABITS")}
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {tCoaching("HABITS_TEXT")}
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {habits.slice(0, 6).map((habit, i) => (
              <HabitCard key={habit.sys.id} habit={habit} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/coaching#habits"
              className="inline-flex items-center px-7 py-3.5 border border-brand-blue text-brand-blue font-semibold rounded-full no-underline hover:bg-brand-blue hover:text-white transition-all"
            >
              {tCoaching("HABITS_TEXT")} &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Recent Blog Posts */}
      {posts.length > 0 && (
        <section className="bg-bg-cream py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep mb-4">
                  {tBlog("CHECKOUT_BLOG")}
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimateOnScroll key={post.slug} delay={i * 100}>
                  <BlogPostCard post={post} locale={locale} />
                </AnimateOnScroll>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center px-7 py-3.5 border border-brand-blue text-brand-blue font-semibold rounded-full no-underline hover:bg-brand-blue hover:text-white transition-all"
              >
                {tBlog("MORE_FROM_BLOG")} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterForm />
    </>
  );
}
