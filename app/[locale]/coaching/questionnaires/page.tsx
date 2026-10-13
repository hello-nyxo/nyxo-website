import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { getQuestionnaires } from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  return generatePageMetadata({
    title: t("QUESTIONNAIRES"),
    description: t("QUESTIONNAIRES_TEXT"),
    path: "/coaching/questionnaires",
    locale,
  });
}

export default async function QuestionnairesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("COACHING");
  const questionnaires = await getQuestionnaires(locale);

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: t("SLEEP_COACHING"), href: "/coaching" },
          ]}
          current={t("QUESTIONNAIRES")}
        />
      </div>

      <header className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold text-brand-deep sm:text-5xl">
            {t("QUESTIONNAIRES")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {t("QUESTIONNAIRES_TEXT")}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {questionnaires.map((q) => {
            const fields = q.fields as Record<string, unknown>;
            const questionCount = Array.isArray(fields.questions)
              ? fields.questions.length
              : 0;

            return (
              <Link
                key={q.sys.id}
                href={`/coaching/questionnaires/${fields.slug as string}`}
                className="group block no-underline h-full"
              >
                <article className="h-full rounded-2xl border border-hairline bg-white p-6 transition-colors duration-300 hover:border-brand-blue/30">
                  <h2 className="font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                    {fields.title as string}
                  </h2>
                  {questionCount > 0 && (
                    <p className="mt-2 text-sm text-text-secondary">
                      {questionCount} questions
                    </p>
                  )}
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
