import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import {
  generatePageMetadata,
  generateArticleJsonLd,
} from "@/lib/seo";
import BlogPostCard from "@/components/BlogPostCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    locale,
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
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
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
    url: `https://nyxo.app/blog/${post.slug}`,
    image: post.thumbnailBlog
      ? `https://nyxo.app${post.thumbnailBlog}`
      : undefined,
    datePublished: post.date,
    author: post.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
            <Link
              href={`/coaching/authors/${post.authorSlug}`}
              className="text-brand-blue hover:underline"
            >
              {post.author}
            </Link>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Cover Image */}
        {post.thumbnailBlog && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-card">
            <Image
              src={post.thumbnailBlog}
              alt={post.title}
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
            [&>img]:rounded-xl [&>img]:shadow-card [&>img]:my-8
            [&>blockquote]:border-l-4 [&>blockquote]:border-brand-blue [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-text-secondary
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author */}
        <div className="mt-16 pt-8 border-t border-hairline">
          <p className="text-sm text-text-secondary">
            Written by{" "}
            <Link
              href={`/coaching/authors/${post.authorSlug}`}
              className="font-semibold text-text-primary hover:text-brand-blue transition-colors"
            >
              {post.author}
            </Link>
          </p>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-hairline">
          <AnimateOnScroll>
            <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-8">
              Related Posts
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((p, i) => (
              <AnimateOnScroll key={p.slug} delay={i * 80}>
                <BlogPostCard post={p} />
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
