import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import {
  getAllProgrammaticSlugs,
  getProgrammaticArticle,
} from "@/lib/programmatic/loader";
import { getAudienceBySlug } from "@/lib/programmatic/taxonomy";
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SleepTipsRenderer from "@/components/SleepTipsRenderer";
import SleepChecklistRenderer from "@/components/SleepChecklistRenderer";
import type { SleepTipsTranslations } from "@/components/SleepTipsRenderer";
import type { SleepChecklistTranslations } from "@/components/SleepChecklistRenderer";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllProgrammaticSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = getProgrammaticArticle(slug, locale);
  if (!article) return {};

  return generatePageMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: `/sleep/${slug}`,
    locale,
    type: "article",
    tags: article.seo.keywords,
  });
}

export default async function SleepArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getProgrammaticArticle(slug, locale);
  if (!article) notFound();

  const t = await getTranslations("SLEEP");
  const audience = getAudienceBySlug(article.meta.audience_slug, locale);

  const jsonLd = generateArticleJsonLd({
    title: article.seo.title,
    description: article.seo.description,
    url: `https://nyxo.app/sleep/${slug}`,
    datePublished: article.meta.generated_at,
  });

  const tipsTranslations: SleepTipsTranslations = {
    whyItWorks: t("WHY_IT_WORKS"),
    quickWins: t("QUICK_WINS"),
    commonMistakes: t("COMMON_MISTAKES"),
    categories: {
      environment: t("CATEGORY_ENVIRONMENT"),
      routine: t("CATEGORY_ROUTINE"),
      nutrition: t("CATEGORY_NUTRITION"),
      mindset: t("CATEGORY_MINDSET"),
      activity: t("CATEGORY_ACTIVITY"),
    },
    difficulties: {
      easy: t("DIFFICULTY_EASY"),
      moderate: t("DIFFICULTY_MODERATE"),
      advanced: t("DIFFICULTY_ADVANCED"),
    },
  };

  const checklistTranslations: SleepChecklistTranslations = {
    proTips: t("PRO_TIPS"),
    yourProgress: t("YOUR_PROGRESS"),
    completed: t("COMPLETED"),
    filterAll: t("FILTER_ALL"),
    categories: {
      "before-bed": t("CATEGORY_BEFORE_BED"),
      bedroom: t("CATEGORY_BEDROOM"),
      daytime: t("CATEGORY_DAYTIME"),
      morning: t("CATEGORY_MORNING"),
      nutrition: t("CATEGORY_NUTRITION"),
    },
    priorities: {
      essential: t("PRIORITY_ESSENTIAL"),
      recommended: t("PRIORITY_RECOMMENDED"),
      bonus: t("PRIORITY_BONUS"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs
            items={[{ name: t("HERO_TITLE"), href: "/sleep" }]}
            current={article.seo.title}
          />
        </div>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {audience && (
              <span className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-3 py-1 rounded-full">
                {audience.name}
              </span>
            )}
            <span className="text-xs font-medium text-accent-dusk bg-accent-dusk/8 px-3 py-1 rounded-full">
              {article.meta.content_type === "sleep-tips"
                ? t("SLEEP_TIPS")
                : t("CHECKLIST")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mb-4">
            {article.seo.title}
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {article.seo.description}
          </p>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.meta.content_type === "sleep-tips" ? (
            <SleepTipsRenderer
              article={article as import("@/lib/programmatic/types").SleepTipsArticle}
              translations={tipsTranslations}
            />
          ) : (
            <SleepChecklistRenderer
              article={article as import("@/lib/programmatic/types").SleepChecklistArticle}
              translations={checklistTranslations}
            />
          )}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-bg-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-semibold text-white mb-3">
                {t("CTA_TITLE")}
              </h2>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                {t("CTA_DESCRIPTION")}
              </p>
              <Link
                href="/coaching"
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-full font-medium hover:bg-brand-blue/90 transition-colors no-underline"
              >
                {t("CTA_BUTTON")}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
