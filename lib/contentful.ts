import { createClient, type ContentfulClientApi } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types";

let _client: ContentfulClientApi<undefined> | null = null;

function getClient(): ContentfulClientApi<undefined> | null {
  if (_client) return _client;
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  _client = createClient({ space, accessToken });
  return _client;
}

// Map app locales to Contentful locale codes
function contentfulLocale(locale?: string): string {
  if (locale === "fi") return "fi-FI";
  return "en-US";
}

/** Generic Contentful entry shape returned by the SDK. */
export interface ContentfulEntry {
  sys: { id: string; [key: string]: unknown };
  fields: Record<string, unknown>;
  [key: string]: unknown;
}

/** Escape HTML special characters to prevent XSS */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function normalizeImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith("//") ? `https:${url}` : url;
}

export async function getWeeks(locale?: string): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "coachingWeek",
      order: ["fields.order"],
      include: 2,
      locale: contentfulLocale(locale),
    });
    return entries.items;
  } catch (err) {
    console.warn("Failed to fetch weeks from Contentful", err);
    return [];
  }
}

export async function getWeekBySlug(
  slug: string,
  locale?: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "coachingWeek",
      "fields.slug": slug,
      include: 3,
      locale: contentfulLocale(locale),
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getLessons(locale?: string): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "lesson",
      include: 2,
      limit: 100,
      locale: contentfulLocale(locale),
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch lessons from Contentful");
    return [];
  }
}

export async function getLessonBySlug(
  slug: string,
  locale?: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const cfLocale = contentfulLocale(locale);
    const entries = await client.getEntries({
      content_type: "lesson",
      "fields.slug": slug,
      include: 3,
      locale: cfLocale,
    });
    if (entries.items[0]) return entries.items[0];

    // Slug is localized — the slug may belong to the other locale.
    // Try finding it via the other locale, then re-fetch with the correct one.
    const otherLocale = cfLocale === "fi-FI" ? "en-US" : "fi-FI";
    const otherEntries = await client.getEntries({
      content_type: "lesson",
      "fields.slug": slug,
      locale: otherLocale,
    });
    if (!otherEntries.items[0]) return null;

    const entryId = otherEntries.items[0].sys.id;
    return await client.getEntry(entryId, { include: 3, locale: cfLocale });
  } catch {
    return null;
  }
}

export async function getHabits(locale?: string): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "habit",
      include: 2,
      limit: 100,
      locale: contentfulLocale(locale),
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch habits from Contentful");
    return [];
  }
}

export async function getHabitBySlug(
  slug: string,
  locale?: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "habit",
      "fields.slug": slug,
      include: 3,
      locale: contentfulLocale(locale),
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getQuestionnaires(
  locale?: string
): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "questionnaire",
      include: 3,
      locale: contentfulLocale(locale),
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch questionnaires from Contentful");
    return [];
  }
}

export async function getQuestionnaireBySlug(
  slug: string,
  locale?: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "questionnaire",
      "fields.slug": slug,
      include: 3,
      locale: contentfulLocale(locale),
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getAuthors(): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "author",
      include: 2,
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch authors from Contentful");
    return [];
  }
}

export async function getAuthorBySlug(
  slug: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "author",
      "fields.slug": slug,
      include: 2,
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getAllAuthorSlugs(): Promise<string[]> {
  const authors = await getAuthors();
  return authors
    .map((a: ContentfulEntry) => a.fields?.slug)
    .filter(Boolean) as string[];
}

export async function getAllWeekSlugs(): Promise<string[]> {
  const weeks = await getWeeks();
  return weeks
    .map((w: ContentfulEntry) => w.fields?.slug)
    .filter(Boolean) as string[];
}

export async function getAllLessonSlugs(
  locale?: string
): Promise<string[]> {
  const lessons = await getLessons(locale);
  return lessons
    .map((l: ContentfulEntry) => l.fields?.slug)
    .filter(Boolean) as string[];
}

export async function getAllHabitSlugs(): Promise<string[]> {
  const habits = await getHabits();
  return habits
    .map((h: ContentfulEntry) => h.fields?.slug)
    .filter(Boolean) as string[];
}

export async function getAllQuestionnaireSlugs(): Promise<string[]> {
  const questionnaires = await getQuestionnaires();
  return questionnaires
    .map((q: ContentfulEntry) => q.fields?.slug)
    .filter(Boolean) as string[];
}

/** Serialize a Contentful questionnaire entry into plain props for the client component */
export function serializeQuestionnaire(entry: ContentfulEntry | null) {
  if (!entry?.fields) return null;
  const f = entry.fields as Record<string, unknown>;

  const questions = (Array.isArray(f.questions) ? f.questions : [])
    .map((q: ContentfulEntry) => {
      if (!q?.fields) return null;
      const qf = q.fields as Record<string, unknown>;
      const answers = (Array.isArray(qf.answers) ? qf.answers : [])
        .map((a: ContentfulEntry) => {
          if (!a?.fields) return null;
          const af = a.fields as Record<string, unknown>;
          return {
            id: a.sys?.id || String(Math.random()),
            title: String(af.title ?? ""),
            score: Number(af.score) || 0,
          };
        })
        .filter((a): a is NonNullable<typeof a> => a !== null);
      if (answers.length === 0) return null;
      return {
        id: q.sys?.id || String(Math.random()),
        question: String(qf.question ?? ""),
        type: String(qf.type ?? ""),
        answers,
      };
    })
    .filter((q): q is NonNullable<typeof q> => q !== null);

  const results = (Array.isArray(f.results) ? f.results : [])
    .map((r: ContentfulEntry) => {
      if (!r?.fields) return null;
      const rf = r.fields as Record<string, unknown>;
      const range = (rf.scoreRange as Record<string, unknown>) || {};
      return {
        id: r.sys?.id || String(Math.random()),
        title: String(rf.title ?? ""),
        scoreRange: {
          min: Number(range.lowEnd) || 0,
          max: Number(range.highEnd) || 100,
        },
        description: renderRichText(rf.description),
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);

  return {
    title: String(f.title ?? ""),
    slug: String(f.slug ?? ""),
    description: renderRichText(f.description),
    questions,
    results,
  };
}

export function renderRichText(richTextDocument: unknown): string {
  if (!richTextDocument) return "";
  try {
    return documentToHtmlString(richTextDocument as Document, {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const url = node.data?.target?.fields?.file?.url;
          const title = node.data?.target?.fields?.title || "";
          if (!url) return "";
          const src = url.startsWith("//") ? `https:${url}` : url;
          return `<img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" class="rounded-lg my-6 max-w-full" loading="lazy" />`;
        },
        [INLINES.HYPERLINK]: (node) => {
          const url = node.data?.uri || "#";
          const text = node.content
            ?.map((c: { value?: string }) => c.value || "")
            .join("");
          return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="text-brand-blue hover:underline">${escapeHtml(text)}</a>`;
        },
      },
    });
  } catch {
    return "";
  }
}
