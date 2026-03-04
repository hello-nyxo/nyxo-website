/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const contentful = require("contentful");

const SITE_URL = "https://nyxo.app";
const locales = ["en", "fi", "es", "de", "sv", "fr"];
const defaultLocale = "en";

function getBlogSlugs() {
  const blogDir = path.join(process.cwd(), "content/blog");
  try {
    return fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
}

async function getContentfulSlugs(contentType) {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return [];
  try {
    const client = contentful.createClient({ space, accessToken });
    const entries = await client.getEntries({
      content_type: contentType,
      select: "fields.slug",
      limit: 1000,
    });
    return entries.items
      .map((e) => e.fields?.slug)
      .filter(Boolean);
  } catch {
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: locales.map((locale) => ({
    href:
      locale === defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
    hreflang: locale,
  })),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    const staticPages = ["/", "/blog", "/coaching", "/privacy", "/terms", "/contact"];
    const blogSlugs = getBlogSlugs();
    const [weekSlugs, lessonSlugs, habitSlugs] = await Promise.all([
      getContentfulSlugs("coachingWeek"),
      getContentfulSlugs("lesson"),
      getContentfulSlugs("habit"),
    ]);

    const allPaths = [
      ...staticPages,
      ...blogSlugs.map((s) => `/blog/${s}`),
      ...weekSlugs.map((s) => `/coaching/weeks/${s}`),
      ...lessonSlugs.map((s) => `/coaching/lessons/${s}`),
      ...habitSlugs.map((s) => `/coaching/habits/${s}`),
    ];

    return allPaths.map((p) => ({
      loc: p,
      changefreq: p === "/" ? "daily" : config.changefreq,
      priority: p === "/" ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }));
  },
};
