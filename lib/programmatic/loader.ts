import fs from "fs";
import path from "path";
import type { ProgrammaticArticle } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/programmatic");

export function getAllProgrammaticSlugs(): string[] {
  try {
    return fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith(".json") && !f.includes(".fi."))
      .map((f) => f.replace(".json", ""));
  } catch {
    return [];
  }
}

export function getProgrammaticArticle(
  slug: string,
  locale: string = "en"
): ProgrammaticArticle | null {
  // Try locale-specific file first (e.g. slug.fi.json), fall back to default
  if (locale !== "en") {
    const localePath = path.join(CONTENT_DIR, `${slug}.${locale}.json`);
    try {
      const raw = fs.readFileSync(localePath, "utf-8");
      return JSON.parse(raw) as ProgrammaticArticle;
    } catch {
      // Fall through to default
    }
  }
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as ProgrammaticArticle;
  } catch {
    return null;
  }
}

export function getAllProgrammaticArticles(
  locale: string = "en"
): Array<{
  slug: string;
  article: ProgrammaticArticle;
}> {
  return getAllProgrammaticSlugs()
    .map((slug) => {
      const article = getProgrammaticArticle(slug, locale);
      if (!article) return null;
      return { slug, article };
    })
    .filter(Boolean) as Array<{ slug: string; article: ProgrammaticArticle }>;
}
