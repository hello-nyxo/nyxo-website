import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import {
  getHabitBySlug,
  getAllHabitSlugs,
  renderRichText,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllHabitSlugs();
  return slugs.map((slug) => ({ slug }));
}

function periodStyle(period: unknown) {
  if (period === "MORNING")
    return {
      badge: "bg-accent-warm/15 text-accent-warm",
      gradient: "from-accent-warm/20 via-accent-warm/5 to-transparent",
    };
  if (period === "AFTERNOON")
    return {
      badge: "bg-accent-noon/15 text-accent-noon",
      gradient: "from-accent-noon/20 via-accent-noon/5 to-transparent",
    };
  return {
    badge: "bg-accent-dusk/15 text-accent-dusk",
    gradient: "from-accent-dusk/20 via-accent-dusk/5 to-transparent",
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const habit = await getHabitBySlug(slug, locale);
  if (!habit) return {};
  const fields = habit.fields as Record<string, unknown>;
  return generatePageMetadata({
    title: fields.title as string,
    description: `${fields.period as string} habit`,
    path: `/coaching/habits/${slug}`,
    locale,
  });
}

export default async function HabitPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const habit = await getHabitBySlug(slug, locale);

  if (!habit) notFound();

  const fields = habit.fields as Record<string, unknown>;
  const descriptionHtml = renderRichText(fields.description);
  const style = periodStyle(fields.period);

  const periodLabel =
    fields.period === "MORNING"
      ? t("MORNING")
      : fields.period === "AFTERNOON"
      ? t("AFTERNOON")
      : t("EVENING");

  return (
    <article className="pb-16">
      {/* Decorative time-of-day gradient strip */}
      <div className={`h-2 bg-gradient-to-r ${style.gradient}`} />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("HABITS"), href: "/coaching#habits" },
          ]}
          current={fields.title as string}
        />
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <span
          className={`inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4 ${style.badge}`}
        >
          {periodLabel}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight">
          {fields.title as string}
        </h1>
      </header>

      {/* Content */}
      {descriptionHtml && (
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="prose prose-lg max-w-none text-text-secondary
                prose-headings:text-brand-deep prose-headings:font-serif
                prose-a:text-brand-blue"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </div>
        </AnimateOnScroll>
      )}
    </article>
  );
}
