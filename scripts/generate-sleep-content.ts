/**
 * Programmatic SEO Content Generator
 *
 * Generates sleep-related content pages by filling strict JSON schemas
 * using an LLM API. Content is built, not written — the AI fills structured
 * fields, never freeform prose.
 *
 * Usage:
 *   bun run scripts/generate-sleep-content.ts
 *   bun run scripts/generate-sleep-content.ts --audience=students
 *   bun run scripts/generate-sleep-content.ts --type=checklist
 *   bun run scripts/generate-sleep-content.ts --dry-run
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { audiences } from "../lib/programmatic/taxonomy";
import type {
  AudienceNiche,
  SleepTipsArticle,
  SleepChecklistArticle,
} from "../lib/programmatic/types";

const OUTPUT_DIR = path.join(process.cwd(), "content/programmatic");

// ─── Title Templates (deterministic, not AI-generated) ──────────────────────

function sleepTipsTitle(audience: AudienceNiche): string {
  return `Sleep Tips for ${audience.name}: How to Sleep Better`;
}

function sleepChecklistTitle(audience: AudienceNiche): string {
  return `Sleep Hygiene Checklist for ${audience.name}`;
}

function sleepTipsSlug(audience: AudienceNiche): string {
  return `sleep-tips-for-${audience.slug}`;
}

function sleepChecklistSlug(audience: AudienceNiche): string {
  return `sleep-hygiene-checklist-for-${audience.slug}`;
}

// ─── Prompts ────────────────────────────────────────────────────────────────

function buildTipsPrompt(audience: AudienceNiche): string {
  return `You are a sleep science expert writing content for ${audience.name}.

AUDIENCE CONTEXT:
${audience.context.description}

Their specific sleep challenges:
${audience.context.sleep_challenges.map((c) => `- ${c}`).join("\n")}

Their pain points:
${audience.context.pain_points.map((p) => `- ${p}`).join("\n")}

Related topics to reference: ${audience.context.related_topics.join(", ")}

Generate a JSON object that EXACTLY matches this TypeScript interface:

{
  "seo": {
    "description": string, // 150-160 chars, includes "${audience.name}" and "sleep"
    "keywords": string[] // exactly 8 keywords, mix of head and long-tail
  },
  "content": {
    "intro": string, // 2-3 sentences, speaks directly to ${audience.name}, acknowledges their challenges
    "why_sleep_matters": string, // 2-3 sentences specific to why sleep is critical for ${audience.name}
    "tips": [ // exactly 15 items
      {
        "title": string, // actionable, starts with a verb
        "description": string, // 2-3 sentences, practical and specific to this audience
        "why_it_works": string, // 1-2 sentences citing sleep science
        "difficulty": "easy" | "moderate" | "advanced",
        "category": "environment" | "routine" | "nutrition" | "mindset" | "activity"
      }
    ],
    "quick_wins": string[], // exactly 5, one-sentence tips that can be done tonight
    "common_mistakes": string[], // exactly 5, mistakes this specific audience makes
    "conclusion": string // 2-3 sentences, encouraging, links back to sleep coaching
  }
}

RULES:
- Every tip must be SPECIFIC to ${audience.name}, not generic sleep advice
- Mix of difficulty levels: 5 easy, 6 moderate, 4 advanced
- Mix of categories: at least 2 per category
- All text should be informative, not salesy
- Use second person ("you")
- No markdown formatting in values
- Return ONLY valid JSON, no other text`;
}

function buildChecklistPrompt(audience: AudienceNiche): string {
  return `You are a sleep science expert creating a sleep hygiene checklist for ${audience.name}.

AUDIENCE CONTEXT:
${audience.context.description}

Their specific sleep challenges:
${audience.context.sleep_challenges.map((c) => `- ${c}`).join("\n")}

Their pain points:
${audience.context.pain_points.map((p) => `- ${p}`).join("\n")}

Generate a JSON object that EXACTLY matches this TypeScript interface:

{
  "seo": {
    "description": string, // 150-160 chars, includes "${audience.name}" and "sleep checklist"
    "keywords": string[] // exactly 8 keywords
  },
  "content": {
    "intro": string, // 2-3 sentences speaking directly to ${audience.name}
    "why_this_checklist": string, // 2-3 sentences on why a checklist approach works for them
    "items": [ // exactly 20 items
      {
        "id": string, // kebab-case unique id
        "text": string, // short actionable item (5-10 words)
        "explanation": string, // 1-2 sentences explaining why this matters
        "category": "before-bed" | "bedroom" | "daytime" | "morning" | "nutrition",
        "priority": "essential" | "recommended" | "bonus"
      }
    ],
    "pro_tips": string[], // exactly 5, advanced tips specific to this audience
    "conclusion": string // 2-3 sentences
  }
}

RULES:
- Items must be SPECIFIC to ${audience.name}, not generic
- Priority distribution: 6 essential, 8 recommended, 6 bonus
- Category distribution: at least 3 per category
- Each item's "text" should be concise and checkable
- Return ONLY valid JSON, no other text`;
}

// ─── Generation ─────────────────────────────────────────────────────────────

async function generateWithClaude(prompt: string): Promise<string> {
  const client = new Anthropic();

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from Claude");
  }

  return textBlock.text;
}

function extractJson(text: string): string {
  // Try to find JSON in the response (handles markdown code blocks)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON found in response");
  return jsonMatch[0];
}

async function generateTipsArticle(
  audience: AudienceNiche
): Promise<SleepTipsArticle> {
  const prompt = buildTipsPrompt(audience);
  const raw = await generateWithClaude(prompt);
  const json = JSON.parse(extractJson(raw));

  return {
    meta: {
      content_type: "sleep-tips",
      audience_slug: audience.slug,
      generated_at: new Date().toISOString(),
    },
    seo: {
      title: sleepTipsTitle(audience),
      ...json.seo,
    },
    content: json.content,
  };
}

async function generateChecklistArticle(
  audience: AudienceNiche
): Promise<SleepChecklistArticle> {
  const prompt = buildChecklistPrompt(audience);
  const raw = await generateWithClaude(prompt);
  const json = JSON.parse(extractJson(raw));

  return {
    meta: {
      content_type: "sleep-checklist",
      audience_slug: audience.slug,
      generated_at: new Date().toISOString(),
    },
    seo: {
      title: sleepChecklistTitle(audience),
      ...json.seo,
    },
    content: json.content,
  };
}

function writeArticle(slug: string, article: SleepTipsArticle | SleepChecklistArticle): void {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const filePath = path.join(OUTPUT_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(article, null, 2));
  console.log(`  ✓ ${filePath}`);
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const audienceFilter = args
    .find((a) => a.startsWith("--audience="))
    ?.split("=")[1];
  const typeFilter = args
    .find((a) => a.startsWith("--type="))
    ?.split("=")[1];

  const targetAudiences = audienceFilter
    ? audiences.filter((a) => a.slug === audienceFilter)
    : audiences;

  if (targetAudiences.length === 0) {
    console.error(`No audience found for slug: ${audienceFilter}`);
    process.exit(1);
  }

  const generateTips = !typeFilter || typeFilter === "tips";
  const generateChecklists = !typeFilter || typeFilter === "checklist";

  const totalPages =
    targetAudiences.length *
    ((generateTips ? 1 : 0) + (generateChecklists ? 1 : 0));

  console.log(`\nGenerating ${totalPages} pages for ${targetAudiences.length} audiences...\n`);

  if (dryRun) {
    for (const audience of targetAudiences) {
      if (generateTips) console.log(`  [dry-run] ${sleepTipsSlug(audience)}`);
      if (generateChecklists) console.log(`  [dry-run] ${sleepChecklistSlug(audience)}`);
    }
    console.log("\nDry run complete. No files written.");
    return;
  }

  let generated = 0;
  let failed = 0;

  for (const audience of targetAudiences) {
    console.log(`\n→ ${audience.name}`);

    if (generateTips) {
      try {
        const article = await generateTipsArticle(audience);
        writeArticle(sleepTipsSlug(audience), article);
        generated++;
      } catch (err) {
        console.error(`  ✗ Tips failed: ${err}`);
        failed++;
      }
    }

    if (generateChecklists) {
      try {
        const article = await generateChecklistArticle(audience);
        writeArticle(sleepChecklistSlug(audience), article);
        generated++;
      } catch (err) {
        console.error(`  ✗ Checklist failed: ${err}`);
        failed++;
      }
    }
  }

  console.log(`\nDone! Generated: ${generated}, Failed: ${failed}`);
}

main().catch(console.error);
