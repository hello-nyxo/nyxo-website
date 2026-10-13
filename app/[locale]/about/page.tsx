import { getTranslations, setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import PersonCard from "@/components/PersonCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ABOUT" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("META_DESCRIPTION"),
    path: "/about",
    locale,
  });
}

const team = [
  { name: "Perttu Lähteenlahti", title: "CEO & Co-Founder", image: "/images/team/perttu.png" },
  { name: "Eeva Siika-aho", title: "COO & Co-Founder", image: "/images/team/eeva.jpg" },
  { name: "Pietari Nurmi", title: "Head of Coaching", image: "/images/team/pietari.png" },
];

const scientists = [
  { name: "Anu-Katriina Pesonen", title: "Professor, University of Helsinki", image: "/images/team/anu.jpg" },
  { name: "Liisa Kuula", title: "Postdoctoral Researcher", image: "/images/team/liisa.jpeg" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ABOUT");

  return (
    <>
      {/* Mission and story: one editorial column */}
      <section className="mx-auto max-w-3xl px-4 pt-20 pb-20 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl leading-[1.1] font-semibold text-brand-deep sm:text-5xl">
          {t("TITLE")}
        </h1>
        <h2 className="mt-14 font-serif text-2xl font-semibold text-brand-deep">
          {t("NYXO")}
        </h2>
        <div className="mt-5 space-y-5 text-lg leading-relaxed text-text-secondary">
          <p>{t("INTRODUCTION_1")}</p>
          <p>{t("INTRODUCTION_2")}</p>
          <p>{t("INTRODUCTION_3")}</p>
        </div>
      </section>

      {/* Team: exactly as many columns as there are people */}
      <section className="bg-bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-deep">
            {t("TEAM")}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {team.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Scientific advisory: the credibility section */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-brand-deep">
            {t("SCIENTISTS")}
          </h2>
          <p className="mt-3 leading-relaxed text-text-secondary">
            {t("SCIENTISTS_TEXT")}
          </p>
        </div>
        <div className="mt-10 grid max-w-sm grid-cols-2 gap-8">
          {scientists.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-deep">
            {t("WORK_FOR_US")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {t("WORK_FOR_US_TEXT")}
          </p>
        </div>
      </section>
    </>
  );
}
