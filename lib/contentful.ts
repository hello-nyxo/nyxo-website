import { createClient, type ContentfulClientApi } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

let _client: ContentfulClientApi<undefined> | null = null;

function getClient(): ContentfulClientApi<undefined> | null {
  if (_client) return _client;
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  _client = createClient({ space, accessToken });
  return _client;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentfulEntry = any;

export function normalizeImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith("//") ? `https:${url}` : url;
}

export async function getWeeks(): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "coachingWeek",
      order: ["fields.order"],
      include: 2,
    });
    return entries.items;
  } catch (err) {
    console.warn("Failed to fetch weeks from Contentful", err);
    return [];
  }
}

export async function getWeekBySlug(
  slug: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "coachingWeek",
      "fields.slug": slug,
      include: 3,
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getLessons(): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "lesson",
      include: 2,
      limit: 100,
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch lessons from Contentful");
    return [];
  }
}

export async function getLessonBySlug(
  slug: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "lesson",
      "fields.slug": slug,
      include: 3,
    });
    return entries.items[0] || null;
  } catch {
    return null;
  }
}

export async function getHabits(): Promise<ContentfulEntry[]> {
  try {
    const client = getClient();
    if (!client) return [];
    const entries = await client.getEntries({
      content_type: "habit",
      include: 2,
      limit: 100,
    });
    return entries.items;
  } catch {
    console.warn("Failed to fetch habits from Contentful");
    return [];
  }
}

export async function getHabitBySlug(
  slug: string
): Promise<ContentfulEntry | null> {
  try {
    const client = getClient();
    if (!client) return null;
    const entries = await client.getEntries({
      content_type: "habit",
      "fields.slug": slug,
      include: 3,
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

export async function getAllWeekSlugs(): Promise<string[]> {
  const weeks = await getWeeks();
  return weeks
    .map((w: ContentfulEntry) => w.fields?.slug)
    .filter(Boolean) as string[];
}

export async function getAllLessonSlugs(): Promise<string[]> {
  const lessons = await getLessons();
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderRichText(document: any): string {
  if (!document) return "";
  try {
    return documentToHtmlString(document, {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const url = node.data?.target?.fields?.file?.url;
          const title = node.data?.target?.fields?.title || "";
          if (!url) return "";
          const src = url.startsWith("//") ? `https:${url}` : url;
          return `<img src="${src}" alt="${title}" class="rounded-lg my-6 max-w-full" />`;
        },
        [INLINES.HYPERLINK]: (node) => {
          const url = node.data?.uri || "#";
          const text = node.content
            ?.map((c: { value?: string }) => c.value || "")
            .join("");
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-brand-blue hover:underline">${text}</a>`;
        },
      },
    });
  } catch {
    return "";
  }
}
