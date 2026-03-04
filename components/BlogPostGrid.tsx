"use client";

import { useState } from "react";
import BlogPostCard from "./BlogPostCard";
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

  return (
    <>
      {tags.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                selectedTag === null
                  ? "bg-brand-blue text-white"
                  : "bg-white text-text-secondary hover:text-brand-blue border border-hairline"
              }`}
            >
              {allLabel}
            </button>
            {tags.slice(0, 12).map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? null : tag)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? "bg-brand-blue text-white"
                    : "bg-white text-text-secondary hover:text-brand-blue border border-hairline"
                }`}
              >
                {tag} ({count})
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-text-secondary py-12">
            No posts found for this tag.
          </p>
        )}
      </section>
    </>
  );
}
