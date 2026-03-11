import type { SleepTipsArticle } from "@/lib/programmatic/types";
import AnimateOnScroll from "./AnimateOnScroll";

export interface SleepTipsTranslations {
  whyItWorks: string;
  quickWins: string;
  commonMistakes: string;
  categories: Record<string, string>;
  difficulties: Record<string, string>;
}

const categoryColors: Record<string, string> = {
  environment: "bg-brand-teal/10 text-brand-teal",
  routine: "bg-brand-blue/10 text-brand-blue",
  nutrition: "bg-accent-warm/10 text-accent-warm",
  mindset: "bg-accent-dusk/10 text-accent-dusk",
  activity: "bg-accent-noon/10 text-accent-noon",
};

function DifficultyDots({
  level,
  labels,
}: {
  level: string;
  labels: Record<string, string>;
}) {
  const dotsMap: Record<string, number> = {
    easy: 1,
    moderate: 2,
    advanced: 3,
  };
  const dots = dotsMap[level] || 1;
  return (
    <span className="flex items-center gap-1.5 text-xs text-text-secondary">
      <span className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i <= dots ? "bg-brand-blue" : "bg-hairline"
            }`}
          />
        ))}
      </span>
      {labels[level] || level}
    </span>
  );
}

export default function SleepTipsRenderer({
  article,
  translations,
}: {
  article: SleepTipsArticle;
  translations: SleepTipsTranslations;
}) {
  const { content } = article;

  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="max-w-3xl mx-auto">
        <p className="text-lg text-text-primary leading-relaxed">
          {content.intro}
        </p>
        <p className="text-lg text-text-secondary leading-relaxed mt-4">
          {content.why_sleep_matters}
        </p>
      </section>

      {/* Tips Grid */}
      <section>
        <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-8">
          {article.seo.title.replace(": How to Sleep Better", "").replace(": Kuinka nukkua paremmin", "")}
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.tips.map((tip, i) => (
            <AnimateOnScroll key={i} delay={i * 40}>
              <article className="bg-white rounded-2xl border border-hairline p-6 hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      categoryColors[tip.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {translations.categories[tip.category] || tip.category}
                  </span>
                  <DifficultyDots
                    level={tip.difficulty}
                    labels={translations.difficulties}
                  />
                </div>

                <h3 className="text-base font-semibold text-brand-deep mb-2 font-sans">
                  {tip.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">
                  {tip.description}
                </p>

                <div className="pt-3 border-t border-hairline">
                  <p className="text-xs text-text-muted leading-relaxed">
                    <span className="font-medium text-brand-blue">
                      {translations.whyItWorks}
                    </span>{" "}
                    {tip.why_it_works}
                  </p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Quick Wins */}
      <section className="bg-bg-cream rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
          {translations.quickWins}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.quick_wins.map((win, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-xl p-4 border border-hairline"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-text-primary leading-relaxed">
                {win}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
          {translations.commonMistakes}
        </h2>
        <div className="space-y-4">
          {content.common_mistakes.map((mistake, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-error/5 rounded-xl border border-error/10"
            >
              <span className="flex-shrink-0 text-error text-sm font-bold mt-0.5">
                ✕
              </span>
              <p className="text-sm text-text-primary leading-relaxed">
                {mistake}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-3xl mx-auto border-t border-hairline pt-8">
        <p className="text-lg text-text-primary leading-relaxed">
          {content.conclusion}
        </p>
      </section>
    </div>
  );
}
