import { getTranslations, setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/markdown";
import BlogPostGrid from "@/components/BlogPostGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BLOG" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("META_DESCRIPTION"),
    path: "/blog",
    locale,
    image: "/images/blog-cover.jpg",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("BLOG");
  const posts = getAllPosts(locale);
  const tags = getAllTags(locale);

  return (
    <>
      {/* Masthead: left-aligned, the title carries the page on its own */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold text-brand-deep sm:text-5xl">
            {t("TITLE")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {t("DESCRIPTION")}
          </p>
        </div>
      </section>

      <BlogPostGrid posts={posts} tags={tags} allLabel={t("ALL")} />
    </>
  );
}
