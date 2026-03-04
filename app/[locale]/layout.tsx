import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { getWeeks, getLessons, getHabits } from "@/lib/contentful";
import { normalizeImageUrl } from "@/lib/contentful";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

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

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const [weeks, lessons, habits] = await Promise.all([
    getWeeks(),
    getLessons(),
    getHabits(),
  ]);

  const navWeeks = weeks.slice(0, 4).map((w) => {
    const f = w.fields as Record<string, unknown>;
    const cover = f.coverPhoto as { fields: { file: { url: string } } } | undefined;
    return {
      name: f.weekName as string,
      slug: f.slug as string,
      order: f.order as number,
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
      period: f.period as string,
    };
  });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${fraunces.variable} font-sans bg-bg-primary text-text-primary antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header
            navWeeks={navWeeks}
            navLessons={navLessons}
            navHabits={navHabits}
          />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
