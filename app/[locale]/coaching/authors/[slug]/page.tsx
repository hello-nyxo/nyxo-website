import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import {
  getAuthorBySlug,
  getAllAuthorSlugs,
  getLessons,
  normalizeImageUrl,
  renderRichText,
} from "@/lib/contentful";
import { getAllPosts } from "@/lib/markdown";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostCard from "@/components/BlogPostCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllAuthorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) return {};
  const f = author.fields as Record<string, unknown>;
  return generatePageMetadata({
    title: (f.name as string) || slug,
    description: `Content by ${f.name as string}`,
    path: `/coaching/authors/${slug}`,
    locale,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations();
  const tCoaching = await getTranslations("COACHING");
  const author = await getAuthorBySlug(slug);

  if (!author) notFound();

  const f = author.fields as Record<string, unknown>;
  const name = (f.name as string) || "";
  const credentials = (f.credentials as string) || "";
  const bioHtml = renderRichText(f.bio || f.shortBio);
  const photo = f.avatar || f.photo || f.profilePhoto;
  const photoUrl = normalizeImageUrl(
    (photo as { fields?: { file?: { url?: string } } })?.fields?.file?.url
  );

  // Find lessons by this author (lesson.fields.author is a plain string)
  const allLessons = await getLessons(locale);
  const authorLessons = allLessons.filter((l) => {
    const lf = l.fields as Record<string, unknown>;
    return (
      typeof lf.author === "string" &&
      lf.author.toLowerCase() === name.toLowerCase()
    );
  });

  // Find blog posts by this author
  const allPosts = getAllPosts();
  const authorPosts = allPosts.filter(
    (p) => p.authorSlug === slug || p.author.toLowerCase() === name.toLowerCase()
  );

  const hasContent = authorLessons.length > 0 || authorPosts.length > 0;

  return (
    <article className="pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("AUTHORS"), href: "/coaching/authors" },
          ]}
          current={name}
        />
      </div>

      {/* Author Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {photoUrl ? (
            <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden shadow-card">
              <Image
                src={photoUrl}
                alt={name}
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          ) : (
            <div className="w-28 h-28 shrink-0 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <span className="text-3xl font-semibold text-brand-blue">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          )}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-deep leading-tight">
              {name}
            </h1>
            {credentials && (
              <p className="text-lg text-text-secondary mt-2">
                {credentials}
              </p>
            )}
            {bioHtml && (
              <div
                className="prose prose-sm max-w-none text-text-secondary mt-4 prose-a:text-brand-blue"
                dangerouslySetInnerHTML={{ __html: bioHtml }}
              />
            )}
          </div>
        </div>
      </header>

      {/* Lessons by this author */}
      {authorLessons.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("LESSONS")}
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {authorLessons.map((lesson, i) => {
              const lf = lesson.fields as Record<string, unknown>;
              const cover = lf.cover as
                | { fields: { file: { url: string } } }
                | undefined;
              const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);

              return (
                <AnimateOnScroll key={lesson.sys.id} delay={i * 60}>
                  <Link
                    href={`/coaching/lessons/${lf.slug as string}`}
                    className="group block no-underline h-full"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
                      {coverUrl && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={coverUrl}
                            alt={lf.lessonName as string}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base font-semibold font-sans text-text-primary line-clamp-2 group-hover:text-brand-blue transition-colors">
                          {lf.lessonName as string}
                        </h3>
                        {Array.isArray(lf.keywords) && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {(lf.keywords as string[])
                              .slice(0, 3)
                              .map((kw: string) => (
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

      {/* Blog posts by this author */}
      {authorPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
              {t("LESSONS_BY")} {name}
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {authorPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 60}>
                <BlogPostCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      )}

      {/* No content fallback */}
      {!hasContent && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-text-secondary">{tCoaching("NO_CONTENT_YET")}</p>
        </section>
      )}
    </article>
  );
}
