import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { getQuestionnaires } from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[
            { name: t("SLEEP_COACHING"), href: "/coaching" },
          ]}
          current={t("QUESTIONNAIRES")}
        />
      </div>

      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mb-4">
          {t("QUESTIONNAIRES")}
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl">
          {t("QUESTIONNAIRES_TEXT")}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-5">
          {questionnaires.map((q, i) => {
            const fields = q.fields as Record<string, unknown>;
            const questionCount = Array.isArray(fields.questions)
              ? fields.questions.length
              : 0;

            return (
              <AnimateOnScroll key={q.sys.id} delay={i * 80}>
                <Link
                  href={`/coaching/questionnaires/${fields.slug as string}`}
                  className="group block no-underline h-full"
                >
                  <div className="bg-white rounded-2xl p-6 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
                    <h2 className="text-lg font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors mb-2">
                      {fields.title as string}
                    </h2>
                    {questionCount > 0 && (
                      <p className="text-sm text-text-secondary">
                        {questionCount} questions
                      </p>
                    )}
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
