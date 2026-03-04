import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import {
  getWeekBySlug,
  getAllWeekSlugs,
  renderRichText,
  normalizeImageUrl,
} from "@/lib/contentful";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllWeekSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const week = await getWeekBySlug(slug);
  if (!week) return {};
  const fields = week.fields as Record<string, unknown>;
  return generatePageMetadata({
    title: fields.weekName as string,
    description: (fields.intro as string) || "",
    path: `/coaching/weeks/${slug}`,
    locale,
  });
}

export default async function WeekPage({ params }: PageProps) {
  const { slug } = await params;
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const week = await getWeekBySlug(slug);

  if (!week) notFound();

  const fields = week.fields as Record<string, unknown>;
  const coverPhoto = fields.coverPhoto as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(coverPhoto?.fields?.file?.url);
  const lessons =
    (fields.lessons as Array<{
      sys: { id: string };
      fields: Record<string, unknown>;
    }>) || [];
  const descriptionHtml = renderRichText(fields.weekDescription);

  return (
    <article className="pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("WEEKS"), href: "/coaching#weeks" },
          ]}
          current={fields.weekName as string}
        />
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <span className="text-sm font-semibold text-brand-blue">
          Week {fields.order as number}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mt-1 mb-4">
          {fields.weekName as string}
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          {fields.intro as string}
        </p>
      </header>

      {/* Cover Image */}
      {coverUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-card">
            <Image
              src={coverUrl}
              alt={fields.weekName as string}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Description */}
      {descriptionHtml && (
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("ABOUT_THIS_WEEK")}
            </h2>
            <div
              className="prose prose-lg max-w-none text-text-secondary
                prose-headings:text-brand-deep prose-headings:font-serif
                prose-a:text-brand-blue"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          </div>
        </AnimateOnScroll>
      )}

      {/* Lessons */}
      {lessons.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("LESSONS_FOR_THIS_WEEK")}
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {lessons.map((lesson, i) => {
              const lf = lesson.fields;
              if (!lf) return null;
              const cover = lf.cover as
                | { fields: { file: { url: string } } }
                | undefined;
              const lessonCoverUrl = normalizeImageUrl(
                cover?.fields?.file?.url
              );

              return (
                <AnimateOnScroll key={lesson.sys.id} delay={i * 80}>
                  <Link
                    href={`/coaching/lessons/${lf.slug as string}`}
                    className="group block no-underline h-full"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
                      {lessonCoverUrl && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={lessonCoverUrl}
                            alt={lf.lessonName as string}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 448px"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors line-clamp-2">
                          {lf.lessonName as string}
                        </h3>
                        {Array.isArray(lf.keywords) && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {(lf.keywords as string[]).slice(0, 3).map((kw) => (
                              <span
                                key={kw}
                                className="text-xs text-brand-blue bg-brand-blue/8 px-2 py-0.5 rounded-full"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
