import { Link } from "@/lib/i18n/navigation";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  post: BlogPostMeta;
  locale?: string;
}

export default function BlogPostCard({ post, locale = "en" }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full no-underline"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-colors duration-300 hover:border-brand-blue/30">
        {post.thumbnailBlog && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.thumbnailBlog}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {post.tags.length > 0 && (
            <span className="text-sm font-semibold text-brand-blue">
              {post.tags.slice(0, 3).join(" · ")}
            </span>
          )}
          <h3 className="mt-2 line-clamp-2 font-sans text-lg leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-text-secondary">
            <span>{post.author}</span>
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
