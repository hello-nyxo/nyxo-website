import type { MetadataRoute } from "next";
import { routing } from "@/lib/i18n/routing";
import { localizedUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/markdown";
import { getAllProgrammaticSlugs } from "@/lib/programmatic/loader";
import {
  getAuthors,
  getHabits,
  getLessons,
  getMetalessons,
  getQuestionnaires,
  getWeeks,
  type ContentfulEntry,
} from "@/lib/contentful";

type Locale = (typeof routing.locales)[number];
type Entry = MetadataRoute.Sitemap[number];

/**
 * One <url> per locale version, each listing every version as an alternate.
 * `paths` maps locale to path; a locale that is missing has no such page.
 */
function localized(
  paths: Partial<Record<Locale, string>>,
  extra: Omit<Entry, "url" | "alternates"> = {}
): Entry[] {
  const available = routing.locales.filter((l) => paths[l]);
  const languages =
    available.length > 1
      ? Object.fromEntries(available.map((l) => [l, localizedUrl(l, paths[l]!)]))
      : undefined;
  return available.map((l) => ({
    url: localizedUrl(l, paths[l]!),
    ...extra,
    ...(languages && { alternates: { languages } }),
  }));
}

const everywhere = (path: string) =>
  Object.fromEntries(routing.locales.map((l) => [l, path])) as Record<Locale, string>;

function updatedAt(entry: ContentfulEntry): Date | undefined {
  const value = entry.sys.updatedAt;
  return typeof value === "string" ? new Date(value) : undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [weeks, habits, questionnaires, authors, metalessons, enLessons, fiLessons] =
    await Promise.all([
      getWeeks("en"),
      getHabits("en"),
      getQuestionnaires("en"),
      getAuthors(),
      getMetalessons("en"),
      getLessons("en"),
      getLessons("fi"),
    ]);

  const staticPages: Entry[] = [
    ...localized(everywhere("/"), { changeFrequency: "weekly", priority: 1 }),
    ...localized(everywhere("/coaching"), { changeFrequency: "weekly", priority: 0.9 }),
    ...localized(everywhere("/sleep"), { changeFrequency: "weekly", priority: 0.9 }),
    ...localized(everywhere("/blog"), { changeFrequency: "weekly", priority: 0.8 }),
    ...localized(everywhere("/coaching/authors"), { priority: 0.5 }),
    ...localized(everywhere("/coaching/questionnaires"), { priority: 0.6 }),
    ...localized(everywhere("/about"), { priority: 0.5 }),
    ...localized(everywhere("/privacy"), { priority: 0.2 }),
    ...localized(everywhere("/terms"), { priority: 0.2 }),
  ];

  // Posts canonicalised to another site are left out: listing them here would
  // contradict their own canonical tag.
  const posts = getAllPosts().filter((p) => !p.canonical);
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const blog = posts.map((post): Entry => {
    const twin = post.translation ? bySlug.get(post.translation) : undefined;
    const languages = twin
      ? {
          [post.lang]: localizedUrl(post.lang, `/blog/${post.slug}`),
          [twin.lang]: localizedUrl(twin.lang, `/blog/${twin.slug}`),
        }
      : undefined;
    return {
      url: localizedUrl(post.lang, `/blog/${post.slug}`),
      lastModified: post.date ? new Date(post.date) : undefined,
      priority: 0.7,
      ...(languages && { alternates: { languages } }),
    };
  });

  const guides = getAllProgrammaticSlugs().flatMap((slug) =>
    localized(everywhere(`/sleep/${slug}`), { priority: 0.7 })
  );

  const fiLessonById = new Map(fiLessons.map((l) => [l.sys.id, l]));
  const lessons = enLessons.flatMap((lesson) => {
    const fi = fiLessonById.get(lesson.sys.id);
    return localized(
      {
        en: lesson.fields.slug ? `/coaching/lessons/${lesson.fields.slug}` : undefined,
        fi: fi?.fields.slug ? `/coaching/lessons/${fi.fields.slug}` : undefined,
      },
      { lastModified: updatedAt(lesson), priority: 0.8 }
    );
  });

  const sameSlug = (base: string, entries: ContentfulEntry[], priority: number) =>
    entries
      .filter((e) => e.fields.slug)
      .flatMap((e) =>
        localized(everywhere(`${base}/${e.fields.slug}`), {
          lastModified: updatedAt(e),
          priority,
        })
      );

  return [
    ...staticPages,
    ...sameSlug("/coaching/weeks", weeks, 0.8),
    ...lessons,
    ...sameSlug("/coaching/topics", metalessons, 0.7),
    ...sameSlug("/coaching/habits", habits, 0.6),
    ...sameSlug("/coaching/questionnaires", questionnaires, 0.5),
    ...sameSlug("/coaching/authors", authors, 0.5),
    ...guides,
    ...blog,
  ];
}
