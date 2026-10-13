import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link, permanentRedirect } from "@/lib/i18n/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  localizedUrl,
} from "@/lib/seo";
import BlogPostCard from "@/components/BlogPostCard";
import { formatDate } from "@/lib/utils";

/** Each post is written in one language, so it is only built under that locale. */
export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return getAllPosts(params.locale).map((post) => ({ slug: post.slug }));
}

/** Locale-to-path map for hreflang: this post, plus its translation if any. */
function postAlternates(post: { slug: string; lang: string; translation?: string }) {
  const other = post.lang === "fi" ? "en" : "fi";
  return {
    [post.lang]: `/blog/${post.slug}`,
    ...(post.translation && { [other]: `/blog/${post.translation}` }),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    locale: post.lang,
    alternatePaths: postAlternates(post),
    image: post.thumbnailBlog || undefined,
    type: "article",
    publishedTime: post.date,
    author: post.author,
    tags: post.tags,
    canonical: post.canonical || undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // A post lives under its own language only. Old links that reached it under
  // the other locale (or via its directory name) move to the one real URL.
  if (post.lang !== locale || post.slug !== slug) {
    permanentRedirect({ href: `/blog/${post.slug}`, locale: post.lang });
  }

  const allPosts = getAllPosts(locale);
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  const jsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: localizedUrl(locale, `/blog/${post.slug}`),
    image: post.thumbnailBlog
      ? `https://nyxo.app${post.thumbnailBlog}`
      : undefined,
    datePublished: post.date,
    author: post.author,
    authorSlug: post.authorSlug,
    locale,
    type: "BlogPosting",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header: left-aligned, the title carries it. Tags read as one line. */}
        <header className="mb-10">
          {post.tags.length > 0 && (
            <span className="text-sm font-semibold text-brand-blue">
              {post.tags.join(" · ")}
            </span>
          )}
          <h1 className="mt-3 font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
            <Link
              href={`/coaching/authors/${post.authorSlug}`}
              className="font-medium text-brand-blue no-underline hover:text-brand-deep"
            >
              {post.author}
            </Link>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {formatDate(post.date, locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Cover Image: decorative, the heading above already states the title */}
        {post.thumbnailBlog && (
          <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-hairline">
            <Image
              src={post.thumbnailBlog}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose max-w-none text-text-primary leading-relaxed
            [&>p]:text-lg [&>p]:leading-8 [&>p]:mb-6
            [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-serif [&>h3]:mt-8 [&>h3]:mb-3
            [&>img]:rounded-2xl [&>img]:my-8
            [&>blockquote]:border-l-4 [&>blockquote]:border-brand-blue [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-text-secondary
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author */}
        <div className="mt-16 border-t border-hairline pt-8">
          <p className="text-sm text-text-secondary">
            {t("WRITTEN_BY")}{" "}
            <Link
              href={`/coaching/authors/${post.authorSlug}`}
              className="font-semibold text-text-primary no-underline transition-colors hover:text-brand-blue"
            >
              {post.author}
            </Link>
          </p>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-bg-cream py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
              {t("RELATED_POSTS")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <BlogPostCard key={p.slug} post={p} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
