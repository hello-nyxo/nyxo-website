import { getTranslations, setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/markdown";
import BlogPostGrid from "@/components/BlogPostGrid";
import NewsletterForm from "@/components/NewsletterForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BLOG" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("DESCRIPTION"),
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-brand-deep mb-4">
          {t("TITLE")}
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
          {t("DESCRIPTION")}
        </p>
      </section>

      <BlogPostGrid posts={posts} tags={tags} allLabel={t("ALL")} />

      <NewsletterForm />
    </>
  );
}
