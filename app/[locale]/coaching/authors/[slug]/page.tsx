import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import {
  generatePageMetadata,
  generatePersonJsonLd,
  localizedUrl,
  toMetaDescription,
} from "@/lib/seo";
import {
  getAuthorBySlug,
  getAllAuthorSlugs,
  getLessons,
  getLessonAuthors,
  normalizeImageUrl,
  renderRichText,
  richTextToPlain,
} from "@/lib/contentful";
import { getAllPosts } from "@/lib/markdown";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostCard from "@/components/BlogPostCard";
import { Link } from "@/lib/i18n/navigation";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllAuthorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) return {};
  const f = author.fields as Record<string, unknown>;
  const t = await getTranslations({ locale, namespace: "COACHING" });
  const bio = richTextToPlain(f.description);
  const credentials = (f.credentials as string) || "";
  return generatePageMetadata({
    title: (f.name as string) || slug,
    description: toMetaDescription(
      [credentials, bio].filter(Boolean).join(". ") ||
        t("CONTENT_BY", { name: String(f.name) })
    ),
    path: `/coaching/authors/${slug}`,
    locale,
  });
}

export default async function AuthorPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tCoaching = await getTranslations("COACHING");
  const author = await getAuthorBySlug(slug);

  if (!author) notFound();

  const f = author.fields as Record<string, unknown>;
  const name = (f.name as string) || "";
  const credentials = (f.credentials as string) || "";
  const affiliation = (f.affiliation as string) || "";
  const twitter = (f.twitter as string) || "";
  const linkedin = (f.linkedin as string) || "";
  const googleScholar = (f.googleScholar as string) || "";
  const researchProfile = (f.researchProfile as string) || "";
  const bioHtml = renderRichText(f.description || f.bio || f.shortBio);
  const photo = f.avatar || f.photo || f.profilePhoto;
  const photoUrl = normalizeImageUrl(
    (photo as { fields?: { file?: { url?: string } } })?.fields?.file?.url
  );

  const socialLinks = [
    twitter && { href: twitter, label: "X / Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    linkedin && { href: linkedin, label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    googleScholar && { href: googleScholar, label: "Google Scholar", icon: "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z" },
    researchProfile && { href: researchProfile, label: "Research Profile", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" },
  ].filter(Boolean) as { href: string; label: string; icon: string }[];

  const sameAs = [twitter, linkedin, googleScholar, researchProfile].filter(Boolean);

  // Every lesson that credits this author, including co-authored ones.
  const allLessons = await getLessons(locale);
  const authorLessons = allLessons
    .filter((l) =>
      getLessonAuthors(l.fields as Record<string, unknown>).some(
        (a) => a.slug === slug
      )
    )
    .sort((a, b) =>
      String(a.fields.lessonName).localeCompare(String(b.fields.lessonName), locale)
    );

  // Find blog posts by this author
  const allPosts = getAllPosts(locale);
  const authorPosts = allPosts.filter(
    (p) => p.authorSlug === slug || p.author.toLowerCase() === name.toLowerCase()
  );

  const hasContent = authorLessons.length > 0 || authorPosts.length > 0;

  const personJsonLd = generatePersonJsonLd({
    name,
    url: localizedUrl(locale, `/coaching/authors/${slug}`),
    credentials: credentials || undefined,
    image: photoUrl || undefined,
    affiliation: affiliation || undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  });

  return (
    <article className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: tCoaching("SLEEP_COACHING"), href: "/coaching" },
            { name: tCoaching("AUTHORS"), href: "/coaching/authors" },
          ]}
          current={name}
        />
      </div>

      {/* Author Header */}
      <header className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          {photoUrl ? (
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <Image
                src={photoUrl}
                alt=""
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          ) : (
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
              <span className="text-3xl font-semibold text-brand-blue">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          )}
          <div>
            <h1 className="font-serif text-3xl leading-tight font-semibold text-brand-deep sm:text-4xl">
              {name}
            </h1>
            {credentials && (
              <p className="mt-2 text-lg text-text-secondary">{credentials}</p>
            )}
            {affiliation && (
              <p className="mt-1 text-sm text-text-secondary">{affiliation}</p>
            )}
            {socialLinks.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-text-secondary no-underline transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={social.icon} />
                    </svg>
                    {social.label}
                  </a>
                ))}
              </div>
            )}
            {bioHtml && (
              <div
                className="prose prose-sm mt-4 max-w-none text-text-secondary prose-a:text-brand-blue"
                dangerouslySetInnerHTML={{ __html: bioHtml }}
              />
            )}
          </div>
        </div>
      </header>

      {/* Lessons by this author */}
      {authorLessons.length > 0 && (
        <section className="mx-auto max-w-4xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {tCoaching("LESSONS")}
          </h2>
          {/* A prolific author has dozens of lessons, so compact rows rather
              than full image cards keep the page scannable. */}
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {authorLessons.map((lesson) => {
              const lf = lesson.fields as Record<string, unknown>;
              const cover = lf.cover as { fields?: { file?: { url?: string } } } | undefined;
              const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);
              return (
                <li key={lesson.sys.id}>
                  <Link
                    href={`/coaching/lessons/${String(lf.slug)}`}
                    className="group flex items-center gap-4 rounded-xl py-3 no-underline"
                  >
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-bg-cream">
                      {coverUrl && (
                        <Image src={coverUrl} alt="" fill className="object-cover" sizes="56px" />
                      )}
                    </span>
                    <span className="font-medium leading-snug text-text-primary transition-colors group-hover:text-brand-blue">
                      {String(lf.lessonName)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Blog posts by this author */}
      {authorPosts.length > 0 && (
        <section className="mx-auto max-w-4xl border-t border-hairline px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-serif text-3xl font-semibold text-brand-deep sm:text-4xl">
            {tCoaching("ARTICLES")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {authorPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* No content fallback */}
      {!hasContent && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-text-secondary">{tCoaching("NO_CONTENT_YET")}</p>
        </section>
      )}
    </article>
  );
}
