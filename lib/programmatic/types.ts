// ─── Niche Taxonomy ─────────────────────────────────────────────────────────

export interface AudienceNiche {
  slug: string;
  name: string;
  name_fi: string;
  context: {
    description: string;
    pain_points: string[];
    sleep_challenges: string[];
    related_topics: string[];
  };
}

// ─── Content Schemas ────────────────────────────────────────────────────────

export interface SleepTipItem {
  title: string;
  description: string;
  why_it_works: string;
  difficulty: "easy" | "moderate" | "advanced";
  category: "environment" | "routine" | "nutrition" | "mindset" | "activity";
}

export interface SleepTipsArticle {
  meta: {
    content_type: "sleep-tips";
    audience_slug: string;
    generated_at: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    intro: string;
    why_sleep_matters: string;
    tips: SleepTipItem[];
    quick_wins: string[];
    common_mistakes: string[];
    conclusion: string;
  };
}

export interface ChecklistItem {
  id: string;
  text: string;
  explanation: string;
  category: "before-bed" | "bedroom" | "daytime" | "morning" | "nutrition";
  priority: "essential" | "recommended" | "bonus";
}

export interface SleepChecklistArticle {
  meta: {
    content_type: "sleep-checklist";
    audience_slug: string;
    generated_at: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    intro: string;
    why_this_checklist: string;
    items: ChecklistItem[];
    pro_tips: string[];
    conclusion: string;
  };
}

export type ProgrammaticArticle = SleepTipsArticle | SleepChecklistArticle;
