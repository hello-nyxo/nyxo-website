import type { Metadata } from "next";
import { routing } from "./i18n/routing";

const SITE_URL = "https://nyxo.app";
const SITE_NAME = "Nyxo";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/cover.png`;

type Locale = (typeof routing.locales)[number];

const LOCALE_PATTERN = new RegExp(`^/(${routing.locales.join("|")})(?=/|$)`);

/** Strip any locale prefix so callers can pass either `/fi/blog` or `/blog`. */
function stripLocale(path: string): string {
  return path.replace(LOCALE_PATTERN, "") || "/";
}

/**
 * The public URL of `path` in `locale`. The default locale is served without a
 * prefix (`localePrefix: "as-needed"`), so `/blog` in English and `/fi/blog` in
 * Finnish. The root never carries a trailing slash.
 */
export function localizedUrl(locale: string, path: string): string {
  const clean = stripLocale(path);
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const suffix = clean === "/" ? "" : clean;
  return `${SITE_URL}${prefix}${suffix}`;
}

interface GenerateMetadataOptions {
  title: string;
  description: string;
  /** Path of this page without a locale prefix, e.g. `/blog/my-post`. */
  path: string;
  locale: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  /** Overrides the computed self-canonical, e.g. for cross-posted articles. */
  canonical?: string;
  noIndex?: boolean;
  /**
   * Which locales this exact page exists in, and at what path. Defaults to the
   * same `path` in every locale, which is right for UI-translated pages. Pass
   * an explicit map when slugs are localised (lessons) or when the page only
   * exists in one language (blog posts without a translation).
   */
  alternatePaths?: Partial<Record<Locale, string>>;
  /** Use the title as-is, without the `– Nyxo` template suffix. */
  absoluteTitle?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
  canonical,
  noIndex = false,
  alternatePaths,
  absoluteTitle = false,
}: GenerateMetadataOptions): Metadata {
  const selfUrl = localizedUrl(locale, path);
  const url = canonical || selfUrl;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;

  const paths: Partial<Record<Locale, string>> =
    alternatePaths ??
    Object.fromEntries(routing.locales.map((l) => [l, path]));

  // hreflang only makes sense on a self-canonical page, and only when there is
  // more than one language version to point between.
  const languages: Record<string, string> = {};
  const available = routing.locales.filter((l) => paths[l]);
  if (!canonical && available.length > 1) {
    for (const l of available) languages[l] = localizedUrl(l, paths[l]!);
    const fallback = paths[routing.defaultLocale as Locale];
    if (fallback) languages["x-default"] = localizedUrl(routing.defaultLocale, fallback);
  }

  const socialTitle = absoluteTitle ? title : `${title} – ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
      ...(Object.keys(languages).length > 0 && { languages }),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: selfUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: locale === "fi" ? "fi_FI" : "en_US",
      type: type === "article" ? "article" : "website",
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
      site: "@helloNyxo",
      creator: "@helloNyxo",
    },
  };
}

/** Trim prose to a meta-description length without cutting a word in half. */
export function toMetaDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max - 1).replace(/\s+\S*$/, "").replace(/[,;:.]$/, "") + "…";
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  authorSlug?: string;
  locale?: string;
  type?: "Article" | "BlogPosting" | "LearningResource";
}

export function generateArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = "Nyxo",
  authorSlug,
  locale,
  type = "Article",
}: ArticleJsonLdProps) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...(locale && { inLanguage: locale }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: image || DEFAULT_OG_IMAGE,
    // A missing date is better than a fake "published today" that changes on
    // every build; Google treats churning dates as a freshness-spam signal.
    ...(datePublished && { datePublished }),
    ...((dateModified || datePublished) && {
      dateModified: dateModified || datePublished,
    }),
    author: authorSlug
      ? {
          "@type": "Person",
          name: author,
          url: localizedUrl(locale ?? routing.defaultLocale, `/coaching/authors/${authorSlug}`),
        }
      : {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.svg`,
      },
    },
    description,
  };
}

interface PersonJsonLdProps {
  name: string;
  url: string;
  credentials?: string;
  image?: string;
  affiliation?: string;
  sameAs?: string[];
}

export function generatePersonJsonLd({
  name,
  url,
  credentials,
  image,
  affiliation,
  sameAs,
}: PersonJsonLdProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    ...(credentials && { jobTitle: credentials }),
    ...(image && { image }),
    ...(affiliation && {
      affiliation: {
        "@type": "Organization",
        name: affiliation,
      },
    }),
    ...(sameAs && sameAs.length > 0 && { sameAs }),
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    sameAs: [
      "https://twitter.com/hellonyxo",
      "https://www.linkedin.com/company/nyxo",
      "https://github.com/hello-nyxo",
      "https://instagram.com/hellonyxo",
    ],
  };
}

interface CourseSection {
  slug: string;
  name: string;
  description: string;
  lessonCount: number;
}

/**
 * The coaching programme genuinely is a course: ordered weeks, ordered lessons,
 * a quiz per lesson. `hasPart` mirrors the real week sequence.
 */
export function generateCourseJsonLd({
  name,
  description,
  locale,
  sections,
}: {
  name: string;
  description: string;
  locale: string;
  sections: CourseSection[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: localizedUrl(locale, "/coaching"),
    inLanguage: locale,
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasPart: sections.map((section, i) => ({
      "@type": "Course",
      name: section.name,
      description: section.description,
      url: localizedUrl(locale, `/coaching/weeks/${section.slug}`),
      position: i + 1,
      isAccessibleForFree: true,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    })),
  };
}

export function generateWebSiteJsonLd(description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: routing.locales,
    description: description ?? "A free, science-backed sleep coaching program",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function generateBreadcrumbJsonLd(
  locale: string,
  homeLabel: string,
  items: { name: string; path?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: homeLabel, path: "/" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        ...(item.path && { item: localizedUrl(locale, item.path) }),
      })
    ),
  };
}
