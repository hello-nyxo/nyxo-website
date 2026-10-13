"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import BlogPostCard from "./BlogPostCard";
import { formatDate } from "@/lib/utils";
import type { BlogPostMeta } from "@/lib/markdown";

interface BlogPostGridProps {
  posts: BlogPostMeta[];
  tags: { tag: string; count: number }[];
  allLabel: string;
}

export default function BlogPostGrid({
  posts,
  tags,
  allLabel,
}: BlogPostGridProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  /**
   * The newest match reads as the lead story, so it gets a wide split row and
   * the remainder falls back to the grid. Nothing is dropped either way.
   */
  const [leadPost, ...restPosts] = filteredPosts;

  const chip =
    "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors";

  return (
    <>
      {tags.length > 0 && (
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedTag(null)}
              aria-pressed={selectedTag === null}
              className={`${chip} ${
                selectedTag === null
                  ? "bg-brand-blue text-white"
                  : "border border-hairline text-text-secondary hover:border-brand-blue/40 hover:text-brand-blue"
              }`}
            >
              {allLabel}
            </button>
            {tags.slice(0, 12).map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                aria-pressed={selectedTag === tag}
                className={`${chip} ${
                  selectedTag === tag
                    ? "bg-brand-blue text-white"
                    : "border border-hairline text-text-secondary hover:border-brand-blue/40 hover:text-brand-blue"
                }`}
              >
                {tag} ({count})
              </button>
            ))}
          </div>
        </section>
      )}

      {leadPost && (
        <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${leadPost.slug}`}
            className="group block no-underline"
          >
            <article className="grid overflow-hidden rounded-2xl border border-hairline bg-white transition-colors duration-300 hover:border-brand-blue/30 lg:grid-cols-2">
              {leadPost.thumbnailBlog && (
                <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:h-full lg:min-h-88">
                  <Image
                    src={leadPost.thumbnailBlog}
                    alt={leadPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center p-6 sm:p-10">
                {leadPost.tags.length > 0 && (
                  <span className="text-sm font-semibold text-brand-blue">
                    {leadPost.tags.slice(0, 3).join(" · ")}
                  </span>
                )}
                <h2 className="mt-3 font-serif text-2xl leading-snug font-semibold text-brand-deep transition-colors group-hover:text-brand-blue sm:text-3xl">
                  {leadPost.title}
                </h2>
                <p className="mt-4 line-clamp-3 leading-relaxed text-text-secondary">
                  {leadPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-text-secondary">
                  <span>{leadPost.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={leadPost.date}>
                    {formatDate(leadPost.date)}
                  </time>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="py-12 text-text-secondary">
            No posts found for this tag.
          </p>
        )}
      </section>
    </>
  );
}
