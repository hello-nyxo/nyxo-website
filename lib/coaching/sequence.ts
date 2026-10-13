import { getWeeks, normalizeImageUrl, type ContentfulEntry } from "@/lib/contentful";

/**
 * The coaching programme is a linear sequence, but Contentful only stores half
 * of that: weeks carry `order`, and each week carries an ordered `lessons[]`.
 * A lesson has no back-reference to its week. This module flattens the two into
 * the canonical step list every coaching page reads from, so ordering logic
 * lives in exactly one place.
 */

export interface ProgrammeHabit {
  slug: string;
  title: string;
  period: string;
}

export interface ProgrammeLesson {
  slug: string;
  name: string;
  /** 1-based position within its own week. */
  indexInWeek: number;
  /** 1-based position across the whole programme. */
  globalIndex: number;
  weekSlug: string;
  /** Habits this lesson introduces. Contentful names the field `habit`. */
  habits: ProgrammeHabit[];
}

export interface ProgrammeWeek {
  slug: string;
  /** Raw Contentful `order`: 1 is the Introduction, 2..5 are Weeks 1..4. */
  order: number;
  name: string;
  intro: string;
  /** Length in days, straight from Contentful. */
  duration: number;
  coverUrl?: string;
  lessons: ProgrammeLesson[];
  /**
   * Every habit this week introduces, de-duplicated across its lessons.
   * Derived rather than read from the week's `taskCount` field, which has
   * drifted out of sync with the content (it disagrees on 3 of 5 weeks).
   */
  habits: ProgrammeHabit[];
}

export interface Programme {
  weeks: ProgrammeWeek[];
  /** Every lesson, in the order a learner walks them. */
  steps: ProgrammeLesson[];
}

export interface LessonPosition {
  week: ProgrammeWeek;
  lesson: ProgrammeLesson;
  prev?: ProgrammeLesson;
  next?: ProgrammeLesson;
  /** The week that follows this lesson's week, if this is the last lesson in it. */
  nextWeek?: ProgrammeWeek;
  totalSteps: number;
}

/**
 * Contentful `order` 1 is the Introduction, not "week one" - it is a single day
 * with no tasks. Orders 2..5 are the four weeks the marketing copy promises.
 * Callers use this to decide between the week's own name and a "Week N" label.
 */
export function isIntroduction(week: ProgrammeWeek): boolean {
  return week.order <= 1;
}

/** Display number for a real coaching week: order 2 renders as Week 1. */
export function weekDisplayNumber(week: ProgrammeWeek): number {
  return week.order - 1;
}

/** How many real coaching weeks there are, excluding the Introduction. */
export function countCoachingWeeks(programme: Programme): number {
  return programme.weeks.filter((w) => !isIntroduction(w)).length;
}

function toStr(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function readHabits(lesson: ContentfulEntry): ProgrammeHabit[] {
  const raw = (lesson.fields.habit as ContentfulEntry[]) || [];
  return raw
    .filter((habit) => habit?.fields && toStr(habit.fields.slug))
    .map((habit) => ({
      slug: toStr(habit.fields.slug),
      title: toStr(habit.fields.title),
      period: toStr(habit.fields.period),
    }));
}

export async function getProgramme(locale?: string): Promise<Programme> {
  const entries = await getWeeks(locale);
  const steps: ProgrammeLesson[] = [];
  const weeks: ProgrammeWeek[] = [];

  for (const entry of entries) {
    const f = entry.fields;
    const weekSlug = toStr(f.slug);
    if (!weekSlug) continue;

    const cover = f.coverPhoto as
      | { fields?: { file?: { url?: string } } }
      | undefined;

    // Unresolved Contentful links come back without `fields` and cannot be walked.
    const rawLessons = ((f.lessons as ContentfulEntry[]) || []).filter(
      (lesson) => lesson?.fields && toStr(lesson.fields.slug)
    );

    const lessons: ProgrammeLesson[] = rawLessons.map((lesson, i) => ({
      slug: toStr(lesson.fields.slug),
      name: toStr(lesson.fields.lessonName),
      indexInWeek: i + 1,
      globalIndex: steps.length + i + 1,
      weekSlug,
      habits: readHabits(lesson),
    }));

    const habits: ProgrammeHabit[] = [];
    const seen = new Set<string>();
    for (const lesson of lessons) {
      for (const habit of lesson.habits) {
        if (seen.has(habit.slug)) continue;
        seen.add(habit.slug);
        habits.push(habit);
      }
    }

    steps.push(...lessons);
    weeks.push({
      slug: weekSlug,
      order: Number(f.order) || 0,
      name: toStr(f.weekName),
      intro: toStr(f.intro),
      duration: Number(f.duration) || 0,
      coverUrl: normalizeImageUrl(cover?.fields?.file?.url),
      lessons,
      habits,
    });
  }

  return { weeks, steps };
}

/** The first lesson of the programme: where "Start" points. */
export async function getFirstLesson(
  locale?: string
): Promise<ProgrammeLesson | undefined> {
  const { steps } = await getProgramme(locale);
  return steps[0];
}

/**
 * Resolve a lesson's place in the programme, including its neighbours. Returns
 * undefined for lessons that exist but are not part of any week.
 */
export async function getLessonPosition(
  lessonSlug: string,
  locale?: string
): Promise<LessonPosition | undefined> {
  const programme = await getProgramme(locale);
  const { steps, weeks } = programme;

  const at = steps.findIndex((s) => s.slug === lessonSlug);
  if (at === -1) return undefined;

  const lesson = steps[at];
  const week = weeks.find((w) => w.slug === lesson.weekSlug);
  if (!week) return undefined;

  const isLastOfWeek = lesson.indexInWeek === week.lessons.length;
  const weekAt = weeks.findIndex((w) => w.slug === week.slug);

  return {
    week,
    lesson,
    prev: at > 0 ? steps[at - 1] : undefined,
    next: at < steps.length - 1 ? steps[at + 1] : undefined,
    nextWeek: isLastOfWeek ? weeks[weekAt + 1] : undefined,
    totalSteps: steps.length,
  };
}

/** Previous and next week for the week-level pager. */
export async function getWeekNeighbours(
  weekSlug: string,
  locale?: string
): Promise<{ prev?: ProgrammeWeek; next?: ProgrammeWeek }> {
  const { weeks } = await getProgramme(locale);
  const at = weeks.findIndex((w) => w.slug === weekSlug);
  if (at === -1) return {};
  return { prev: weeks[at - 1], next: weeks[at + 1] };
}
