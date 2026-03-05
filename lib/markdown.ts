import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const TERMS_PATH = path.join(process.cwd(), "content/terms/terms.md");
const PRIVACY_PATH = path.join(process.cwd(), "content/privacy/privacy.md");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorSlug: string;
  tags: string[];
  thumbnailBlog: string;
  canonical?: string;
  content: string;
  excerpt: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorSlug: string;
  tags: string[];
  thumbnailBlog: string;
  canonical?: string;
  excerpt: string;
}

function resolveImagePath(imagePath: string, slug: string): string {
  if (imagePath.startsWith("/") || imagePath.startsWith("http")) {
    return imagePath;
  }
  // Resolve relative paths like ../other-post/image.jpg
  const resolved = path.posix.normalize(`/blog/${slug}/${imagePath}`);
  return resolved;
}

function generateExcerpt(content: string, maxLength = 160): string {
  const stripped = content
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*|__/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/\n+/g, " ")
    .trim();

  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((name) =>
      fs.statSync(path.join(BLOG_DIR, name)).isDirectory()
    );
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, slug, "index.md");
      if (!fs.existsSync(filePath)) return null;

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: data.slug || slug,
        title: data.title || "",
        date: data.date || "",
        author: data.author || "",
        authorSlug: data.authorSlug || "",
        tags: data.tags || [],
        thumbnailBlog: data.thumbnailBlog
          ? resolveImagePath(data.thumbnailBlog, slug)
          : "",
        canonical: data.canonical,
        excerpt: generateExcerpt(content),
      } satisfies BlogPostMeta;
    })
    .filter(Boolean) as BlogPostMeta[];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const dir = path.join(BLOG_DIR, slug);
  const filePath = path.join(dir, "index.md");

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Resolve relative image paths in markdown content
  const resolvedContent = content.replace(
    /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
    (_, alt, src) => {
      const resolved = path.posix.normalize(`/blog/${slug}/${src}`);
      return `![${alt}](${resolved})`;
    }
  );

  const processedContent = await remark().use(html).process(resolvedContent);

  return {
    slug: data.slug || slug,
    title: data.title || "",
    date: data.date || "",
    author: data.author || "",
    authorSlug: data.authorSlug || "",
    tags: data.tags || [],
    thumbnailBlog: data.thumbnailBlog
      ? resolveImagePath(data.thumbnailBlog, slug)
      : "",
    canonical: data.canonical,
    content: processedContent.toString(),
    excerpt: generateExcerpt(content),
  };
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagCount = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagCount.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

async function renderMarkdownFile(
  filePath: string
): Promise<{ title: string; content: string } | null> {
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return {
    title: data.title || "",
    content: processedContent.toString(),
  };
}

export async function getTerms() {
  return renderMarkdownFile(TERMS_PATH);
}

export async function getPrivacy() {
  return renderMarkdownFile(PRIVACY_PATH);
}
