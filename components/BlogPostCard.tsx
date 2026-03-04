import { Link } from "@/lib/i18n/navigation";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/markdown";

interface BlogPostCardProps {
  post: BlogPostMeta;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block no-underline h-full"
    >
      <article className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
        {post.thumbnailBlog && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.thumbnailBlog}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>{post.author}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
