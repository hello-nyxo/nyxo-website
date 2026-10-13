import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { getAllProgrammaticArticles } from "@/lib/programmatic/loader";
import { getAudienceBySlug } from "@/lib/programmatic/taxonomy";
import type { SleepTipsArticle, SleepChecklistArticle } from "@/lib/programmatic/types";
import { generatePageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SLEEP" });
  return generatePageMetadata({
    title: t("HERO_TITLE"),
    description: t("META_DESCRIPTION"),
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
      {/* Hero: the one deliberately centered moment on the page */}
      <section className="relative night-sky night-sky-glow grain overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            {t("HERO_TITLE")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {t("HERO_DESCRIPTION")}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-bg-primary to-transparent" />
      </section>

      {/* Sleep tips: one article per audience, so an index of rows reads faster
          than a wall of identical cards. The audience is the column that scans. */}
      {tipArticles.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
              {t("TIPS_HEADING")}
            </h2>
            <p className="mt-3 text-text-secondary">{t("TIPS_DESCRIPTION")}</p>
          </div>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {tipArticles.map(({ slug, article }) => {
              const audience = getAudienceBySlug(
                article.meta.audience_slug,
                locale
              );
              return (
                <li key={slug}>
                  <Link
                    href={`/sleep/${slug}`}
                    className="group grid gap-2 py-7 no-underline md:grid-cols-12 md:gap-8"
                  >
                    <span className="text-sm font-semibold text-brand-deep md:col-span-3 md:pt-1">
                      {audience?.name || article.meta.audience_slug}
                    </span>
                    <div className="md:col-span-7">
                      <h3 className="font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                        {article.seo.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
                        {article.seo.description}
                      </p>
                    </div>
                    <span className="text-sm text-text-secondary md:col-span-2 md:pt-1 md:text-right">
                      {t("TIPS_COUNT", { count: article.content.tips.length })}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Checklists: cards, because each one is a thing you take away and use */}
      {checklistArticles.length > 0 && (
        <section className="bg-bg-cream py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
                {t("CHECKLISTS_HEADING")}
              </h2>
              <p className="mt-3 text-text-secondary">
                {t("CHECKLISTS_DESCRIPTION")}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {checklistArticles.map(({ slug, article }) => {
                const audience = getAudienceBySlug(
                article.meta.audience_slug,
                locale
              );
                return (
                  <Link
                    key={slug}
                    href={`/sleep/${slug}`}
                    className="group block h-full no-underline"
                  >
                    <article className="flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-colors duration-300 hover:border-brand-blue/30">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-secondary">
                        <span className="font-semibold text-brand-deep">
                          {audience?.name || article.meta.audience_slug}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {t("ITEMS_COUNT", {
                            count: article.content.items.length,
                          })}
                        </span>
                      </div>
                      <h3 className="mt-3 font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                        {article.seo.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                        {article.seo.description}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
