import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generatePageMetadata, toMetaDescription } from "@/lib/seo";
import {
  getQuestionnaireBySlug,
  getAllQuestionnaireSlugs,
  serializeQuestionnaire,
  richTextToPlain,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import Questionnaire from "@/components/Questionnaire";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllQuestionnaireSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const entry = await getQuestionnaireBySlug(slug, locale);
  if (!entry) return {};
  const fields = entry.fields as Record<string, unknown>;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  const prose = richTextToPlain(fields.description);
  return generatePageMetadata({
    title: fields.title as string,
    description: toMetaDescription(
      prose || t("QUESTIONNAIRE_META", { title: String(fields.title) })
    ),
    path: `/coaching/questionnaires/${slug}`,
    locale,
  });
}

export default async function QuestionnairePage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tCoaching = await getTranslations("COACHING");
  const entry = await getQuestionnaireBySlug(slug, locale);

  if (!entry) notFound();

  const data = serializeQuestionnaire(entry);
  if (!data || data.questions.length === 0) notFound();

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-3xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            {
              name: tCoaching("QUESTIONNAIRES"),
              href: "/coaching/questionnaires",
            },
          ]}
          current={data.title}
        />
      </div>

      <header className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl">
          {data.title}
        </h1>
        {data.description && (
          <div
            className="prose prose-lg mt-4 max-w-none text-text-secondary"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Questionnaire
          title={data.title}
          description={data.description}
          questions={data.questions}
          results={data.results}
        />
      </div>
    </div>
  );
}
