import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generatePageMetadata, toMetaDescription } from "@/lib/seo";
import {
  getHabitBySlug,
  getAllHabitSlugs,
  renderRichText,
  richTextToPlain,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllHabitSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const habit = await getHabitBySlug(slug, locale);
  if (!habit) return {};
  const fields = habit.fields as Record<string, unknown>;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  const prose = richTextToPlain(fields.description);
  return generatePageMetadata({
    title: fields.title as string,
    description: toMetaDescription(
      prose || t("HABIT_META", { title: String(fields.title) })
    ),
    path: `/coaching/habits/${slug}`,
    locale,
  });
}

export default async function HabitPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const habit = await getHabitBySlug(slug, locale);

  if (!habit) notFound();

  const fields = habit.fields as Record<string, unknown>;
  const descriptionHtml = renderRichText(fields.description);

  const periodLabel =
    fields.period === "MORNING"
      ? t("MORNING")
      : fields.period === "AFTERNOON"
      ? t("AFTERNOON")
      : t("EVENING");

  return (
    <article className="pb-20">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("HABITS"), href: "/coaching#habits" },
          ]}
          current={fields.title as string}
        />
      </div>

      {/* Header: the period is plain text, since the tinted badge it replaced
          could not reach AA contrast at any of its accent colours. */}
      <header className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold text-text-secondary">
          {periodLabel}
        </span>
        <h1 className="mt-1 font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl lg:text-5xl">
          {fields.title as string}
        </h1>
      </header>

      {/* Content */}
      {descriptionHtml && (
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-text-secondary
              prose-headings:text-brand-deep prose-headings:font-serif
              prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>
      )}
    </article>
  );
}
