"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

interface NavWeek {
  name: string;
  slug: string;
  order: number;
  image?: string;
}

interface NavLesson {
  name: string;
  slug: string;
}

interface NavHabit {
  name: string;
  slug: string;
  period: string;
}

interface HeaderProps {
  navWeeks?: NavWeek[];
  navLessons?: NavLesson[];
  navHabits?: NavHabit[];
}

function periodColor(period: string) {
  if (period === "MORNING") return "bg-accent-warm/15 text-accent-warm";
  if (period === "AFTERNOON") return "bg-accent-noon/15 text-accent-noon";
  return "bg-accent-dusk/15 text-accent-dusk";
}

export default function Header({
  navWeeks = [],
  navLessons = [],
  navHabits = [],
}: HeaderProps) {
  const t = useTranslations("NAVIGATION");
  const tCoaching = useTranslations("COACHING");
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || routing.defaultLocale;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-hairline shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center no-underline">
            <span className="text-lg font-bold font-serif text-brand-deep">
              Nyxo
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-0.5">
          {/* Weeks flyout */}
          <Popover>
            <PopoverButton
              className={`flex items-center gap-x-1 rounded-full px-3.5 py-2 text-sm font-medium outline-none transition-all hover:bg-brand-blue/5 hover:text-brand-blue ${
                pathname.includes("/coaching/weeks")
                  ? "text-brand-blue bg-brand-blue/5"
                  : "text-text-secondary"
              }`}
            >
              <CalendarDaysIcon aria-hidden="true" className="size-4" />
              {tCoaching("WEEKS")}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-text-muted"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white/95 backdrop-blur-xl shadow-card ring-1 ring-black/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <div className="grid grid-cols-4 gap-4">
                  {navWeeks.map((week) => (
                    <Link
                      key={week.slug}
                      href={`/coaching/weeks/${week.slug}`}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline no-underline hover:border-brand-blue/20 hover:shadow-card transition-all duration-300"
                    >
                      {week.image && (
                        <div className="relative aspect-3/2 overflow-hidden">
                          <Image
                            src={week.image}
                            alt={week.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="250px"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <span className="text-xs font-semibold text-brand-blue">
                          Week {week.order}
                        </span>
                        <p className="mt-1 text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors line-clamp-2">
                          {week.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 border-t border-hairline pt-4">
                  <Link
                    href="/coaching#weeks"
                    className="text-sm font-medium text-brand-blue no-underline hover:underline"
                  >
                    {tCoaching("WEEKS_TEXT")} &rarr;
                  </Link>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Lessons flyout */}
          <Popover>
            <PopoverButton
              className={`flex items-center gap-x-1 rounded-full px-3.5 py-2 text-sm font-medium outline-none transition-all hover:bg-brand-blue/5 hover:text-brand-blue ${
                pathname.includes("/coaching/lessons")
                  ? "text-brand-blue bg-brand-blue/5"
                  : "text-text-secondary"
              }`}
            >
              <AcademicCapIcon aria-hidden="true" className="size-4" />
              {tCoaching("LESSONS")}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-text-muted"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white/95 backdrop-blur-xl shadow-card ring-1 ring-black/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <div className="grid grid-cols-5 gap-3">
                  {navLessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={`/coaching/lessons/${lesson.slug}`}
                      className="group rounded-2xl border border-hairline p-4 no-underline hover:border-brand-blue/20 hover:shadow-card transition-all duration-300"
                    >
                      <AcademicCapIcon className="size-5 text-text-muted group-hover:text-brand-blue transition-colors mb-2" />
                      <p className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors line-clamp-2">
                        {lesson.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 border-t border-hairline pt-4">
                  <Link
                    href="/coaching#lessons"
                    className="text-sm font-medium text-brand-blue no-underline hover:underline"
                  >
                    {tCoaching("LESSONS_TEXT")} &rarr;
                  </Link>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Habits flyout */}
          <Popover>
            <PopoverButton
              className={`flex items-center gap-x-1 rounded-full px-3.5 py-2 text-sm font-medium outline-none transition-all hover:bg-brand-blue/5 hover:text-brand-blue ${
                pathname.includes("/coaching/habits")
                  ? "text-brand-blue bg-brand-blue/5"
                  : "text-text-secondary"
              }`}
            >
              <SparklesIcon aria-hidden="true" className="size-4" />
              {tCoaching("HABITS")}
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-text-muted"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white/95 backdrop-blur-xl shadow-card ring-1 ring-black/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <div className="grid grid-cols-5 gap-3">
                  {navHabits.map((habit) => (
                    <Link
                      key={habit.slug}
                      href={`/coaching/habits/${habit.slug}`}
                      className="group rounded-2xl border border-hairline p-4 no-underline hover:border-brand-blue/20 hover:shadow-card transition-all duration-300"
                    >
                      <span
                        className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${periodColor(habit.period)}`}
                      >
                        {habit.period}
                      </span>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors line-clamp-2">
                        {habit.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 border-t border-hairline pt-4">
                  <Link
                    href="/coaching#habits"
                    className="text-sm font-medium text-brand-blue no-underline hover:underline"
                  >
                    {tCoaching("HABITS_TEXT")} &rarr;
                  </Link>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          {/* Blog */}
          <Link
            href="/blog"
            className={`rounded-full px-3.5 py-2 text-sm font-medium no-underline transition-all hover:bg-brand-blue/5 hover:text-brand-blue ${
              pathname.startsWith("/blog")
                ? "text-brand-blue bg-brand-blue/5"
                : "text-text-secondary"
            }`}
          >
            {t("BLOG")}
          </Link>
        </PopoverGroup>

        {/* Language switcher (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-1">
          {routing.locales.map((locale) => (
            <Link
              key={locale}
              href={pathname}
              locale={locale}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold no-underline uppercase transition-all ${
                currentLocale === locale
                  ? "bg-brand-blue text-white"
                  : "text-text-muted hover:text-brand-blue hover:bg-brand-blue/5"
              }`}
            >
              {locale}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/5 sm:shadow-card">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-lg font-bold font-serif text-brand-deep">
                Nyxo
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-full p-2.5 text-text-secondary hover:bg-bg-primary transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-hairline">
              <div className="space-y-1 py-6">
                {/* Weeks disclosure */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2.5 pr-3.5 pl-3 text-base font-semibold text-text-primary hover:bg-bg-primary transition-colors">
                    <span className="flex items-center gap-2.5">
                      <CalendarDaysIcon className="size-5 text-brand-blue" />
                      {tCoaching("WEEKS")}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-text-muted transition-transform group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-1 space-y-0.5">
                    {navWeeks.map((week) => (
                      <Link
                        key={week.slug}
                        href={`/coaching/weeks/${week.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-10 text-sm text-text-secondary hover:bg-bg-primary hover:text-text-primary no-underline transition-colors"
                      >
                        <span className="text-xs font-semibold text-brand-blue mr-2">
                          W{week.order}
                        </span>
                        {week.name}
                      </Link>
                    ))}
                    <Link
                      href="/coaching#weeks"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg py-2 pr-3 pl-10 text-sm font-medium text-brand-blue hover:bg-bg-primary no-underline"
                    >
                      All weeks &rarr;
                    </Link>
                  </DisclosurePanel>
                </Disclosure>

                {/* Lessons disclosure */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2.5 pr-3.5 pl-3 text-base font-semibold text-text-primary hover:bg-bg-primary transition-colors">
                    <span className="flex items-center gap-2.5">
                      <AcademicCapIcon className="size-5 text-brand-blue" />
                      {tCoaching("LESSONS")}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-text-muted transition-transform group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-1 space-y-0.5">
                    {navLessons.map((lesson) => (
                      <Link
                        key={lesson.slug}
                        href={`/coaching/lessons/${lesson.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-10 text-sm text-text-secondary hover:bg-bg-primary hover:text-text-primary no-underline transition-colors"
                      >
                        {lesson.name}
                      </Link>
                    ))}
                    <Link
                      href="/coaching#lessons"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg py-2 pr-3 pl-10 text-sm font-medium text-brand-blue hover:bg-bg-primary no-underline"
                    >
                      All lessons &rarr;
                    </Link>
                  </DisclosurePanel>
                </Disclosure>

                {/* Habits disclosure */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2.5 pr-3.5 pl-3 text-base font-semibold text-text-primary hover:bg-bg-primary transition-colors">
                    <span className="flex items-center gap-2.5">
                      <SparklesIcon className="size-5 text-brand-blue" />
                      {tCoaching("HABITS")}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-text-muted transition-transform group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-1 space-y-0.5">
                    {navHabits.map((habit) => (
                      <Link
                        key={habit.slug}
                        href={`/coaching/habits/${habit.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-10 text-sm text-text-secondary hover:bg-bg-primary hover:text-text-primary no-underline transition-colors"
                      >
                        {habit.name}
                      </Link>
                    ))}
                    <Link
                      href="/coaching#habits"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg py-2 pr-3 pl-10 text-sm font-medium text-brand-blue hover:bg-bg-primary no-underline"
                    >
                      All habits &rarr;
                    </Link>
                  </DisclosurePanel>
                </Disclosure>

                {/* Blog */}
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold text-text-primary hover:bg-bg-primary no-underline transition-colors"
                >
                  {t("BLOG")}
                </Link>
              </div>

              {/* Language switcher (mobile) */}
              <div className="py-6">
                <div className="flex items-center gap-2">
                  {routing.locales.map((locale) => (
                    <Link
                      key={locale}
                      href={pathname}
                      locale={locale}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold no-underline uppercase transition-all ${
                        currentLocale === locale
                          ? "bg-brand-blue text-white"
                          : "text-text-secondary hover:text-brand-blue bg-bg-primary"
                      }`}
                    >
                      {locale}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
