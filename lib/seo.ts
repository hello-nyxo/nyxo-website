import type { Metadata } from "next";
import { routing } from "./i18n/routing";

const SITE_URL = "https://nyxo.app";
const SITE_NAME = "Nyxo";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/cover.png`;

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  locale: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  canonical?: string;
  noIndex?: boolean;
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
}: GenerateMetadataOptions): Metadata {
  const url = canonical || `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_OG_IMAGE;

  const alternates: Record<string, string> = {};
  for (const lang of routing.locales) {
    const prefix = lang === routing.defaultLocale ? "" : `/${lang}`;
      const normalizedPath = path.replace(
      new RegExp(`^/(${routing.locales.join("|")})`),
      ""
    );
    alternates[lang] = `${SITE_URL}${prefix}${normalizedPath}`;
  }
  const defaultPath = path.replace(
    new RegExp(`^/(${routing.locales.join("|")})`),
    ""
  );
  alternates["x-default"] = `${SITE_URL}${defaultPath}`;

  return {
    title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
      languages: alternates,
    },
    openGraph: {
      title: `${title} – ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale,
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
      title: `${title} – ${SITE_NAME}`,
      description,
      images: [ogImage],
      site: "@helloNyxo",
      creator: "@helloNyxo",
    },
  };
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function generateArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = "Nyxo",
}: ArticleJsonLdProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: image || DEFAULT_OG_IMAGE,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: author,
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

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Personalized sleep coaching that works",
  };
}
