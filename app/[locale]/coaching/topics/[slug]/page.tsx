import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  localizedUrl,
  toMetaDescription,
} from "@/lib/seo";
import {
  getMetalessonBySlug,
  getMetalessons,
  getLessonAuthors,
  normalizeImageUrl,
  richTextToPlain,
  type ContentfulEntry,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const topics = await getMetalessons(params.locale);
  return topics
    .map((t) => t.fields.slug)
    .filter(Boolean)
    .map((slug) => ({ slug: String(slug) }));
}

/** A topic gathers lessons around one question; resolved links only. */
function topicLessons(fields: Record<string, unknown>): ContentfulEntry[] {
  return ((fields.lessons as ContentfulEntry[]) || []).filter(
    (l) => l?.fields?.slug && l.fields.lessonName
  );
}

function lessonExcerpt(lesson: ContentfulEntry, max = 320): string {
  return toMetaDescription(richTextToPlain(lesson.fields.lessonContent), max);
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const topic = await getMetalessonBySlug(slug, locale);
  if (!topic) return {};
  const fields = topic.fields as Record<string, unknown>;
  const first = topicLessons(fields)[0];
  return generatePageMetadata({
    title: String(fields.title),
    description: first ? lessonExcerpt(first, 158) : String(fields.title),
    path: `/coaching/topics/${slug}`,
    locale,
    type: "article",
    tags: Array.isArray(fields.keywords) ? (fields.keywords as string[]) : undefined,
  });
}

export default async function TopicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tCoaching = await getTranslations("COACHING");
  const topic = await getMetalessonBySlug(slug, locale);
  if (!topic) notFound();

  const fields = topic.fields as Record<string, unknown>;
  const title = String(fields.title);
  const lessons = topicLessons(fields);
  if (lessons.length === 0) notFound();

  const related = ((fields.relatedContent as ContentfulEntry[]) || []).filter(
    (r) => r?.fields?.slug && r.fields.lessonName
  );

  const jsonLd = generateArticleJsonLd({
    title,
    description: lessonExcerpt(lessons[0], 158),
    url: localizedUrl(locale, `/coaching/topics/${slug}`),
    locale,
    type: "LearningResource",
  });

  return (
    <article className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ name: tCoaching("SLEEP_COACHING"), href: "/coaching" }]}
          current={title}
        />
      </div>

      <header className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl leading-[1.1] font-semibold text-brand-deep sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-text-secondary">
          {tCoaching("TOPIC_INTRO", { count: lessons.length })}
        </p>
      </header>

      <ol className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6 lg:px-8">
        {lessons.map((lesson) => {
          const lf = lesson.fields as Record<string, unknown>;
          const cover = lf.cover as { fields?: { file?: { url?: string } } } | undefined;
          const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);
          const authors = getLessonAuthors(lf);
          return (
            <li key={lesson.sys.id} className="grid gap-6 md:grid-cols-12 md:gap-10">
              {coverUrl && (
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl md:col-span-5">
                  <Image
                    src={coverUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              )}
              <div className={coverUrl ? "md:col-span-7" : "md:col-span-12"}>
                <h2 className="font-serif text-2xl font-semibold text-brand-deep sm:text-3xl">
                  <Link
                    href={`/coaching/lessons/${String(lf.slug)}`}
                    className="text-brand-deep no-underline hover:text-brand-blue"
                  >
                    {String(lf.lessonName)}
                  </Link>
                </h2>
                {authors.length > 0 && (
                  <p className="mt-2 text-sm text-text-secondary">
                    {authors.map((a) => a.name).join(", ")}
                  </p>
                )}
                <p className="mt-4 leading-relaxed text-text-secondary">
                  {lessonExcerpt(lesson)}
                </p>
                <Link
                  href={`/coaching/lessons/${String(lf.slug)}`}
                  className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-blue no-underline hover:text-brand-deep"
                >
                  {tCoaching("READ_LESSON")}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ol>

      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-4xl border-t border-hairline px-4 pt-16 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-deep">
            {tCoaching("RELATED_LESSONS")}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r.sys.id}>
                <Link
                  href={`/coaching/lessons/${String(r.fields.slug)}`}
                  className="inline-flex rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-text-primary no-underline transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                >
                  {String(r.fields.lessonName)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
