import { notFound, redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import {
  getLessonBySlug,
  getAllLessonSlugs,
  renderRichText,
  normalizeImageUrl,
  serializeQuestionnaire,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Questionnaire from "@/components/Questionnaire";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const [enSlugs, fiSlugs] = await Promise.all([
    getAllLessonSlugs("en"),
    getAllLessonSlugs("fi"),
  ]);
  const allSlugs = new Set([...enSlugs, ...fiSlugs]);
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

function periodColor(period: unknown) {
  if (period === "MORNING") return "bg-accent-warm/15 text-accent-warm";
  if (period === "AFTERNOON") return "bg-accent-noon/15 text-accent-noon";
  return "bg-accent-dusk/15 text-accent-dusk";
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const lesson = await getLessonBySlug(slug, locale);
  if (!lesson) return {};
  const fields = lesson.fields as Record<string, unknown>;
  const correctSlug = (fields.slug as string) || slug;
  return generatePageMetadata({
    title: fields.lessonName as string,
    description:
      Array.isArray(fields.keywords)
        ? (fields.keywords as string[]).join(", ")
        : "",
    path: `/coaching/lessons/${correctSlug}`,
    locale,
  });
}

export default async function LessonPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const lesson = await getLessonBySlug(slug, locale);

  if (!lesson) notFound();

  // If the URL slug is from another locale, redirect to the correct one
  const fields0 = lesson.fields as Record<string, unknown>;
  const correctSlug = fields0.slug as string;
  if (correctSlug && correctSlug !== slug) {
    redirect(`/${locale}/coaching/lessons/${correctSlug}`);
  }

  const fields = lesson.fields as Record<string, unknown>;
  const cover = fields.cover as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);
  const contentHtml = renderRichText(fields.lessonContent);
  const additionalHtml = renderRichText(fields.additionalInformation);
  const habits =
    (fields.habit as Array<{
      sys: { id: string };
      fields: Record<string, unknown>;
    }>) || [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quizData = serializeQuestionnaire(fields.questionnaire as any);

  return (
    <article className="pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("LESSONS"), href: "/coaching#lessons" },
          ]}
          current={fields.lessonName as string}
        />
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {Array.isArray(fields.keywords) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {(fields.keywords as string[]).map((kw) => (
              <span
                key={kw}
                className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mb-4">
          {fields.lessonName as string}
        </h1>
        {typeof fields.author === "string" && (
          <p className="text-sm text-text-secondary">
            {t("LESSON_BY")}:{" "}
            <Link
              href={`/coaching/authors/${(fields.author as string).toLowerCase().replace(/\s+/g, "-")}`}
              className="text-brand-blue hover:underline"
            >
              {fields.author}
            </Link>
          </p>
        )}
      </header>

      {/* Cover Image */}
      {coverUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-card">
            <Image
              src={coverUrl}
              alt={fields.lessonName as string}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      {contentHtml && (
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="prose prose-lg max-w-none text-text-secondary
                prose-headings:text-brand-deep prose-headings:font-serif
                prose-a:text-brand-blue
                prose-img:rounded-xl prose-img:shadow-card
                prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:text-text-secondary"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </AnimateOnScroll>
      )}

      {/* Habits */}
      {habits.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("HABITS_TO_TRY")}
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {habits.map((habit, i) => {
              const hf = habit.fields;
              if (!hf) return null;
              return (
                <AnimateOnScroll key={habit.sys.id} delay={i * 60}>
                  <Link
                    href={`/coaching/habits/${hf.slug as string}`}
                    className="group block no-underline"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      <span
                        className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${periodColor(hf.period)}`}
                      >
                        {hf.period as string}
                      </span>
                      <h3 className="text-sm font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors">
                        {hf.title as string}
                      </h3>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      )}

      {/* Questionnaire */}
      {quizData && quizData.questions.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("TEST_YOUR_KNOWLEDGE")}
            </h2>
          </AnimateOnScroll>
          <Questionnaire
            title={quizData.title}
            description={quizData.description}
            questions={quizData.questions}
            results={quizData.results}
          />
        </section>
      )}

      {/* Additional Information */}
      {additionalHtml && (
        <AnimateOnScroll>
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("ADDITIONAL_READING")}
            </h2>
            <div
              className="prose prose-lg max-w-none text-text-secondary prose-headings:text-brand-deep prose-headings:font-serif prose-a:text-brand-blue"
              dangerouslySetInnerHTML={{ __html: additionalHtml }}
            />
          </section>
        </AnimateOnScroll>
      )}
    </article>
  );
}
