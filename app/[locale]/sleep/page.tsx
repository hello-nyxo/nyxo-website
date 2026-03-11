import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { getAllProgrammaticArticles } from "@/lib/programmatic/loader";
import { getAudienceBySlug } from "@/lib/programmatic/taxonomy";
import type { SleepTipsArticle, SleepChecklistArticle } from "@/lib/programmatic/types";
import { generatePageMetadata } from "@/lib/seo";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SLEEP" });
  return generatePageMetadata({
    title: t("HERO_TITLE"),
    description: t("HERO_DESCRIPTION"),
    path: "/sleep",
    locale,
  });
}

export default async function SleepIndexPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SLEEP");

  const articles = getAllProgrammaticArticles(locale);

  const tipArticles = articles
    .filter((a) => a.article.meta.content_type === "sleep-tips")
    .map((a) => ({ ...a, article: a.article as SleepTipsArticle }));
  const checklistArticles = articles
    .filter((a) => a.article.meta.content_type === "sleep-checklist")
    .map((a) => ({ ...a, article: a.article as SleepChecklistArticle }));

  return (
    <>
      {/* Hero */}
      <section className="relative night-sky grain overflow-hidden">
        <div className="night-sky-glow" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6"
            style={{ animation: "fade-in-up 0.6s ease-out both" }}
          >
            {t("HERO_TITLE")}
          </h1>
          <p
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
            style={{
              animation: "fade-in-up 0.6s ease-out 100ms both",
            }}
          >
            {t("HERO_DESCRIPTION")}
          </p>
        </div>
      </section>

      {/* Sleep Tips Section */}
      {tipArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimateOnScroll>
            <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-2">
              {t("TIPS_HEADING")}
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl">
              {t("TIPS_DESCRIPTION")}
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipArticles.map(({ slug, article }, i) => {
              const audience = getAudienceBySlug(
                article.meta.audience_slug,
                locale
              );
              return (
                <AnimateOnScroll key={slug} delay={i * 60}>
                  <Link
                    href={`/sleep/${slug}`}
                    className="group block no-underline h-full"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-2.5 py-1 rounded-full">
                          {audience?.name || article.meta.audience_slug}
                        </span>
                        <span className="text-xs text-text-muted">
                          {t("TIPS_COUNT", { count: article.content.tips.length })}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-brand-deep group-hover:text-brand-blue transition-colors mb-2 font-sans">
                        {article.seo.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {article.seo.description}
                      </p>
                    </article>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      )}

      {/* Checklists Section */}
      {checklistArticles.length > 0 && (
        <section className="bg-bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <AnimateOnScroll>
              <h2 className="text-3xl font-serif font-semibold text-brand-deep mb-2">
                {t("CHECKLISTS_HEADING")}
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl">
                {t("CHECKLISTS_DESCRIPTION")}
              </p>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {checklistArticles.map(({ slug, article }, i) => {
                const audience = getAudienceBySlug(
                  article.meta.audience_slug
                );
                return (
                  <AnimateOnScroll key={slug} delay={i * 60}>
                    <Link
                      href={`/sleep/${slug}`}
                      className="group block no-underline h-full"
                    >
                      <article className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium text-accent-dusk bg-accent-dusk/8 px-2.5 py-1 rounded-full">
                            {audience?.name || article.meta.audience_slug}
                          </span>
                          <span className="text-xs text-text-muted">
                            {t("ITEMS_COUNT", { count: article.content.items.length })}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-brand-deep group-hover:text-brand-blue transition-colors mb-2 font-sans">
                          {article.seo.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                          {article.seo.description}
                        </p>
                      </article>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
