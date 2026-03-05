"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "@/lib/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  SparklesIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export type SearchableItem = {
  id: string;
  name: string;
  category: "blog" | "lesson" | "week" | "habit" | "author" | "questionnaire";
  slug: string;
  href: string;
};

const categoryIcons = {
  blog: DocumentTextIcon,
  lesson: AcademicCapIcon,
  week: CalendarDaysIcon,
  habit: SparklesIcon,
  author: UserIcon,
  questionnaire: ClipboardDocumentListIcon,
};

const categoryColors = {
  blog: "text-blue-500 group-data-[focus]:text-white",
  lesson: "text-violet-500 group-data-[focus]:text-white",
  week: "text-emerald-500 group-data-[focus]:text-white",
  habit: "text-amber-500 group-data-[focus]:text-white",
  author: "text-rose-500 group-data-[focus]:text-white",
  questionnaire: "text-teal-500 group-data-[focus]:text-white",
};

export default function CommandPalette({
  items,
}: {
  items: SearchableItem[];
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const t = useTranslations("COMMAND_PALETTE");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return items.slice(0, 20);
    const q = query.toLowerCase();
    return items.filter((item) => item.name.toLowerCase().includes(q));
  }, [query, items]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchableItem[]> = {};
    for (const item of filtered) {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    }
    return groups;
  }, [filtered]);

  const categoryLabels: Record<string, string> = {
    week: t("WEEKS"),
    lesson: t("LESSONS"),
    blog: t("BLOG"),
    habit: t("HABITS"),
    author: t("AUTHORS"),
    questionnaire: t("QUESTIONNAIRES"),
  };

  const categoryOrder = ["week", "lesson", "habit", "questionnaire", "author", "blog"];

  return (
    <Dialog
      className="relative z-50"
      open={open}
      onClose={() => {
        setOpen(false);
        setQuery("");
      }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <DialogPanel
          transition
          className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
        >
          <Combobox
            onChange={(item: SearchableItem | null) => {
              if (item) {
                setOpen(false);
                setQuery("");
                router.push(item.href);
              }
            }}
          >
            <div className="grid grid-cols-1">
              <ComboboxInput
                autoFocus
                className="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm"
                placeholder={t("PLACEHOLDER")}
                onChange={(e) => setQuery(e.target.value)}
                onBlur={() => setQuery("")}
              />
              <MagnifyingGlassIcon
                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400"
                aria-hidden="true"
              />
            </div>

            {Object.keys(grouped).length > 0 && (
              <ComboboxOptions
                static
                as="ul"
                className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
              >
                {categoryOrder
                  .filter((cat) => grouped[cat])
                  .map((cat) => (
                    <li key={cat}>
                      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {categoryLabels[cat]}
                      </h2>
                      <ul className="-mx-4 mt-2 text-sm text-gray-700">
                        {grouped[cat].map((item) => {
                          const Icon = categoryIcons[item.category];
                          return (
                            <ComboboxOption
                              as="li"
                              key={item.id}
                              value={item}
                              className="group flex cursor-default items-center gap-3 px-4 py-2 select-none rounded-lg data-focus:bg-brand-blue data-focus:text-white"
                            >
                              <Icon
                                className={`size-5 flex-none ${categoryColors[item.category]}`}
                                aria-hidden="true"
                              />
                              <span className="flex-auto truncate">
                                {item.name}
                              </span>
                            </ComboboxOption>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
              </ComboboxOptions>
            )}

            {query && Object.keys(grouped).length === 0 && (
              <div className="px-6 py-14 text-center text-sm sm:px-14">
                <ExclamationTriangleIcon
                  className="mx-auto size-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 font-semibold text-gray-900">
                  {t("NO_RESULTS")}
                </p>
                <p className="mt-2 text-gray-500">{t("NO_RESULTS_TEXT")}</p>
              </div>
            )}

            <div className="flex items-center justify-between bg-gray-50 px-4 py-2.5 text-xs text-gray-500">
              <span>{t("HINT")}</span>
              <div className="flex items-center gap-1">
                <kbd className="rounded border border-gray-300 bg-white px-1.5 py-0.5 font-sans text-[11px] font-medium text-gray-500">
                  Esc
                </kbd>
                <span>{t("TO_CLOSE")}</span>
              </div>
            </div>
          </Combobox>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
