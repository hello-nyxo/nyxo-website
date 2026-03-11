"use client";

import { useState } from "react";
import type {
  SleepChecklistArticle,
  ChecklistItem,
} from "@/lib/programmatic/types";

export interface SleepChecklistTranslations {
  proTips: string;
  yourProgress: string;
  completed: string; // "{checked}/{total} completed"
  filterAll: string;
  categories: Record<string, string>;
  priorities: Record<string, string>;
}

const categoryIcons: Record<string, string> = {
  "before-bed": "\u{1F319}",
  bedroom: "\u{1F6CF}\u{FE0F}",
  daytime: "\u{2600}\u{FE0F}",
  morning: "\u{1F305}",
  nutrition: "\u{1F957}",
};

const priorityColors: Record<string, string> = {
  essential: "bg-brand-blue text-white",
  recommended: "bg-accent-dusk/10 text-accent-dusk",
  bonus: "bg-brand-teal/10 text-brand-teal",
};

type FilterCategory = "all" | ChecklistItem["category"];

export default function SleepChecklistRenderer({
  article,
  translations,
}: {
  article: SleepChecklistArticle;
  translations: SleepChecklistTranslations;
}) {
  const { content } = article;
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<FilterCategory>("all");

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredItems =
    filter === "all"
      ? content.items
      : content.items.filter((item) => item.category === filter);

  const progress = Math.round((checked.size / content.items.length) * 100);

  const categories: FilterCategory[] = [
    "all",
    "morning",
    "daytime",
    "nutrition",
    "before-bed",
    "bedroom",
  ];

  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="max-w-3xl mx-auto">
        <p className="text-lg text-text-primary leading-relaxed">
          {content.intro}
        </p>
        <p className="text-lg text-text-secondary leading-relaxed mt-4">
          {content.why_this_checklist}
        </p>
      </section>

      {/* Progress Bar */}
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text-secondary">
            {translations.yourProgress}
          </span>
          <span className="text-sm font-semibold text-brand-blue">
            {translations.completed
              .replace("[checked]", String(checked.size))
              .replace("[total]", String(content.items.length))}
          </span>
        </div>
        <div className="h-3 bg-hairline rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-blue to-brand-teal rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      {/* Category Filter */}
      <section>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-brand-blue text-white shadow-sm"
                  : "bg-white text-text-secondary border border-hairline hover:border-brand-blue/30"
              }`}
            >
              {cat === "all"
                ? translations.filterAll
                : `${categoryIcons[cat] || ""} ${translations.categories[cat] || cat}`}
            </button>
          ))}
        </div>

        {/* Checklist Items */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isChecked = checked.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-200 select-none ${
                  isChecked
                    ? "bg-brand-blue/5 border-brand-blue/20"
                    : "bg-white border-hairline hover:border-brand-blue/20 hover:shadow-soft"
                }`}
              >
                {/* Checkbox */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-0.5 transition-all duration-200 ${
                    isChecked
                      ? "bg-brand-blue border-brand-blue"
                      : "border-hairline"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3
                      className={`text-base font-semibold transition-all duration-200 font-sans ${
                        isChecked
                          ? "text-text-muted line-through"
                          : "text-brand-deep"
                      }`}
                    >
                      {item.text}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityColors[item.priority] || ""}`}
                    >
                      {translations.priorities[item.priority] || item.priority}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-200 ${
                      isChecked ? "text-text-muted" : "text-text-secondary"
                    }`}
                  >
                    {item.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pro Tips */}
      <section className="bg-bg-cream rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-serif font-semibold text-brand-deep mb-6">
          {translations.proTips}
        </h2>
        <div className="space-y-4">
          {content.pro_tips.map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-xl p-4 border border-hairline"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-dusk/20 text-accent-dusk flex items-center justify-center text-xs font-bold mt-0.5">
                ★
              </span>
              <p className="text-sm text-text-primary leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-3xl mx-auto border-t border-hairline pt-8">
        <p className="text-lg text-text-primary leading-relaxed">
          {content.conclusion}
        </p>
      </section>
    </div>
  );
}
