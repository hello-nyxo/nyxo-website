import { getTranslations } from "next-intl/server";
import Image from "next/image";
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

function periodColor(period: unknown) {
  if (period === "MORNING") return "bg-accent-warm/15 text-accent-warm";
  if (period === "AFTERNOON") return "bg-accent-noon/15 text-accent-noon";
  return "bg-accent-dusk/15 text-accent-dusk";
}

export default async function HomePage() {
  const t = await getTranslations("INDEX");
  const tCoaching = await getTranslations("COACHING");
  const tBlog = await getTranslations();
  const posts = getAllPosts().slice(0, 3);
  const [weeks, lessons, habits] = await Promise.all([
    getWeeks(),
    getLessons(),
    getHabits(),
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

      {/* Hero Section — Night Sky */}
      <section className="relative night-sky night-sky-glow grain overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-[1.1] mb-6"
            style={{ animation: "fade-in-up 0.6s ease-out both" }}
          >
            {t("TITLE")}
          </h1>
          <p
            className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              animation: "fade-in-up 0.6s ease-out 150ms both",
            }}
          >
            {t("INTRODUCTION")}
          </p>
          <div style={{ animation: "fade-in-up 0.6s ease-out 300ms both" }}>
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
            <AnimateOnScroll delay={0}>
              <div className="text-center">
                <span className="text-5xl font-serif font-semibold text-brand-blue/15 block mb-3">
                  01
                </span>
                <h3 className="text-xl font-serif font-semibold text-brand-deep mb-3">
                  {t("WEEKS_HEADING")}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t("WEEKS_TEXT")}
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <div className="text-center">
                <span className="text-5xl font-serif font-semibold text-brand-blue/15 block mb-3">
                  02
                </span>
                <h3 className="text-xl font-serif font-semibold text-brand-deep mb-3">
                  {t("LESSONS_HEADING")}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t("LESSONS_TEXT")}
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={240}>
              <div className="text-center">
                <span className="text-5xl font-serif font-semibold text-brand-blue/15 block mb-3">
                  03
                </span>
                <h3 className="text-xl font-serif font-semibold text-brand-deep mb-3">
                  {t("HABITS_HEADING")}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t("HABITS_TEXT")}
                </p>
              </div>
            </AnimateOnScroll>
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
            {weeks.slice(0, 4).map((week, i) => {
              const fields = week.fields as Record<string, unknown>;
              const coverPhoto = fields.coverPhoto as
                | { fields: { file: { url: string } } }
                | undefined;
              const coverUrl = coverPhoto?.fields?.file?.url;

              return (
                <AnimateOnScroll key={week.sys.id} delay={i * 100}>
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
              {lessons.slice(0, 6).map((lesson, i) => {
                const fields = lesson.fields as Record<string, unknown>;
                const cover = fields.cover as
                  | { fields: { file: { url: string } } }
                  | undefined;
                const coverUrl = cover?.fields?.file?.url;

                return (
                  <AnimateOnScroll key={lesson.sys.id} delay={i * 80}>
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
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
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
            {habits.slice(0, 6).map((habit, i) => {
              const fields = habit.fields as Record<string, unknown>;
              return (
                <AnimateOnScroll key={habit.sys.id} delay={i * 60}>
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
                  <BlogPostCard post={post} />
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
