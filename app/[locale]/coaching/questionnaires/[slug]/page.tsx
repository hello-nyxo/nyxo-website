import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import {
  getQuestionnaireBySlug,
  serializeQuestionnaire,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import Questionnaire from "@/components/Questionnaire";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const entry = await getQuestionnaireBySlug(slug, locale);
  if (!entry) return {};
  const fields = entry.fields as Record<string, unknown>;
  return generatePageMetadata({
    title: fields.title as string,
    description: `${fields.title} - Sleep Questionnaire`,
    path: `/coaching/questionnaires/${slug}`,
    locale,
  });
}

export default async function QuestionnairePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const tCoaching = await getTranslations("COACHING");
  const entry = await getQuestionnaireBySlug(slug, locale);

  if (!entry) notFound();

  const data = serializeQuestionnaire(entry);
  if (!data || data.questions.length === 0) notFound();

  return (
    <div className="pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
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

      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep leading-tight mb-4">
          {data.title}
        </h1>
        {data.description && (
          <div
            className="prose prose-lg max-w-none text-text-secondary"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
