import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { getWeeks, getLessons, getHabits, getAuthors, getQuestionnaires } from "@/lib/contentful";
import { normalizeImageUrl } from "@/lib/contentful";
import { getAllPosts } from "@/lib/markdown";
import { type SearchableItem } from "@/components/CommandPalette";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import LazyCommandPalette from "@/components/LazyCommandPalette";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const [weeks, lessons, habits, authors, questionnaires] = await Promise.all([
    getWeeks(locale),
    getLessons(locale),
    getHabits(locale),
    getAuthors(),
    getQuestionnaires(locale),
  ]);

  const t = await getTranslations({ locale });

  // Contentful order 1 is the Introduction; orders 2..5 are Weeks 1..4.
  const navWeeks = weeks.map((w) => {
    const f = w.fields as Record<string, unknown>;
    const cover = f.coverPhoto as { fields: { file: { url: string } } } | undefined;
    const order = Number(f.order) || 0;
    return {
      name: f.weekName as string,
      slug: f.slug as string,
      label: order <= 1 ? (f.weekName as string) : t("WEEK_NUMBER", { order: order - 1 }),
      image: normalizeImageUrl(cover?.fields?.file?.url),
    };
  });

  const navLessons = lessons.slice(0, 5).map((l) => {
    const f = l.fields as Record<string, unknown>;
    return {
      name: f.lessonName as string,
      slug: f.slug as string,
    };
  });

  const navHabits = habits.slice(0, 5).map((h) => {
    const f = h.fields as Record<string, unknown>;
    return {
      name: f.title as string,
      slug: f.slug as string,
      period:
        f.period === "MORNING"
          ? t("MORNING")
          : f.period === "AFTERNOON"
            ? t("AFTERNOON")
            : t("EVENING"),
    };
  });

  const blogPosts = getAllPosts(locale);

  const searchItems: SearchableItem[] = [
    ...weeks.map((w) => {
      const f = w.fields as Record<string, unknown>;
      return {
        id: `week-${f.slug}`,
        name: f.weekName as string,
        category: "week" as const,
        slug: f.slug as string,
        href: `/coaching/weeks/${f.slug}`,
      };
    }),
    ...lessons.map((l) => {
      const f = l.fields as Record<string, unknown>;
      return {
        id: `lesson-${f.slug}`,
        name: f.lessonName as string,
        category: "lesson" as const,
        slug: f.slug as string,
        href: `/coaching/lessons/${f.slug}`,
      };
    }),
    ...habits.map((h) => {
      const f = h.fields as Record<string, unknown>;
      return {
        id: `habit-${f.slug}`,
        name: f.title as string,
        category: "habit" as const,
        slug: f.slug as string,
        href: `/coaching/habits/${f.slug}`,
      };
    }),
    ...questionnaires.map((q) => {
      const f = q.fields as Record<string, unknown>;
      return {
        id: `questionnaire-${f.slug}`,
        name: f.title as string,
        category: "questionnaire" as const,
        slug: f.slug as string,
        href: `/coaching/questionnaires/${f.slug}`,
      };
    }),
    ...authors.map((a) => {
      const f = a.fields as Record<string, unknown>;
      const name = (f.name as string) || "";
      const slug = (f.slug as string) || name.toLowerCase().replace(/\s+/g, "-");
      return {
        id: `author-${a.sys.id}`,
        name,
        category: "author" as const,
        slug,
        href: `/coaching/authors/${slug}`,
      };
    }),
    ...blogPosts.map((p) => ({
      id: `blog-${p.slug}`,
      name: p.title,
      category: "blog" as const,
      slug: p.slug,
      href: `/blog/${p.slug}`,
    })),
  ];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${sourceSerif.variable} font-sans bg-bg-primary text-text-primary antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            {t("NAVIGATION.SKIP_TO_CONTENT")}
          </a>
          <Header
            navWeeks={navWeeks}
            navLessons={navLessons}
            navHabits={navHabits}
          />
          <main id="main-content" tabIndex={-1} className="min-h-[100dvh] overflow-x-clip outline-none">
            {children}
          </main>
          <LazyCommandPalette items={searchItems} />
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
        {/* Self-hosted Umami at stats.perttu.dev */}
        <Script
          src="https://stats.perttu.dev/p.js"
          data-website-id="8f0ebc97-8d98-4cba-8244-c0d2d34cd5e6"
          data-domains="nyxo.app,www.nyxo.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
