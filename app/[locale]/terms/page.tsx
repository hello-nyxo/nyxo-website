import { setRequestLocale } from "next-intl/server";
import { getTerms } from "@/lib/markdown";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Terms of Service",
    description:
      "By downloading or using the Nyxo app, these terms will automatically apply to you.",
    path: "/terms",
    locale,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const terms = await getTerms();

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-brand-deep mb-12">
        {terms?.title || "Terms of Service"}
      </h1>
      {terms && (
        <div
          className="prose max-w-none text-text-primary leading-relaxed
            [&>p]:text-base [&>p]:leading-7 [&>p]:mb-4
            [&>h2]:text-xl [&>h2]:font-serif [&>h2]:mt-8 [&>h2]:mb-3
            [&>h3]:text-lg [&>h3]:font-serif [&>h3]:mt-6 [&>h3]:mb-2
            [&>ul]:mb-4 [&>ol]:mb-4
          "
          dangerouslySetInnerHTML={{ __html: terms.content }}
        />
      )}
    </section>
  );
}
