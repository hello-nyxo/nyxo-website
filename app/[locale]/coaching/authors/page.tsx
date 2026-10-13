import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { getAuthors, normalizeImageUrl } from "@/lib/contentful";
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
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("COACHING");
  const authors = await getAuthors();

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ name: t("SLEEP_COACHING"), href: "/coaching" }]}
          current={t("ALL_AUTHORS")}
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold text-brand-deep sm:text-5xl">
            {t("ALL_AUTHORS")}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {t("ALL_AUTHORS_TEXT")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => {
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
              <Link
                key={author.sys.id}
                href={`/coaching/authors/${slug}`}
                className="group block h-full no-underline"
              >
                <article className="h-full rounded-2xl border border-hairline bg-white p-6 text-center transition-colors duration-300 hover:border-brand-blue/30">
                  {photoUrl ? (
                    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={photoUrl}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue/10">
                      <span className="text-2xl font-semibold text-brand-blue">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <h2 className="font-sans text-base font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
                    {name}
                  </h2>
                  {credentials && (
                    <p className="mt-1 text-sm text-text-secondary">
                      {credentials}
                    </p>
                  )}
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
