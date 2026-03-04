import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import PersonCard from "@/components/PersonCard";
import { Link } from "@/lib/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ABOUT" });
  return generatePageMetadata({
    title: t("TITLE"),
    description: t("INTRODUCTION_1"),
    path: "/about",
    locale,
  });
}

const team = [
  { name: "Perttu Lähteenlahti", title: "CEO & Co-Founder", image: "/images/team/perttu.png" },
  { name: "Eeva Siika-aho", title: "COO & Co-Founder", image: "/images/team/eeva.jpg" },
  { name: "Pietari Nurmi", title: "Head of Coaching", image: "/images/team/pietari.png" },
  { name: "Kayla Gordon", title: "Software Engineer", image: "/images/team/kayla.jpeg" },
  { name: "Miska Nurmi", title: "Data Analyst", image: "/images/team/miska.jpeg" },
  { name: "Chinh Le", title: "Software Engineer", image: "/images/team/chinh.jpeg" },
];

const scientists = [
  { name: "Anu-Katriina Pesonen", title: "Professor, University of Helsinki", image: "/images/team/anu.jpg" },
  { name: "Liisa Kuula", title: "Postdoctoral Researcher", image: "/images/team/liisa.jpeg" },
];

export default async function AboutPage() {
  const t = await getTranslations("ABOUT");

  return (
    <>
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-purple mb-8">
          {t("TITLE")}
        </h1>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-brand-purple mb-6">
          {t("NYXO")}
        </h2>
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>{t("INTRODUCTION_1")}</p>
          <p>{t("INTRODUCTION_2")}</p>
          <p>{t("INTRODUCTION_3")}</p>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-brand-purple text-center mb-12">
          Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {team.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      {/* Scientists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-brand-purple text-center mb-4">
          {t("SCIENTISTS")}
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          {t("SCIENTISTS_TEXT")}
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {scientists.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-brand-purple mb-4">
          {t("WORK_FOR_US")}
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          {t("WORK_FOR_US_TEXT")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-full no-underline hover:bg-brand-purple transition-colors"
        >
          {t("WORK_FOR_US")}
        </Link>
      </section>
    </>
  );
}
