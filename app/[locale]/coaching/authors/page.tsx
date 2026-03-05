import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { getAuthors, normalizeImageUrl } from "@/lib/contentful";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  return generatePageMetadata({
    title: t("ALL_AUTHORS"),
    description: t("ALL_AUTHORS_TEXT"),
    path: "/coaching/authors",
    locale,
  });
}

export default async function AuthorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations("COACHING");
  const authors = await getAuthors();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <Breadcrumbs
          items={[{ name: t("SLEEP_COACHING"), href: "/coaching" }]}
          current={t("ALL_AUTHORS")}
        />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimateOnScroll>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-deep leading-tight mb-4">
            {t("ALL_AUTHORS")}
          </h1>
          <p className="text-lg text-text-secondary mb-12">
            {t("ALL_AUTHORS_TEXT")}
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author, i) => {
            const f = author.fields as Record<string, unknown>;
            const name = (f.name as string) || "";
            const slug =
              (f.slug as string) ||
              name.toLowerCase().replace(/\s+/g, "-");
            const photo = f.avatar || f.photo || f.profilePhoto;
            const photoUrl = normalizeImageUrl(
              (photo as { fields?: { file?: { url?: string } } })?.fields
                ?.file?.url
            );
            const credentials = (f.credentials as string) || "";

            return (
              <AnimateOnScroll key={author.sys.id} delay={i * 60}>
                <Link
                  href={`/coaching/authors/${slug}`}
                  className="group block no-underline"
                >
                  <div className="bg-white rounded-2xl p-6 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center">
                    {photoUrl ? (
                      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-card">
                        <Image
                          src={photoUrl}
                          alt={name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-blue/10 flex items-center justify-center">
                        <span className="text-2xl font-semibold text-brand-blue">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <h2 className="text-base font-semibold text-text-primary group-hover:text-brand-blue transition-colors">
                      {name}
                    </h2>
                    {credentials && (
                      <p className="text-sm text-text-secondary mt-1">
                        {credentials}
                      </p>
                    )}
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>
    </>
  );
}
